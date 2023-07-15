# Types of Functions - ETH + AVAX
It represents a basic token contract in Solidity that allows for token transfers, minting new tokens, and burning existing tokens. It includes an owner-based access control mechanism and emits events to track token transfers, burns, and mints.
## Description
This Solidity code represents a token contract called "MyToken" that can be deployed on the Ethereum blockchain.The contract provides functionalities for token transfers, minting new tokens, and burning existing tokens. The contract maintains a mapping of token balances for different addresses. Events are emitted to provide visibility and notification of token transfers, burns, and mints. This contract can be used as a foundation for creating and managing tokens on the Ethereum network.
```
function transfer(address _to, uint256 _value) external returns (bool)
```
This function allows the caller to transfer tokens to the specified recipient address. It checks for a valid recipient address and sufficient balance of the caller. If the conditions are met, it updates the balances, emits a Transfer event, and returns true.
```
function mint(address _to, uint256 _value) external onlyOwner
```
This function can only be called by the contract owner. It mints new tokens and assigns them to the specified recipient address. It increases both the recipient's balance and the total supply of tokens. It emits a Mint event and a Transfer event.
```
function burn(uint256 _value) external returns (bool)
```
This function allows the caller to burn a certain amount of their own tokens. It checks for sufficient balance of the caller. If the condition is met, it decreases both the caller's balance and the total supply of tokens. It emits a Burn event and returns true.
## Geting Started
### Installation
Install the hardhat and all the dependencies which are required.      
Install the version of nodejs which is suitable with your hardhat.
### Executing program
**Step 1:** In terminal, Start a local node.
```
npx hardhat node
```
**Step 2:** Open a new terminal and deploy the smart contract in the localhost network.
```
npx hardhat run ./scripts/deploy.js --network localhost
```
**Step 3:** Open the Remix IDE in your browser (https://remix.ethereum.org/) and create a new file. Copy the content of MyToken.sol and paste it into the new file in the Remix IDE.              

**Step 4:** In the Remix IDE, compile the code by clicking on the "Solidity Compiler" tab in the sidebar. Under the "Compile" section, click on "Compile MyToken.sol".        

**Step 5:** Copy the contract address and paste at the "Load contract from Address". Click on AtAddress.
## Authors
Metacrafter Student   
[Lavanish Chaudhary](https://www.linkedin.com/in/lavanish-chaudhary/)
## License
This project is licensed under the MIT License.
