import { json as jsonParser } from 'body-parser';
import connect, { HandleFunction } from 'connect';
import cors from 'cors';
import http, { ServerOptions } from 'http';
import ServerTransport from './server-transport';
import type { JSONRPCRequest, JSONRPCResponse } from './types';
import { logger } from '../logger';
import { errorHandler } from '../middlewares';
import { InvalidRequest } from '../errors';

export interface HTTPServerTransportOptions extends ServerOptions {
  middleware: HandleFunction[];
  port: number;
  cors?: cors.CorsOptions;
  batch_size: number;
}

export default class HTTPServerTransport extends ServerTransport {
  private static defaultCorsOptions = { origin: '*' };
  private server: http.Server;
  private options: HTTPServerTransportOptions;

  constructor(options: HTTPServerTransportOptions) {
    super();
    const app = connect();

    const corsOptions = options.cors || HTTPServerTransport.defaultCorsOptions;
    this.options = {
      ...options,
      middleware: [
        cors(corsOptions) as HandleFunction,
        jsonParser({
          limit: '1mb'
        }),
        ...options.middleware
      ]
    };

    this.options.middleware.forEach((mw) => app.use(mw));

    app.use(this.httpRouterHandler.bind(this) as HandleFunction);
    app.use(errorHandler);

    this.server = http.createServer(app);
  }

  public start(): void {
    this.server.listen(this.options.port);
  }

  public stop(): void {
    this.server.close();
  }

  private async httpRouterHandler(req: any, res: any): Promise<void> {
    logger.debug(req.body, 'incoming request');
    let result = null;
    if (req.body instanceof Array) {
      if (req.body.length > this.options.batch_size) {
        const error = new InvalidRequest();
        result = {
          id: null,
          jsonrpc: '2.0',
          error: {
            code: error.code,
            data: error.data,
            message: `Exceeded maximum batch size ${this.options.batch_size}`
          }
        };
      } else {
        result = await Promise.all(req.body.map((r: JSONRPCRequest) => super.routerHandler(r)));
      }
    } else {
      result = await super.routerHandler(req.body);
    }
    if (!(result as JSONRPCResponse).error) {
      logger.debug(result, 'request completed');
    } else {
      logger.error(result, 'request completed');
    }
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
  }
}
