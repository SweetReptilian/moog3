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

contract Post is 
    Initializable,
    UUPSUpgradeable,
    OwnableUpgradeable
    {
    using Counters for Counters.Counter;
    using EnumerableSetUpgradeable for EnumerableSetUpgradeable.UintSet;
    Counters.Counter private _PostId;
    ITablelandTables private _tableland;
    IQuery private queryContract;
    error NonExistentUser();
    string private _metadataTable;
    uint256 private _metadataTableId;
    string private  _baseURIString;
    string private  _tablePrefix;
    string private _chainID;
    mapping(address => EnumerableSetUpgradeable.UintSet) private _postSet;
    mapping(address => uint256) private _ProfSet;


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
        _tablePrefix = "MoogPostTable";
        _tableland = TablelandDeployments.get();
        _chainID = Strings.toString(block.chainid);
        // Creating Post Table
        _metadataTableId = _tableland.createTable(
            address(this),
            queryContract.getCreatePostTableStatement(_tablePrefix,_chainID)
        );

        _metadataTable = string.concat(
            _tablePrefix,
            "_",
            _chainID,
            "_",
            Strings.toString(_metadataTableId)
        );
    }


    /*
     * safeMint allows anyone to mint a token in this project.
     * Any time a token is minted, a new row of metadata will be
     * dynamically inserted into the metadata table.
     */
    function addPost(string memory _postUri, address posterAddress, uint256 projId) public  {
        _tableland.runSQL(
            address(this),
            _metadataTableId,
            queryContract.getPostInsertStatement(_metadataTable, _postUri, posterAddress, projId)
        );
    }

    function _baseURI() internal view returns (string memory) {
        return _baseURIString;
    }

    /*
     * tokenURI is an example of how to turn a row in your table back into
     * erc721 compliant metadata JSON. here, we do a simple SELECT statement
     * with function that converts the result into json.
     */
    function postURI(uint256 projId)  public view returns (string memory) {
        // require(_PostId.current() >= contributionId, "nonexistent token");
        return  queryContract.getPostURI(projId, _metadataTable, _baseURI());
    }
    function metadataURI() public view returns (string memory) {
        
        return queryContract.metadataURI(_metadataTable, _baseURI());
}

    function updatePost(uint256 tokenId, address contributor, string memory _imageUri,string memory _profileUri, string memory _name)
        public
    {
        require(
            _postSet[contributor].contains(tokenId),
            "OnlyOwner"
        );
        _tableland.runSQL(
            address(this),
            _metadataTableId,
            queryContract.getUpdatePostStatement(_metadataTable, tokenId, _imageUri, _profileUri, _name)
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