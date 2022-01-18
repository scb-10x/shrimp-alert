import { networks } from './networks'

export const config = () => ({
  port: parseInt(process.env.PORT, 10) || 4000,
  appEnv: process.env.APP_ENV || 'local',
  terra: {
    network: networks[process.env.TERRA_NETWORK || 'testnet'],
  }
})
