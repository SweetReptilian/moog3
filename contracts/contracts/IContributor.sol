// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;


interface IContributor  {
   function updateContribution(uint256 tokenId, address contributor, string memory _imageUri,string memory _profileUri, string memory _name) external; 

    function addContribution(string memory title, string memory _imageUri,string memory _contributionUri, address contributor, uint256 projId , uint256 profId) external;

    function metadataURI() external view returns (string memory);
    
    function contributionURI(uint256 contributionId) external view returns (string memory);

    function projectContributionsURI(uint256 contributionId)  external view returns (string memory);

    function likeContribution(uint256 contributionID , uint256 userID) external;

    function getContributionLikes(uint256 contributionID)  external view returns (uint32[] memory matchedIds);

    function getContributionsByAddress(address contributor)  external view returns (uint32[] memory contributionsIds);
}