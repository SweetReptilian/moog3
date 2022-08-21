// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

interface IMoogDao {
    /**
     * @dev Emit profile data (to be caught by TheGraph indexers)
     */
    event NewFollow(
        address from,
        uint256 From,
        address to,
        uint256 To
    );
    event newContributionLike(
        address from,
        uint256 From,
        uint256 contributionID
    );



    /**
     * @dev Revert when an address which has created a profile wants to create another profile
     */
    error ExistentUser(uint64);

    /**
     * @dev Revert when an address which hasn't created a profile wants to update profile
     */
    error NonExistentUser();

    /**
     * @dev Can't like yourself you narcissism :<
     */
    error CanNotSelfLike();

    /**
     * @dev Follow a profile or a project
     */
    function Follow(address user,bool fromProj,bool fromProf) external;

    /**
     * @dev Get tokenId own by certain user
     */
    function getUserId(address user,bool what) external view returns (uint256 userId);

    /**
     * @dev If A and B are matched
     */
    function isConnectedWith(address userA,bool proj, address userB,bool prof)
        external
        view
        returns (bool);

    function getContributionLikes(uint256 contributionID)  external view returns (uint32[] memory matchedIds);

    function likeContribution(uint256 contributionID , bool fromWhat) external;
    /**
     * @dev Get all matches given user
     */
    function getFollowers(address user) external view returns (uint32[] memory);

}
