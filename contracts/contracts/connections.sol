// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;
import "@openzeppelin/contracts-upgradeable/token/ERC1155/extensions/ERC1155SupplyUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/structs/EnumerableSetUpgradeable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@tableland/evm/contracts/ITablelandTables.sol";
import "@tableland/evm/contracts/utils/TablelandDeployments.sol";
import "./Iconnections.sol";
import "./IMoogDao.sol";
import "./IQuery.sol";


contract connections is
    Initializable,
    UUPSUpgradeable,
    ERC1155SupplyUpgradeable,
    OwnableUpgradeable,
    Iconnections
{
    using Counters for Counters.Counter;
    using EnumerableSetUpgradeable for EnumerableSetUpgradeable.UintSet;

    IMoogDao private _profileMoogs;
    IQuery private _queryContract;

    Counters.Counter private _profileIds;
    ITablelandTables private _tableland;
    
    mapping(address => EnumerableSetUpgradeable.UintSet) _userMatches;    
    mapping(address => uint256) _profileOwners;
    
    string private _chainID;
    string private _baseURIString;
    string private _metadataTable;
    string private _tablePrefix;
    
    uint256 private _metadataTableId;
    /**
     * @dev initialization function for upgradeable contract
     */
    function initialize(IMoogDao initMoogDaoContract , IQuery initqueryContract)
        public
        initializer
    {
        _tablePrefix = "MoogUsers";
        __ERC1155Supply_init();
        __Ownable_init();
        __UUPSUpgradeable_init();
        _profileMoogs = initMoogDaoContract;
        _queryContract = initqueryContract;
        _chainID = Strings.toString(block.chainid);
        _tableland = TablelandDeployments.get();
        _metadataTableId = _tableland.createTable(
            address(this),
            _queryContract.getCreateProfileTableStatement(_tablePrefix, _chainID)
        );

        _metadataTable = string.concat(
            _tablePrefix,
            "_",
            Strings.toString(block.chainid),
            "_",
            Strings.toString(_metadataTableId)
        );
        _baseURIString = "https://testnet.tableland.network/query?s=";
        
    }

    /**
     * @dev Mint A's token to B and B's to A
     */
    function follow(
        address aUser,
        uint256 aUserId,
        address bUser,
        uint256 bUserId
    ) external  {
        onlyMoogs();
        _mint(aUser, bUserId, 1, "");
        _mint(bUser, aUserId, 1, "");
        _userMatches[aUser].add(bUserId);
        _userMatches[bUser].add(aUserId);
        emit Match(aUserId, bUserId);
    }

    function getProfID(address owner) public view returns(uint256)
    {
        return _profileOwners[owner];
    }

    function createProfile(address owner, string memory _imageUri,string memory _profileUri, uint256 tokenId, string memory name) public {
            _profileOwners[owner] = tokenId+1000000;
            _tableland.runSQL(
            address(this),
            _metadataTableId,
            // Getting the insert Profile statement from the Query Contract
            _queryContract.getProfileInsertStatement(_metadataTable,_imageUri,_profileUri,owner,tokenId,name)
        );
    }

    function updateProfile(uint256 profileId, string memory _imageUri,string memory _profileUri, string memory _name) public {
        _tableland.runSQL(
            address(this),
            _metadataTableId,
            _queryContract.getUpdateProfileStatement(_metadataTable,profileId, _imageUri, _profileUri, _name)
        );
    }

    function _baseURI() internal view  returns (string memory) {
        return _baseURIString;
    }

    function tokenURI(uint256 tokenId)  
    public view returns (string memory) 
    {
        return  _queryContract.getProfileURI(tokenId, _metadataTable,  _baseURI());
    }

    function metadataURI() public view returns (string memory) {
        return _queryContract.metadataURI(_metadataTable,_baseURI());
}

    /**
     * @dev Show membership contract
     */
    function membershipContract() public view returns (address) {
        return address(_profileMoogs);
    }

    /**
     * @dev Only Moog contract can call
     */
    function onlyMoogs() public view {
        require(msg.sender == address(_profileMoogs),"anothorized");
    }

   

    /**
     * @dev Get user all matches
     */
    function getMatches(address user)
        public
        view
        returns (uint32[] memory matchedIds)
    {
        uint256 size = _userMatches[user].length();
        matchedIds = new uint32[](size);
        for (uint256 i = 0; i < size; ++i) {
            matchedIds[i] = uint32(_userMatches[user].at(i));
        }
    }

    /**
     * @dev Override _authorizeUpgrade to upgrade only by owner
     */
    function _authorizeUpgrade(address newImplementation)
        internal
        override
        onlyOwner
    {}
}
