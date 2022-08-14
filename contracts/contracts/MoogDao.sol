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
import "./IMoogDao.sol";
import "./IQuery.sol";
// connections initalizes updates adds into profile table
import "./Iconnections.sol";
// Post initalizes updates adds into post table
import "./IPost.sol";
// Contributor initalizes updates adds into Contribution table
import "./IContributor.sol";


contract MoogDao is 
    Initializable,
    UUPSUpgradeable,
    OwnableUpgradeable,
    IMoogDao
    {
    using Counters for Counters.Counter;
    using EnumerableSetUpgradeable for EnumerableSetUpgradeable.UintSet;
    Counters.Counter private _profIds;
    Counters.Counter private _projectID;
    ITablelandTables private _tableland;
    Iconnections private connectionContract;
    IContributor private contributorContract;
    IQuery private queryContract;
    IPost private postContract;
    string private _metadataTable;
    uint256 private _metadataTableId;
    string private  _baseURIString;
    string private  _tablePrefix;
    string private _chainID;
    // it maps tokenIds that represent a Project or a Profile(A) to another project or Profile(B) => that means A follows B
    mapping(uint256 => EnumerableSetUpgradeable.UintSet) private _folowSet;
    // contains the projectIds each MOOG User has
    mapping(address => EnumerableSetUpgradeable.UintSet) private _projectSet;
    // Maps TokenIds=ProjectIds to a bool that respresent if that token Exists 
    // Bool at the initialization phase are always false!
    mapping(uint256 => bool) private _projectIdExistance;

    mapping(address => EnumerableSetUpgradeable.UintSet) private _contributorToProjects;


     /**
     * @dev initialization function for upgradeable contract
     */
    function initialize(IQuery initQueryContract ,IContributor initContributorContract, IPost initPostContract)
        public
        initializer
    {
        queryContract = initQueryContract;
        contributorContract = initContributorContract;
        postContract = initPostContract;
        __Ownable_init();
        __UUPSUpgradeable_init();
        _baseURIString = "https://testnet.tableland.network/query?s=";
        _tablePrefix = "MoogProjects";
        _tableland = TablelandDeployments.get();
        _chainID = Strings.toString(block.chainid);
        // Creating the Project Table by taking the crea
        _metadataTableId = _tableland.createTable(
            address(this),
            queryContract.getCreateProjectTableStatement(_tablePrefix,_chainID)
        );

        _metadataTable = string.concat(
            _tablePrefix,
            "_",
            _chainID,
            "_",
            Strings.toString(_metadataTableId)
        );
    }

    // Fuction to create a project Profile everyone can create as much projects as he wants

    function createProjectProfile(string memory title, string memory _imageUri, string memory _bannerUri, string memory _projectUri) public  {
        // to create a project someone needs to have a Profile 
        require(connectionContract.getProfID(msg.sender) > 0);
        _projectID.increment();
        uint256 projid = _projectID.current();
        _projectSet[msg.sender].add(projid);
        _tableland.runSQL(
            address(this),
            _metadataTableId,
            queryContract.getProjectInsertStatement(_metadataTable,projid,title,_imageUri,_bannerUri,_projectUri,msg.sender)
        );
        _projectIdExistance[projid] = true;
    }

    //  Update a project info only by project owner
    function updateProjectProfile(uint256 projId,string memory _imageUri,string memory _profileUri, string memory _name) external
    {
        require(
            _projectSet[msg.sender].contains(projId),
            "OnlyOwner"
        );
        _tableland.runSQL(
            address(this),
            _metadataTableId,
            queryContract.getUpdateProjectStatement(_metadataTable,projId,_imageUri,_profileUri,_name)
        );
    }

    function createUserProfile(string memory _name, string memory _imageUri,string memory _profileUri) external {
      require(connectionContract.getProfID(msg.sender) == 0,"cannotInitiate2profs");
      _profIds.increment();
      connectionContract.createProfile(
      msg.sender,
      _imageUri,
      _profileUri,
      _profIds.current(),
      _name
      );
    }

    function updateUserProfile(uint256 profileId, string memory _imageUri,string memory _profileUri, string memory _name) public {
      require(connectionContract.getProfID(msg.sender) != 0);
      connectionContract.updateProfile(profileId, _imageUri, _profileUri, _name);
    }

    // Create a contribution only users with a Profile can Contribute
    function addContribution(string memory title, string memory _imageUri,string memory _contributionUri, uint256 projId) external
    {
         uint256 profId = connectionContract.getProfID(msg.sender);
        //  check if the sender has a Profile & If that projID exists
         require(profId !=0 && _projectIdExistance[projId]==true);
         _contributorToProjects[msg.sender].add(projId);
         contributorContract.addContribution(title,_imageUri,_contributionUri,msg.sender,projId,profId);
    }
  // Update a contribution info
    function updateContribution(uint256 tokenId, string memory _imageUri,string memory _profileUri, string memory _name) external
    {
        contributorContract.updateContribution(tokenId, msg.sender, _imageUri, _profileUri, _name);

    }

    function addPost(string memory _postUri, uint256 projId)  external
    {
        // check if that proj Id exists and also allows only to project owners and project contributors to Post on that project
        require(
            _projectIdExistance[projId] == true && ( _projectSet[msg.sender].contains(projId) || _contributorToProjects[msg.sender].contains(projId))
        );
        postContract.addPost(_postUri, msg.sender ,projId);
    }

    function projectURI(uint256 projectId) public view returns (string memory) {
        require(_projectIdExistance[projectId], "nonexistent project");
        return  queryContract.getProjectURI(projectId,_metadataTable,_baseURI());
    }

    function projectTableURI() public view returns (string memory) {
        return queryContract.metadataURI(_metadataTable,_baseURI());
    }

    function profileURI(uint256 tokenId) public view returns (string memory) {
        require(tokenId <= _profIds.current());
        return  connectionContract.tokenURI(tokenId);
    }

    function profileTableURI() public view returns (string memory) {
        return connectionContract.metadataURI();
    }

    function postTableURI() public view returns (string memory) {
        return postContract.metadataURI();
    }

    function postURI(uint256 projId) public view returns (string memory) {
        return postContract.postURI(projId);
    } 

    function contributionURI(uint256 contributionId) public view returns (string memory) {
        return  contributorContract.contributionURI(contributionId);
    }

    function projectContributionsURI(uint256 projectId) public view returns (string memory) {
        require(_projectIdExistance[projectId], "nonexistent project");
        return  contributorContract.projectContributionsURI(projectId);
    }

    function contributionTableURI() public view returns (string memory) {
        return contributorContract.metadataURI();
    }

  // Follow a profile or a Project target from the msg.sender profile or Project
    function Follow(address target,bool fromWhat,bool toWhat) external {
        bool  what;
        selfFollow(msg.sender, target);
        uint256 from = getUserId(msg.sender,fromWhat);
        uint256 to = getUserId(target,toWhat);
        if (_folowSet[to].contains(from)) {
            what = false;
        } else {
            _folowSet[from].add(to);
            what = true;
        }
        if (what) {
            connectionContract.follow(
                msg.sender,
                from,
                target,
                to
            );
        }
    }

    /**
     * @dev if A profile||project and B profile||project are matched
     */
    function isMatched(address userA,bool fromWhat, address userB,bool toWhat)
    public view returns (bool)
    {
        return connectionContract.balanceOf(userA, getUserId(userB,toWhat)) > 0 &&
               connectionContract.balanceOf(userB, getUserId(userA,fromWhat)) > 0;
    }

    /**
     * @dev Get all matches given user Returns all project Ids that follow that user and
      also all (profileIds > 1000001) by default to distinguish profiles from projects that follow that user
     */
    function getMatches(address user) public view returns (uint32[] memory) {
        return connectionContract.getMatches(user);
    }

    function _baseURI() internal view  returns (string memory) {
        return _baseURIString;
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
    function setConnectionContract(Iconnections _connectionContract) external onlyOwner      
    {
        connectionContract = _connectionContract;
    }

    /**
     * @dev Get tokenId own by certain user
     */
    //  
    function getUserId(address user,bool what) public view returns (uint256) {
        if (what && _projectSet[user].length() != 0){
            return _projectSet[user].at(0);
        }
        if(!what && connectionContract.getProfID(user)!=0){
            return connectionContract.getProfID(user);
        }revert NonExistentUser();
    }
    
    function selfFollow(address sender,address target) private pure {
        require (sender != target); 
    }

    /**
     * @dev Override _authorizeUpgrade to upgrade only by owner
     */
    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

   
}