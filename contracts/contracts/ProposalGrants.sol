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
import "@chainlink/contracts/src/v0.8/KeeperCompatible.sol";
import "./IQuery.sol";

contract Contributor is 
    Initializable,
    UUPSUpgradeable,
    OwnableUpgradeable,
    KeeperCompatibleInterface
    {
    using Counters for Counters.Counter;
    using EnumerableSetUpgradeable for EnumerableSetUpgradeable.UintSet;
    Counters.Counter private _proposalID;
    ITablelandTables private _tableland;
    IQuery private queryContract;
    error NonExistentUser();
    string private _metadataTable;
    uint256 private _metadataTableId;
    string private _metadataTable2;
    uint256 private _metadataTableId2;
    string private  _baseURIString;
    string private  _tablePrefix;
    string private  _tablePrefix2;
    string private _chainID;
    uint256 private s_lastTimeStamp;
    uint256 [] private s_payments;
    mapping(address => EnumerableSetUpgradeable.UintSet) private _contributionSet;
    mapping(address => uint256) private _ProfSet;
    mapping(uint256 => bool) private _activeProposal;
    mapping(uint256 => uint256) private _proposalToBeginningTime;
    mapping(uint256 => uint256) private _durationOfProposal;
    address payable[][] private payments;
    address payable[] private OwnerRewardPool;
    mapping(uint256 => bool) private _hasBeenSelected;
    mapping(uint256 => uint256) private _rewardForProposal;
    mapping(uint256 => address) private _winners;

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
        _tablePrefix = "MoogProposals";
        _tablePrefix2 = "MoogVotes";

        _tableland = TablelandDeployments.get();
        _chainID = Strings.toString(block.chainid);
        // Creating Proposal Table
        _metadataTableId = _tableland.createTable(
            address(this),
            queryContract.getCreateProposalTableStatement(_tablePrefix,_chainID)
        );

        _metadataTable = string.concat(
            _tablePrefix,
            "_",
            Strings.toString(block.chainid),
            "_",
            Strings.toString(_metadataTableId)
        );
        // Creating Vote Table
        _metadataTableId2 = _tableland.createTable(
            address(this),
            queryContract.getCreateVoteTableStatement(_tablePrefix2,_chainID)
        );

        _metadataTable2 = string.concat(
            _tablePrefix,
            "_",
            Strings.toString(block.chainid),
            "_",
            Strings.toString(_metadataTableId)
        );
    }
    function rewardSelector(uint256 proposalId, address winner) public payable{
//        require( msg.value >= _rewardForProposal[proposalId]);
//        bool paid;
//        for(uint256 i = 0; i<payments.length; i++){
//            if(payments[proposalId][i] == winner){
//                payments[proposalId][i].send(_rewardForProposal[proposalId]);
//                paid = true;
//                break;
//            }
//        }
//        _hasPaid[proposalId] = paid;
        _winners[proposalId] = winner;
    }

    function makePayment(uint256 proposalId, address winner) public payable{
        for(uint256 i = 0; i<payments.length; i++){
            if(payments[proposalId][i] == winner){
                OwnerRewardPool[proposalId].transfer(_rewardForProposal[proposalId])
                paid = true;
                break;
            }
        }
    }
    function addProposalGrant(string memory _proposalUri, address proposalAddress, uint256 projId, uint256 proposalId, uint256 duration, uint256 reward) public payable {
        uint256 id = _proposalID.current();
        _rewardForProposal[id] = reward;
        OwnerRewardPool.push(msg.sender);
        OwnerRewardPool[id].send(reward);
//        _contributionSet[proposalAddress].add(id);
        // _ProfSet[proposalAddress] = profId;
// string memory metadataTable, string memory voteUri, address votingAddress, uint256 proposalId
        _tableland.runSQL(
            address(this),
            _metadataTableId,
            queryContract.getProposalInsertStatement(_metadataTable, _proposalUri, proposalAddress, projId, proposalId)
        );
        _proposalToBeginningTime[id] = block.timestamp;
        _durationOfProposal[id] = duration;
//        s_payments.push(reward);
        _proposalID.increment();
    }

    function proposeImplementation(string memory _ImplementationUri, address votingAddress,  uint256 proposalId) public  {
        // _ProfSet[proposalAddress] = profId;

        payments[proposalId].push(votingAddress);
        _tableland.runSQL(
            address(this),
            _metadataTableId,
            queryContract.getProposeImplementationInsertStatement(_metadataTable2, _ImplementationUri, votingAddress,  proposalId)
        );
    }

    function _baseURI() internal view returns (string memory) {
        return _baseURIString;
    }

    /*
     * Will return all the votes for that proposalID by joining the tables a vote can have a description that maybe be 
     encrypted and only certain people will have access to decrypt using orbis 
     */
    function proposalURI(uint256 proposalID)  public view returns (string memory) {
        require(_proposalID.current() >= proposalID, "nonexistent token");
        return  queryContract.getContributionURI(proposalID, _metadataTable, _baseURI());
    }

    function projectProposalVotesURI(uint256 proposalId)  public view returns (string memory) {
        return  queryContract.getProjectContributionsURI(proposalId, _metadataTable2, _baseURI());
    }
    
    function proposalsMetadataURI() public view returns (string memory) {
            return queryContract.metadataURI(_metadataTable, _baseURI());
    }

    function votesMetadataURI() public view returns (string memory) {
            return queryContract.metadataURI(_metadataTable2, _baseURI());
    }

    function checkUpkeep(
        uint256 id,
        bytes memory /* checkData */
    )
    public
    override
    returns (
        bool upkeepNeeded,
        bytes memory /* performData */
    )
    {
        bool hasTimePased = ((block.timestamp - _proposalToBeginningTime[id]) > _durationOfProposal[id]);
        bool hasPaid = _hasBeenSelected[id];
        upkeepNeeded = isOpen && hasBalance && hasIntervalPassed && hasPlayers;
    }

    // function updateProposal(uint256 tokenId, address contributor, string memory _imageUri,string memory _profileUri, string memory _name)
    //     public
    // {
    //     require(
    //         _contributionSet[contributor].contains(tokenId),
    //         "OnlyOwner"
    //     );
    //     _tableland.runSQL(
    //         address(this),
    //         _metadataTableId,
    //         queryContract.getUpdateContributionStatement(_metadataTable, tokenId, _imageUri, _profileUri, _name)
    //     );
        
    // }


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