pragma solidity 0.8.4; //Do not change the solidity version as it negativly impacts submission grading
// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/access/Ownable.sol";
import "./YourToken.sol";

contract Vendor is Ownable {
	// events
	event BuyTokens(address buyer, uint256 amountOfETH, uint256 amountOfTokens);
	event SellTokens(address seller, uint256 amountOfTokens, uint256 amountOfETH);

	// state variables
	YourToken public yourToken;
	uint256 public constant tokensPerEth = 100;

	// contructor function
	constructor(address tokenAddress) {
		yourToken = YourToken(tokenAddress);
	}

	// ToDo: create a payable buyTokens() function:
	function buyTokens() external payable {
		require(msg.sender != address(0), "Address zero detected");
		require(msg.value > 0, "Zero amount not allowed!");

		uint amountOfTokens = msg.value * tokensPerEth;

		yourToken.transfer(msg.sender, amountOfTokens);

		emit BuyTokens(msg.sender, msg.value, amountOfTokens);
	}

	// ToDo: create a withdraw() function that lets the owner withdraw ETH
	function withdraw() external onlyOwner {
		require(address(this).balance > 0, "Contrat balance is negligible");

		payable(owner()).transfer(address(this).balance);
	}

	// ToDo: create a sellTokens(uint256 _amount) function:
	function sellTokens(uint256 _amount) external {
		require(msg.sender != address(0), "Address zero detected");
		require(_amount > 0, "zero amount not allowed");

		uint amountEthForTokens = (_amount / tokensPerEth) * 1e18;

		// transfer tokens from user to contract
		yourToken.transferFrom(msg.sender, address(this), _amount);

		// pay seller
		payable(msg.sender).transfer(amountEthForTokens / 1e18);

		// emit event
		emit SellTokens(msg.sender, _amount, amountEthForTokens);
	}
}
