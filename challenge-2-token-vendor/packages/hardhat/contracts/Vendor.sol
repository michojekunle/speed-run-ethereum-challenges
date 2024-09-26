pragma solidity 0.8.4; //Do not change the solidity version as it negativly impacts submission grading
// SPDX-License-Identifier: MIT

// import "@openzeppelin/contracts/access/Ownable.sol";
import "./YourToken.sol";

contract Vendor {
	event BuyTokens(address buyer, uint256 amountOfETH, uint256 amountOfTokens);

	YourToken public yourToken;
	address owner;

	constructor(address tokenAddress) {
		yourToken = YourToken(tokenAddress);
		owner = msg.sender;
	}

	// ToDo: create a payable buyTokens() function:
	function buyTokens() external payable {}

	// ToDo: create a withdraw() function that lets the owner withdraw ETH
	function withdraw() external {
		require(address(this).balance > 0, "Contrat balance is negligible");

		payable(owner).transfer(address(this).balance);
	}

	// ToDo: create a sellTokens(uint256 _amount) function:
  function sellTokens(uint256 _amount) external {
    require(_amount > 0, 'zero amount not allowed');

    
  }
}
