// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;


interface IPost  {

    function addPost(string memory _postUri, address posterAddress, uint256 projId)  external;

    function metadataURI() external view returns (string memory);
    
    function postURI(uint256 projId)  external view returns (string memory);
}