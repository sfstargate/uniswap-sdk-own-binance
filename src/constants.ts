import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  BINANCETEST = 97
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

//export const FACTORY_ADDRESS = '0x7ae9b224d23DEdA3361b63D40E7a3EDA901E7F32' // Rinkeby
export const FACTORY_ADDRESS = '0xAd064AbCdFF62f6d58a2596d95AE30021D413766' // Binance Test

//export const INIT_CODE_HASH = '0x8231d808669dc1b5a98d573d076abc52f6257e4d7b55fe17397220d7c0285a24' // Rinkeby
export const INIT_CODE_HASH = '0xcf30bb45942090aa33ace5769c682a778fd9370e30c6c661795c6ff3e603f67e' // Binance Test

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
