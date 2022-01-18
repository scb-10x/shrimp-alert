export type NetworkName = 'localterra' | 'testnet' | 'mainnet' | 'custom'

export type NetworkInfo = {
  URL: string
  chainID: string,
  fcd?: string,
  ws?: string,
  name?: string
}

export const networks: Record<NetworkName, NetworkInfo> = {
  localterra: {
    URL: 'http://localhost:1317',
    chainID: 'localterra',
  },
  testnet: {
    URL: 'https://bombay-lcd.terra.dev',
    chainID: 'bombay-12',
    fcd: 'https://bombay-fcd.terra.dev',
  },
  mainnet: {
    URL: 'https://lcd.terra.dev',
    chainID: 'columbus-5',
    fcd: 'https://fcd.terra.dev',
  },
  custom: {
    URL: process.env.LCD_URL,
    chainID: process.env.CHAIN_ID,
    fcd: process.env.FCD_URL,
    ws: process.env.WS_URL,
    name: 'custom'
  }
}
