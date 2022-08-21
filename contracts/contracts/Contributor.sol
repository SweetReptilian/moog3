// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@tableland/evm/contracts/ITablelandTables.sol";
import "@tableland/evm/contracts/utils/TablelandDeployments.sol";
import "@openzeppelin/contracts-upgradeable/utils/structs/EnumerableSetUpgradeable.sol";
import "./IQuery.sol";

contract Contributor is 
    Initializable,
    UUPSUpgradeable,
    OwnableUpgradeable
    
    {
    using Counters for Counters.Counter;
    using EnumerableSetUpgradeable for EnumerableSetUpgradeable.UintSet;
    Counters.Counter private _ContributionId;
    ITablelandTables private _tableland;
    IQuery private queryContract;
    error NonExistentUser();
    string private _metadataTable;
    uint256 private _metadataTableId;
    string private  _baseURIString;
    string private  _tablePrefix;
    string private _chainID;
    mapping(address => EnumerableSetUpgradeable.UintSet) private _contributionSet;
    mapping(address => uint256) private _ProfSet;
    mapping(uint256 => uint256) private _ContributionLikes;
    mapping(uint256 => EnumerableSetUpgradeable.UintSet) private _ContributionLikedBy;


     /**
     * @dev initialization function for upgradeable contract
     */
    function initialize(IQuery initqueryContract)
        public
        initializer
    {
        queryContract = initqueryContract;
        __Ownable_init();
        __UUPSUpgradeable_init();
        _baseURIString = "https://testnet.tableland.network/query?s=";
        _tablePrefix = "MoogCon";
        _tableland = TablelandDeployments.get();
        _chainID = Strings.toString(block.chainid);
        // Creating Contributor Table
        _metadataTableId = _tableland.createTable(
            address(this),
            queryContract.getCreateContributorTableStatement(_tablePrefix,_chainID)
        );

        _metadataTable = string.concat(
            _tablePrefix,
            "_",
            Strings.toString(block.chainid),
            "_",
            Strings.toString(_metadataTableId)
        );
    }


    /*
     * safeMint allows anyone to mint a token in this project.
     * Any time a token is minted, a new row of metadata will be
     * dynamically inserted into the metadata table.
     */
    function addContribution(string memory title, string memory _imageUri,string memory _contributionUri, address contributor, uint256 projId, uint256 profId) public  {
        _ContributionId.increment();
        uint256 id = _ContributionId.current();
        _contributionSet[contributor].add(id);
        _ProfSet[contributor] = profId;

        _tableland.runSQL(
            address(this),
            _metadataTableId,
            queryContract.getContributionInsertStatement(title, _metadataTable,_imageUri,_contributionUri,contributor,projId,id)
        );

    }

    function likeContribution(uint256 contributionID , uint256 userID) public {
        uint256 current = _ContributionLikes[contributionID];
        current++;
        _ContributionLikes[contributionID] = current;
        _ContributionLikedBy[contributionID].add(userID);
    }

    function getContributionLikes(uint256 contributionID)  public
        view
        returns (uint32[] memory matchedIds)
    {
        uint256 size = _ContributionLikedBy[contributionID].length();
        matchedIds = new uint32[](size);
        for (uint256 i = 0; i < size; ++i) {
            matchedIds[i] = uint32(_ContributionLikedBy[contributionID].at(i));
        }
    }

    function getContributionsByAddress(address contributor)  public
        view
        returns (uint32[] memory contributionsIds)
    {
        uint256 size = _contributionSet[contributor].length();
        contributionsIds = new uint32[](size);
        for (uint256 i = 0; i < size; ++i) {
            contributionsIds[i] = uint32(_contributionSet[contributor].at(i));
        }
    }

    


    function _baseURI() internal view returns (string memory) {
        return _baseURIString;
    }

    /*
     * tokenURI is an example of how to turn a row in your table back into
     * erc721 compliant metadata JSON. here, we do a simple SELECT statement
     * with function that converts the result into json.
     */
    function contributionURI(uint256 contributionId)  public view returns (string memory) {
        require(_ContributionId.current() >= contributionId, "nonexistent token");
        return  queryContract.getContributionURI(contributionId, _metadataTable, _baseURI());
    }

    function projectContributionsURI(uint256 contributionId)  public view returns (string memory) {
        return  queryContract.getProjectContributionsURI(contributionId, _metadataTable, _baseURI());
    }
    function metadataURI() public view returns (string memory) {
        
        return queryContract.metadataURI(_metadataTable, _baseURI());
}

    function updateContribution(uint256 tokenId, address contributor, string memory _imageUri,string memory _profileUri, string memory _name)
        public
    {
        require(
            _contributionSet[contributor].contains(tokenId),
            "OnlyOwner"
        );
        _tableland.runSQL(
            address(this),
            _metadataTableId,
            queryContract.getUpdateContributionStatement(_metadataTable, tokenId, _imageUri, _profileUri, _name)
        );
        
    }


    /**
     * @dev Set baseURI
     */
    function setBaseURI(string calldata newBaseURI) external onlyOwner  {
        _baseURIString = newBaseURI;
    }

    /**
     * @dev Set matching contract
     */
    function setQueryContract(IQuery _queryContract) external onlyOwner      
    {
        queryContract = _queryContract;
    }



    /**
     * @dev Override _authorizeUpgrade to upgrade only by owner
     */
    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

   
}