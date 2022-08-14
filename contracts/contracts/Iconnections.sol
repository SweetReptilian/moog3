// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@openzeppelin/contracts-upgradeable/interfaces/IERC1155Upgradeable.sol";

interface Iconnections is IERC1155Upgradeable {
    /**
     * @dev Emit Match if both users like each other
     */
    event Match(uint256 aUserId, uint256 bUserId);

    /**
     * @dev Emit Block when one address dislike another address
     */
    event Block(uint256 aUserId, uint256 bUserId);

    /**
     * @dev Revert when user isn't Tind3r user
     */
    error NotCallByMembershipContract();

    error NonExistentUser();
    /**
     * @dev Caller is not token owner nor approved
     */
    error CallerIsOwnerNorApproved();

    /**
     * @dev Mint A's token to B and B's to A if match
     */
    function follow(
        address aUser,
        uint256 aUserId,
        address bUser,
        uint256 bUserId
    ) external;

    function createProfile(
        address owner,
        string memory img,
        string memory prof,
        uint256 id,
        string memory name
    ) external;

    function tokenURI(uint256 tokenId)  external view returns (string memory);

    function metadataURI() external view returns (string memory);

    function updateProfile(uint256 profileId, string memory _imageUri,string memory _profileUri, string memory _name) external;


    function getProfID(address) external view returns(uint256);

    /**
     * @dev Get user all matches
     */
    function getMatches(address user)
        external
        view
        returns (uint32[] memory matchedIds);

    /**
     * @dev Burn token
     */
    // function burn(
    //     address account,
    //     uint256 id,
    //     uint256 value
    // ) external;
}