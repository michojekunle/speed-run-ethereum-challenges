pragma solidity 0.8.4; //Do not change the solidity version as it negativly impacts submission grading
// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// learn more: https://docs.openzeppelin.com/contracts/4.x/erc20

contract YourToken is ERC20 {
  constructor() ERC20("Amd Token", "AMDT") {
    _mint(0x573747e210a4C329FE2C418C2Bb629CD3e2c915b, 1000 * 10 ** 18);
  }
}
