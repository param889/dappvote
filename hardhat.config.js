require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    hardhat: {
      accounts: {
        mnemonic: process.env.NEXT_APP_SEED_PHRASE,
      },
      chainId: 1337  
    },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
}
