// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./IQuery.sol";
contract Query is 
    Initializable,
    UUPSUpgradeable,
    OwnableUpgradeable,
    IQuery
    {
   /**
     * @dev initialization function for upgradeable contract
     */
    function initialize()
        public
        initializer
    {
        __Ownable_init();
        __UUPSUpgradeable_init();
    }

    function metadataURI(string memory metadataTable, string memory base) 
    public pure returns (string memory) {
        return string.concat(
            base, 
            "SELECT%20*%20FROM%20",
            metadataTable
        );
    }
    
    function getCreateProjectTableStatement(string memory _tableprefix, string memory chainid) 
    public pure returns (string memory) {
        return string.concat(
                "CREATE TABLE ",
                _tableprefix,
                "_",
                chainid,
                " (profAddress text, id int, title text, imageUri text, bannerUri text, projectUri text, primary key (id));"
            );
    }

    function getCreateProfileTableStatement(string memory _tableprefix, string memory chainid)
    public pure returns (string memory) {
        return string.concat(
                "CREATE TABLE ",
                _tableprefix,
                "_",
                chainid,
                " (profAddress text, id int, name text, imageUri text, profileUri text, primary key (profAddress));"
            );
    }

    function getCreateContributorTableStatement(string memory _tableprefix, string memory chainid) 
    public pure returns (string memory) {
        return string.concat(
                "CREATE TABLE ",
                _tableprefix,
                "_",
                chainid,
                " (contributionId int, contributorAddress text, projId int, title text, imageUri text, contributionUri text,  primary key (contributionId));"
            );
    }

    function getCreatePostTableStatement(string memory _tableprefix, string memory chainid)
    public pure returns (string memory) {
        return string.concat(
                "CREATE TABLE ",
                _tableprefix,
                "_",
                chainid,
                " (posterAddress text, projId int, postId int, postUri text);"
            );
    }

    function getCreateProposalTableStatement(string memory _tableprefix, string memory chainid)
    public pure returns (string memory) {
        return string.concat(
                "CREATE TABLE ",
                _tableprefix,
                "_",
                chainid,
                " (proposalAddress text, projId int, proposalId int, proposalUri text);"
            );
    }
    function getCreateVoteTableStatement(string memory _tableprefix, string memory chainid)
    public pure returns (string memory) {
        return string.concat(
                "CREATE TABLE ",
                _tableprefix,
                "_",
                chainid,
                " (votingAddress text, proposalId int, voteUri text);"
            );
    }

    function getContributionInsertStatement(string memory title,string memory metadataTable, string memory _imageUri,string memory _contributionUri, address contributor, uint256 projId,uint256 ContributionId)
    public pure returns (string memory) {
        return string.concat(
                "INSERT INTO ",
                metadataTable,
                " (contributionId, contributorAddress, projId, title, imageUri, contributionUri) VALUES ("
                ,Strings.toString(ContributionId)
                ,", '"
                ,Strings.toHexString(uint160(contributor), 20)
                ,"', "
                ,Strings.toString(projId)
                ,", '"
                ,title
                ,"', '"
                ,_imageUri
                ,"', '"
                ,_contributionUri
                ,"')");   
    }

    function getProjectInsertStatement(string memory metadataTable, uint256 newItemId, string memory title, string memory _imageUri, string memory _bannerUri, string memory _projectUri, address contributor)
    public pure returns (string memory) {
        return string.concat(
                "INSERT INTO ",
                metadataTable,
                " (profAddress, id, title, imageUri, bannerUri, projectUri) VALUES ("
                ," '"
                ,Strings.toHexString(uint160(contributor), 20)
                ,"', "
                ,Strings.toString(newItemId)
                ,", '"
                ,title
                ,"', '"
                ,_imageUri
                ,"', '"
                ,_bannerUri
                ,"', '"
                ,_projectUri
                ,"')");
    }
    
    function getProfileInsertStatement(string memory metadataTable, string memory _imageUri,string memory _profileUri, address contributor, uint256 tokenId,string memory name)
    public pure returns (string memory) {
        return string.concat(
                "INSERT INTO ",
                metadataTable,
                " (profAddress, id, name, imageUri, profileUri) VALUES ("
                ," '"
                ,Strings.toHexString(uint160(contributor), 20)
                ,"', "
                ,Strings.toString(tokenId)
                ,", '"
                ,name
                ,"', '"
                ,_imageUri
                ,"', '"
                ,_profileUri
                ,"')"); 
    }

    function getPostInsertStatement(string memory metadataTable, string memory _postUri, address posterAddress, uint256 projId, uint256 postId)
    public pure returns (string memory) {
        return string.concat(
                "INSERT INTO ",
                metadataTable,
                " (posterAddress, projId, postId, postUri) VALUES ("
                ," '"
                ,Strings.toHexString(uint160(posterAddress), 20)
                ,"', "
                ,Strings.toString(projId)
                ,", "
                ,Strings.toString(postId)
                ,", '"
                ,_postUri
                ,"')"); 
    }

    function getProposalInsertStatement(string memory metadataTable, string memory _proposalUri, address proposalAddress, uint256 projId, uint256 proposalId)
        public pure returns (string memory) {
            return string.concat(
                    "INSERT INTO ",
                    metadataTable,
                    " (proposalAddress, projId, proposalId, proposalUri) VALUES ("
                    ," '"
                    ,Strings.toHexString(uint160(proposalAddress), 20)
                    ,"', "
                    ,Strings.toString(projId)
                    ,", "
                    ,Strings.toString(proposalId)
                    ,", '"
                    ,_proposalUri
                    ,"')"); 
    }

    function getProposeImplementationInsertStatement(string memory metadataTable, string memory _ImplementationUri, address votingAddress, uint256 proposalId)
        public pure returns (string memory) {
            return string.concat(
                    "INSERT INTO ",
                    metadataTable,
                    " (votingAddress, proposalId, voteUri) VALUES ("
                    ," '"
                    ,Strings.toHexString(uint160(votingAddress), 20)
                    ,"', "
                    ,Strings.toString(proposalId)
                    ,", '"
                    ,_ImplementationUri
                    ,"')"); 
    }

    function getContributionURI(uint256 contributionId, string memory metadataTable, string memory base)  
    public pure returns (string memory) {
        return  string.concat(base
                ,"SELECT+json_object%28%27projId%27%2C+projId%2C+%27contributorAddress%27%2C+contributorAddress%2C+%27contributionUri%27%2C+contributionUri%29+FROM+"
                ,metadataTable
                ,"+WHERE+contributionId%3D"
                ,Strings.toString(contributionId)
				,"%0D%0A"
                );
    }

    function getProjectContributionsURI(uint256 projId, string memory metadataTable, string memory base)  
    public pure returns (string memory) {
        return  string.concat(base
                ,"SELECT+json_object%28%27projId%27%2C+projId%2C+%27contributorAddress%27%2C+contributorAddress%2C+%27contributionUri%27%2C+contributionUri%29+FROM+"
                ,metadataTable
                ,"+WHERE+projId%3D"
                ,Strings.toString(projId)
				,"%0D%0A"
                );
    }

    function getProfileURI(uint256 tokenId, string memory metadataTable, string memory base)  
    public pure returns (string memory) {
        return  string.concat(base
                ,"SELECT+json_object%28%27profAddress%27%2C+profAddress%2C+%27imageUri%27%2C+imageUri%2C+%27profileUri%27%2C+profileUri%29+FROM+"
                ,metadataTable
                ,"+WHERE+id%3D"
                ,Strings.toString(tokenId)
				,"%0D%0A"
                );
    }

    function getProjectURI(uint256 projID, string memory metadataTable, string memory base)  
    public pure returns (string memory) {
        return  string.concat(base
                ,"SELECT+json_object%28%27id%27%2C+id%2C+%27imageUri%27%2C+imageUri%2C+%27projectUri%27%2C+projectUri%29+FROM+"
                ,metadataTable
                ,"+WHERE+id%3D"
                ,Strings.toString(projID)
				,"%0D%0A%0D%0A"
                );
    }
//  Return the posts for each project
    function getPostURI(uint256 projID, string memory metadataTable, string memory base)  
    public pure returns (string memory) {
        return  string.concat(base
                ,"SELECT+json_object%28%27projId%27%2C+projId%2C+%27postUri%27%2C+postUri%29+FROM+"
                ,metadataTable
                ,"+WHERE+projId%3D"
                ,Strings.toString(projID)
				,"%0D%0A%0D%0A"
                );
    }



    function getUpdateContributionStatement(string memory metadataTable, uint256 tokenId,  string memory _imageUri,string memory _profileUri, string memory _name)
    public pure returns (string memory) 
    {
        return string.concat(
                "UPDATE ",
                metadataTable,
                " SET imageUri='",
                _imageUri,
                "', contributionUri='",
                _profileUri,
                "', title='",
                _name,
                "' WHERE contributionId=",
                Strings.toString(tokenId),
                ";"
            );
    }

    function getUpdateProfileStatement(string memory metadataTable, uint256 tokenId,  string memory _imageUri, string memory _profileUri, string memory _name)
    public pure returns (string memory) 
    {
        return string.concat(
                "UPDATE ",
                metadataTable,
                " SET imageUri='",
                _imageUri,
                "', profileUri='",
                _profileUri,
                "', name='",
                _name,
                "' WHERE id=",
                Strings.toString(tokenId),
                ";"
            );
    }

    function getUpdateProjectStatement(string memory metadataTable, uint256 tokenId,  string memory _imageUri, string memory _bannerUri, string memory _projectUri, string memory _name)
    public pure returns (string memory) 
    {
        return string.concat(
                "UPDATE ",
                metadataTable,
                " SET imageUri='",
                _imageUri,
                "', projectUri='",
                _projectUri,
                 "', bannerUri='",
                _bannerUri,
                "', title='",
                _name,
                "' WHERE id=",
                Strings.toString(tokenId),
                ";"
            );
    }

    function getUpdatePostStatement(string memory metadataTable, uint256 tokenId,  string memory _postUri)
    public pure returns (string memory) 
    {
        return string.concat(
                "UPDATE ",
                metadataTable,
                " SET postUri='",
                _postUri,
                "' WHERE postId=",
                Strings.toString(tokenId),
                ";"
            );
    }

    /**
     * @dev Override _authorizeUpgrade to upgrade only by owner
     */
    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}