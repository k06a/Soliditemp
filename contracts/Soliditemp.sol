pragma solidity ^0.5.0;

import "@openzeppelin/contracts/ownership/Ownable.sol";


contract Soliditemp is Ownable {
    event Log(uint256 a);

    function func(uint256 a) public {
        emit Log(a);
    }
}
