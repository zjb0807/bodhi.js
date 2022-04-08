import { BigNumber } from '@ethersproject/bignumber';

export const ZERO = 0;
export const BIGNUMBER_ONE = BigNumber.from(1);
export const EMPTY_STRING = '';

export const BIGNUMBER_ZERO = BigNumber.from(ZERO);

export const GAS_PRICE = BIGNUMBER_ONE;
export const EFFECTIVE_GAS_PRICE = BIGNUMBER_ONE;
export const MAX_FEE_PER_GAS = BIGNUMBER_ONE;
export const MAX_PRIORITY_FEE_PER_GAS = BIGNUMBER_ONE;
export const U32MAX = BigNumber.from('0xffffffff');
export const U64MAX = BigNumber.from('0xffffffffffffffff');

export const DUMMY_ADDRESS = '0x1111111111333333333355555555558888888888';
export const DUMMY_LOGS_BLOOM =
  '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
export const DUMMY_V = '0x25';
export const DUMMY_R = '0x1b5e176d927f8e9ab405058b2d2457392da3e20f328b16ddabcebc33eaac5fea';
export const DUMMY_S = '0x4ba69724e8f69de52f0125ad8b3c5c2cef33019bac3249e2c0a2192766d1721c';
export const DUMMY_BLOCK_NONCE = '0x0000000000000000';
export const DUMMY_BLOCK_MIX_HASH = '0x0000000000000000000000000000000000000000000000000000000000000000';
export const EMTPY_UNCLE_HASH = '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347';
export const EMTPY_UNCLES = [];
export const MIRRORED_TOKEN_CONTRACT =
  '0x608060405234801561001057600080fd5b506118af806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c3919061153c565b60405180910390f35b6100e660048036038101906100e19190611105565b610285565b6040516100f39190611521565b60405180910390f35b6101046102a1565b604051610111919061161e565b60405180910390f35b610134600480360381019061012f91906110b6565b6102b0565b6040516101419190611521565b60405180910390f35b6101526102d8565b60405161015f9190611639565b60405180910390f35b610182600480360381019061017d9190611105565b6102e7565b60405161018f9190611521565b60405180910390f35b6101b260048036038101906101ad9190611051565b610389565b6040516101bf919061161e565b60405180910390f35b6101d061039b565b6040516101dd919061153c565b60405180910390f35b61020060048036038101906101fb9190611105565b6103aa565b60405161020d9190611521565b60405180910390f35b610230600480360381019061022b9190611105565b61048c565b60405161023d9190611521565b60405180910390f35b610260600480360381019061025b919061107a565b6104a8565b60405161026d919061161e565b60405180910390f35b606061028061052e565b905090565b60008033905061029681858561064c565b600191505092915050565b60006102ab610816565b905090565b6000803390506102c1858285610934565b6102cc8585856109c0565b60019150509392505050565b60006102e2610b15565b905090565b60008033905061037e8185856000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461037991906116e7565b61064c565b600191505092915050565b600061039482610c33565b9050919050565b60606103a5610d5e565b905090565b60008033905060008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015610473576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046a906115fe565b60405180910390fd5b610480828686840361064c565b60019250505092915050565b60008033905061049d8185856109c0565b600191505092915050565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b606060008061040073ffffffffffffffffffffffffffffffffffffffff166040516024016040516020818303038152906040527f06fdde03000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516105dc91906114b8565b600060405180830381855afa9150503d8060008114610617576040519150601f19603f3d011682016040523d82523d6000602084013e61061c565b606091505b50915091506000821415610631573d60208201fd5b808060200190518101906106459190611141565b9250505090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b3906115de565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561072c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107239061157e565b60405180910390fd5b806000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610809919061161e565b60405180910390a3505050565b600080600061040073ffffffffffffffffffffffffffffffffffffffff166040516024016040516020818303038152906040527f18160ddd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516108c491906114b8565b600060405180830381855afa9150503d80600081146108ff576040519150601f19603f3d011682016040523d82523d6000602084013e610904565b606091505b50915091506000821415610919573d60208201fd5b8080602001905181019061092d9190611182565b9250505090565b600061094084846104a8565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146109ba57818110156109ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a39061159e565b60405180910390fd5b6109b9848484840361064c565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a27906115be565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610aa0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a979061155e565b60405180910390fd5b610aab838383610e7c565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610b08919061161e565b60405180910390a3505050565b600080600061040073ffffffffffffffffffffffffffffffffffffffff166040516024016040516020818303038152906040527f313ce567000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051610bc391906114b8565b600060405180830381855afa9150503d8060008114610bfe576040519150601f19603f3d011682016040523d82523d6000602084013e610c03565b606091505b50915091506000821415610c18573d60208201fd5b80806020019051810190610c2c91906111ab565b9250505090565b600080600061040073ffffffffffffffffffffffffffffffffffffffff1684604051602401610c6291906114cf565b6040516020818303038152906040527f70a08231000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051610cec91906114b8565b600060405180830381855afa9150503d8060008114610d27576040519150601f19603f3d011682016040523d82523d6000602084013e610d2c565b606091505b50915091506000821415610d41573d60208201fd5b80806020019051810190610d559190611182565b92505050919050565b606060008061040073ffffffffffffffffffffffffffffffffffffffff166040516024016040516020818303038152906040527f95d89b41000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051610e0c91906114b8565b600060405180830381855afa9150503d8060008114610e47576040519150601f19603f3d011682016040523d82523d6000602084013e610e4c565b606091505b50915091506000821415610e61573d60208201fd5b80806020019051810190610e759190611141565b9250505090565b60008061040073ffffffffffffffffffffffffffffffffffffffff16858585604051602401610ead939291906114ea565b6040516020818303038152906040527fbeabacc8000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051610f3791906114b8565b6000604051808303816000865af19150503d8060008114610f74576040519150601f19603f3d011682016040523d82523d6000602084013e610f79565b606091505b50915091506000821415610f8e573d60208201fd5b5050505050565b6000610fa8610fa384611685565b611654565b905082815260208101848484011115610fc057600080fd5b610fcb848285611792565b509392505050565b600081359050610fe281611834565b92915050565b600082601f830112610ff957600080fd5b8151611009848260208601610f95565b91505092915050565b6000813590506110218161184b565b92915050565b6000815190506110368161184b565b92915050565b60008151905061104b81611862565b92915050565b60006020828403121561106357600080fd5b600061107184828501610fd3565b91505092915050565b6000806040838503121561108d57600080fd5b600061109b85828601610fd3565b92505060206110ac85828601610fd3565b9150509250929050565b6000806000606084860312156110cb57600080fd5b60006110d986828701610fd3565b93505060206110ea86828701610fd3565b92505060406110fb86828701611012565b9150509250925092565b6000806040838503121561111857600080fd5b600061112685828601610fd3565b925050602061113785828601611012565b9150509250929050565b60006020828403121561115357600080fd5b600082015167ffffffffffffffff81111561116d57600080fd5b61117984828501610fe8565b91505092915050565b60006020828403121561119457600080fd5b60006111a284828501611027565b91505092915050565b6000602082840312156111bd57600080fd5b60006111cb8482850161103c565b91505092915050565b6111dd8161173d565b82525050565b6111ec8161174f565b82525050565b60006111fd826116b5565b61120781856116cb565b9350611217818560208601611792565b80840191505092915050565b600061122e826116c0565b61123881856116d6565b9350611248818560208601611792565b61125181611823565b840191505092915050565b60006112696023836116d6565b91507f45524332303a207472616e7366657220746f20746865207a65726f206164647260008301527f65737300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006112cf6022836116d6565b91507f45524332303a20617070726f766520746f20746865207a65726f20616464726560008301527f73730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611335601d836116d6565b91507f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006000830152602082019050919050565b60006113756025836116d6565b91507f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006113db6024836116d6565b91507f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006114416025836116d6565b91507f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008301527f207a65726f0000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6114a38161177b565b82525050565b6114b281611785565b82525050565b60006114c482846111f2565b915081905092915050565b60006020820190506114e460008301846111d4565b92915050565b60006060820190506114ff60008301866111d4565b61150c60208301856111d4565b611519604083018461149a565b949350505050565b600060208201905061153660008301846111e3565b92915050565b600060208201905081810360008301526115568184611223565b905092915050565b600060208201905081810360008301526115778161125c565b9050919050565b60006020820190508181036000830152611597816112c2565b9050919050565b600060208201905081810360008301526115b781611328565b9050919050565b600060208201905081810360008301526115d781611368565b9050919050565b600060208201905081810360008301526115f7816113ce565b9050919050565b6000602082019050818103600083015261161781611434565b9050919050565b6000602082019050611633600083018461149a565b92915050565b600060208201905061164e60008301846114a9565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561167b5761167a6117f4565b5b8060405250919050565b600067ffffffffffffffff8211156116a05761169f6117f4565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006116f28261177b565b91506116fd8361177b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611732576117316117c5565b5b828201905092915050565b60006117488261175b565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156117b0578082015181840152602081019050611795565b838111156117bf576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61183d8161173d565b811461184857600080fd5b50565b6118548161177b565b811461185f57600080fd5b50565b61186b81611785565b811461187657600080fd5b5056fea2646970667358221220416663509542905b08b5355f863b01962ffe404f8af4539192b7aecad7247fa864736f6c63430008000033';

export const ERC20_ABI = [
  // Read-Only Functions
  'function balanceOf(address owner) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)',

  // Authenticated Functions
  'function transfer(address to, uint amount) returns (bool)',

  // Events
  'event Transfer(address indexed from, address indexed to, uint amount)'
];

export const LOCAL_MODE_MSG = `
  -------------------------------
  🔨 local development mode is ON
  ❌ don't use it for production!
  -------------------------------
`;

export const PROD_MODE_MSG = `
  ------------------------------------------
  ⚡️ running in production (standard) mode ⚡️
  ------------------------------------------
`;

export const SAFE_MODE_WARNING_MSG = `
  ------------------------------- WARNING -----------------------------
  🔒 SafeMode is ON, and RPCs behave very differently than usual world!
  ---------------------------------------------------------------------
`;

export const CACHE_SIZE_WARNING = `
  ------------------- WARNING -------------------
  Max cached blocks is big, please be cautious!
  If memory exploded, try decrease MAX_CACHE_SIZE
  -----------------------------------------------
`;
