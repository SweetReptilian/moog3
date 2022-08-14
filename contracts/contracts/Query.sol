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
                " (posterAddress text, projId int, postUri text);"
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

    function getPostInsertStatement(string memory metadataTable, string memory _postUri, address posterAddress, uint256 projId)
    public pure returns (string memory) {
        return string.concat(
                "INSERT INTO ",
                metadataTable,
                " (posterAddress, projId, postUri) VALUES ("
                ," '"
                ,Strings.toHexString(uint160(posterAddress), 20)
                ,"', "
                ,Strings.toString(projId)
                ,", '"
                ,_postUri
                ,"')"); 
    }

    function getContributionURI(uint256 contributionId, string memory metadataTable, string memory base)  
    public pure returns (string memory) {
        return  string.concat(base
                ,"SELECT%20"
                ,"json_object(%27projId%27,%20%20projId,%20%27contributorAddress%27,%20contributorAddress%20,%20%27contributionUri%27%20,%20contributionUri)"
                ,"%20FROM%20"
                ,metadataTable
                ,"%20WHERE%20contributionId="
                ,Strings.toString(contributionId)
                );
    }

    function getProjectContributionsURI(uint256 projId, string memory metadataTable, string memory base)  
    public pure returns (string memory) {
        return  string.concat(base
                ,"SELECT%20"
                ,"json_object(%27projId%27,%20%20projId,%20%27contributorAddress%27,%20contributorAddress%20,%20%27contributionUri%27%20,%20contributionUri)"
                ,"%20FROM%20"
                ,metadataTable
                ,"%20WHERE%20projId="
                ,Strings.toString(projId)
                );
    }

    function getProfileURI(uint256 tokenId, string memory metadataTable, string memory base)  
    public pure returns (string memory) {
        return  string.concat(base
                ,"SELECT%20"
                ,"json_object(%27profAddress%27,%20%20profAddress,%20%27imageUri%27,%20imageUri%20,%20%27profileUri%27%20,%20profileUri)"
                ,"%20FROM%20"
                ,metadataTable
                ,"%20WHERE%20id="
                ,Strings.toString(tokenId)
                );
    }

    function getProjectURI(uint256 projID, string memory metadataTable, string memory base)  
    public pure returns (string memory) {
        return  string.concat(base
                ,"SELECT%20"
                ,"json_object(%27id%27,%20%20id,%20%27imageUri%27,%20imageUri%20,%20%27projectUri%27%20,%20projectUri)"
                ,"%20FROM%20"
                ,metadataTable
                ,"%20WHERE%20id="
                ,Strings.toString(projID)
                );
    }
//  Return the posts for each project
    function getPostURI(uint256 projID, string memory metadataTable, string memory base)  
    public pure returns (string memory) {
        return  string.concat(base
                ,"SELECT%20"
                ,"json_object(%27projId%27,%20%20projId,%20%27postUri%27%20,%20postUri)"
                ,"%20FROM%20"
                ,metadataTable
                ,"%20WHERE%20projId="
                ,Strings.toString(projID)
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
    function getUpdateProfileStatement(string memory metadataTable, uint256 tokenId,  string memory _imageUri,string memory _profileUri, string memory _name)
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

    function getUpdateProjectStatement(string memory metadataTable, uint256 tokenId,  string memory _imageUri,string memory _projectUri, string memory _name)
    public pure returns (string memory) 
    {
        return string.concat(
                "UPDATE ",
                metadataTable,
                " SET imageUri='",
                _imageUri,
                "', projectUri='",
                _projectUri,
                "', title='",
                _name,
                "' WHERE id=",
                Strings.toString(tokenId),
                ";"
            );
    }

    function getUpdatePostStatement(string memory metadataTable, uint256 tokenId,  string memory _imageUri,string memory _projectUri, string memory _name)
    public pure returns (string memory) 
    {
        return string.concat(
                "UPDATE ",
                metadataTable,
                " SET imageUri='",
                _imageUri,
                "', projectUri='",
                _projectUri,
                "', title='",
                _name,
                "' WHERE id=",
                Strings.toString(tokenId),
                ";"
            );
    }

    /**
     * @dev Override _authorizeUpgrade to upgrade only by owner
     */
    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}