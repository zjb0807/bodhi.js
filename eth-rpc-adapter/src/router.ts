import { Logger as EthLogger } from '@ethersproject/logger';
import { ERROR_PATTERN } from '@acala-network/eth-providers';
import { Eip1193Bridge } from './eip1193-bridge';
import { InvalidParams, JSONRPCError, MethodNotFound } from './errors';
import { logger } from './logger';
import { JSONRPCResponse } from './transports/types';

export class Router {
  readonly #bridge: Eip1193Bridge;

  constructor(bridge: Eip1193Bridge) {
    this.#bridge = bridge;
  }

  public async call(methodName: string, params: unknown[], cb?: any): Promise<Partial<JSONRPCResponse>> {
    try {
      return { result: await this.#bridge.send(methodName, params, cb) };
    } catch (err: any) {
      if (JSONRPCError.isJSONRPCError(err)) {
        return { error: { code: err.code, message: err.message, data: err.data } };
      }
      if (typeof err === 'object' && err.code) {
        let error = null;

        if (err.code === EthLogger.errors.INVALID_ARGUMENT) {
          error = new InvalidParams(err.message);
        }

        if (err.code === EthLogger.errors.UNSUPPORTED_OPERATION) {
          error = new InvalidParams(err.message);
        }

        if (err.code === EthLogger.errors.NOT_IMPLEMENTED) {
          error = new MethodNotFound(err.message);
        }

        if (error) {
          return { error: { code: error.code, message: error.message, data: error.data } };
        }
      }

      logger.error({ err, methodName, params }, 'request error');

      let message = err.message;
      for (const pattern of ERROR_PATTERN) {
        const match = message.match(pattern);
        if (match) {
          const error = this.#bridge.provider.api.registry.findMetaError(new Uint8Array([match[1], match[2]]));
          message = `${error.section}.${error.name}: ${error.docs}`;
          break;
        }
      }

      return { error: { code: 6969, message: `Error: ${message}` } };
    }
  }

  public isMethodImplemented(methodName: string): boolean {
    return this.#bridge.isMethodImplemented(methodName);
  }
}
