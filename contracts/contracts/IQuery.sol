// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;


interface IQuery  {

   function getCreateProjectTableStatement(string memory _tableprefix, string memory chainid) external pure returns (string memory);

   function getCreateProfileTableStatement(string memory _tableprefix, string memory chainid) external pure returns (string memory);

   function getCreateContributorTableStatement(string memory _tableprefix, string memory chainid) external pure returns (string memory);

   function getCreatePostTableStatement(string memory _tableprefix, string memory chainid) external pure returns (string memory);

   function getCreateProposalTableStatement(string memory _tableprefix, string memory chainid)
    external pure returns (string memory);

  function getCreateVoteTableStatement(string memory _tableprefix, string memory chainid)
    external pure returns (string memory);

   function getContributionInsertStatement(string memory title,string memory metadataTable, string memory imageUri,string memory contributionUri, address contributor, uint256 projId,uint256 ContributionId)
    external pure returns (string memory);

   function metadataURI(string memory metadataTable, string memory base) external pure returns (string memory);

   function getProjectInsertStatement(string memory metadataTable, uint256 newItemId, string memory title, string memory imageUri, string memory bannerUri, string memory _projectUri, address contributor)
     external pure returns (string memory);

   function getProfileInsertStatement(string memory metadataTable, string memory imageUri,string memory profileUri, address contributor, uint256 tokenId,string memory name)
     external pure returns (string memory);

   function getPostInsertStatement(string memory metadataTable, string memory postUri, address posterAddress, uint256 projId, uint256 postId)
    external pure returns (string memory);

   function getProposalInsertStatement(string memory metadataTable, string memory proposalUri, address proposalAddress, uint256 projId, uint256 proposalId)
    external pure returns (string memory);

   function getProposeImplementationInsertStatement(string memory metadataTable, string memory ImplementationUri, address votingAddress, uint256 proposalId)
    external pure returns (string memory);

   function getContributionURI(uint256 contributionId, string memory metadataTable, string memory base)  
    external pure returns (string memory);

   function getProjectContributionsURI(uint256 projId, string memory metadataTable, string memory base)  
    external pure returns (string memory);

   function getProfileURI(uint256 profileid, string memory metadataTable, string memory base)  
    external pure returns (string memory);

   function getProjectURI(uint256 projectid, string memory metadataTable, string memory base)  
    external pure returns (string memory);

   function getPostURI(uint256 projID, string memory metadataTable, string memory base)  
    external pure returns (string memory);

   function getUpdateContributionStatement(string memory metadataTable, uint256 tokenId,  string memory imageUri,string memory contributionUri, string memory title)
    external pure returns (string memory);

   function getUpdateProfileStatement(string memory metadataTable, uint256 tokenId,  string memory imageUri,string memory profileUri, string memory name)
    external pure returns (string memory);

   function getUpdateProjectStatement(string memory metadataTable, uint256 tokenId,  string memory imageUri, string memory bannerUri, string memory projectUri, string memory title)
    external pure returns (string memory);

   function getUpdatePostStatement(string memory metadataTable, uint256 tokenId,  string memory _postUri)
    external pure returns (string memory);
}