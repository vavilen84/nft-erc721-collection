# NFT ERC721 Collection

An all-in-one solution for `ERC721` collections. Build, test and deploy your smart contract, together with a totally
integrated DAPP within a simple yet powerful workspace.

## Disclaimer
This project was created for educational purposes, please refer to the [LICENCE](LICENSE) file for further information.

## Main features
- extremely high gas efficiency (users are going to pay lower gas fees compared to traditional collections)
- whitelist support with customizable list size (using a Merkle Tree for verification)
- automated contract verification through block explorers (e.g. Etherscan)
- simple CLI commands that guide you through all the sale steps (whitelist, pre-sale, public sale)
- built as a Hardhat project with TypeScript support for a better development experience
- includes a fully-featured minting DAPP (React + TypeScript + SCSS + Webpack)
- full support for contract interaction through block explorers (e.g. Etherscan), for all the users that do not trust custom DAPPs (including the `whitelistMint(...)` function)
- customizable minting DAPP (from basic branding to complete customization)
- now based on `ERC721A`

## YouTube tutorials

|Lesson ID|Description|Video link|
|---|---|---|
|`00a`|Basic setup on **Windows 10**|https://youtu.be/zjlg-0622PU|
|`00b`|Basic setup on **macOS Catalina (Intel-based)**|https://youtu.be/acqXzKN5Xys|
|`00c`|Basic setup on **Linux**|https://youtu.be/imuqi6Vg3Zw|
|`01`|Speedrun: create and deploy a smart contract + DAPP (v2.x)|https://youtu.be/AFrsJRLrZEM|
|`02`|The smart contract project|https://youtu.be/XToWWExBLXE|
|`03`|The minting DAPP project|https://youtu.be/gs9mVwkn8u4|
|`04`|Configuration and security|https://youtu.be/pkA86GHU_xw|
|`05`|Managing the collection without leaving Visual Studio Code|https://youtu.be/yOVKEeRMJSs|
|`06`|Managing the contract using Truffle Dashboard|https://youtu.be/fwdIA5UuPmM|
|`07`|Running smart contract functions manually on the block explorer|https://youtu.be/zhvTJhBbtnE|
|`08`|Customizing the look and feel of the DAPP|https://youtu.be/GoDp6yZAY9A|
|`09`|Deploying the DAPP|https://youtu.be/uUrbIXUgVz4|

## Legacy tutorials

|Description|Video link|
|---|---|
|Speedrun: create and deploy a smart contract + DAPP (v1.x)|https://youtu.be/VpXJZSqLO8A|

## Requirements

### Software
- [Visual Studio Code](https://code.visualstudio.com/) (with the [Solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity) extension)
- [NodeJs](https://nodejs.org/) (with the [Yarn package manager](https://yarnpkg.com/getting-started/install))

### Services
- Etherscan free API key _(optional: used for the automated contract verificiation, as well as retrieving the current values for gas cost estimation)_
- Infura free basic plan or higher _(optional: used by the CLI commands in order to perform operations on real blockchains, you can skip this if you deploy and manage your contract [using Truffle Dashboard](https://youtu.be/fwdIA5UuPmM))_
- Coin Market Cap free API key _(optional: used for retrieving the current token price for gas cost estimation in USD)_

# Fork description

This fork has additional from original repo functionality:
- OpenSea royalty enforcement
- Set withdraw address & withdraw amount percentage functionality
- Set royalty receiver address

This repo was tested with MetaMask wallet & and Goerli test network. OpenSea shows NFTs deployed to Goerli at the 
moment of creating this fork. Here you can find working Goerli faucet https://goerli-faucet.pk910.de/.
If MetaMask doesn`t propose to add Goerli test network from predefined networks try nest steps. In order to add 
Goerli testnetwork to you MetaMask wallet click 'Add a network', set these Goerli network values:
- Network name: Goerli test network
- New RPC URL: https://goerli.infura.io/v3/
- Chain ID: 5
- Currency symbol: GoerliETH
- Block explorer URL: https://goerli.etherscan.io

## Smart contract deployment

1. go to ./smart-contract folder
2. create .env file from .env.example
3. required vars are:
```
COLLECTION_URI_PREFIX=https://your-collection-metadata.s3.amazonaws.com/
BLOCK_EXPLORER_API_KEY=522CISGD8CD2GMUXEIID09F8GD0F9GD0F9GDF0G9
WITHDRAW_PERCENTAGE=10
ROYALTY_RECEIVER=0x00d304F2A270d9f8g0d9f8g0d9fg8CCeF2e8672DB6930E
WITHDRAW_RECEIVER=0x0Cf9544F1b1158d4Bdfg08df0g98df0g9d8558EBc262b
```
4. these vars could be removed from .env file if you dont use them:
```
NETWORK_TESTNET_URL
NETWORK_TESTNET_PRIVATE_KEY
NETWORK_MAINNET_URL
NETWORK_MAINNET_PRIVATE_KEY
GAS_REPORTER_COIN_MARKET_CAP_API_KEY
```
5. in order to get BLOCK_EXPLORER_API_KEY value:
- go to https://etherscan.io/ 
- go to your account 
- find API Keys section
- create new API Key
6. go to ./smart-contract folder & run `yarn` in order to install deps
7. run `yarn compile` in order to compile you contract
8. install truffle globally https://trufflesuite.com/docs/truffle/how-to/install/
9. install hardhat globally https://hardhat.org/
10. run `truffle dashboard` and connect your network. This will open dialog window where you will approve your 
transactions. Firstly, you should connect your wallet. Be carefull, if you deploy your contract having 
testing purposes, then be sure that you wallet is connected to Goerli test network.
11. run `yarn deploy --network truffle` - you should click 'Confirm' & than you should see your transaction in 
you wallet where you should also confirm it. After transaction have passed successfully you should see address of 
your new deployed contract. Copy and paste this address to ./smart-contract/config/CollectionConfig.ts CollectionConfig.contractAddress prop.
```
// ./smart-contract/config/CollectionConfig.ts
...
  contractAddress: null,
 ...
```
should become
```
// ./smart-contract/config/CollectionConfig.ts
...
  contractAddress: '0x73e99C4Fsd09f8Fe1e7FCE8c445E125a977A67ede6a',
 ...
```
Be ready that transactions in blockchain may be in pending state for ~ 40 minutes. It can happen.

12. run `yarn verify 0x73e99C4Fsd09f8Fe1e7FCE8c445E125a977A67ede6a --network truffle` - this will verify your contract.
13. run `yarn set-royalty-receiver --network truffle` - this will set royalty receiver from .env file
14. run `yarn set-withdraw-receiver --network truffle` - this will set withdraw receiver from .env file
15. run `yarn public-sale-open --network truffle` - this will enable minting 

That`s all!

