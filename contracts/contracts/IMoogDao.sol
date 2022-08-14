// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

interface IMoogDao {
    /**
     * @dev Emit profile data (to be caught by TheGraph indexers)
     */
    event NewProfile(
        uint256 indexed tokenId,
        string name,
        string description,
        string image
    );

    /**
     * @dev Emit profile data (to be caught by TheGraph indexers)
     */
    event UpdateProfile(
        uint256 indexed tokenId,
        string name,
        string description,
        string image
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
     * @dev Revert when a user wants to transfer their token
     */
    error CanNotTransferOrBurn();

    /**
     * @dev Don't give too much love otherwise you'll get hurt easily :(
     */
    error AlreadyLike();

    /**
     * @dev Can't like yourself you narcissism :<
     */
    error CanNotSelfLike();

    /**
     * @dev Can't report yourself
     */
    error CanNotSelfReport();

    /**
     * @dev Test profile schema
     */
    // struct Tind3rProfile {
    //     string name;
    //     string description;
    //     string image;
    // }

    // /**
    //  * @dev Create profile and mint an soulbound token which contains their profile data to user
    //  */
    // function createProfile(Tind3rProfile calldata userProfile)
    //     external
    //     returns (uint256);

    // /**
    //  * @dev Update Tind3r profile with name and image
    //  */
    // function updateProfile(Tind3rProfile calldata userProfile)
    //     external
    //     returns (uint256);

    /**
     * @dev Like to increase others' elo
     */
    function Follow(address user,bool fromProj,bool fromProf) external;

    /**
     * @dev Report others to decrease others' elo
     */
    // function report(address user) external;

    /**
     * @dev Get tokenId own by certain user
     */
    function getUserId(address user,bool what) external view returns (uint256 userId);

    
    

    /**
     * @dev Check if user of Tind3r
     */

    /**
     * @dev Check if the first given address liked second given address
     */

    /**
     * @dev PrefixURI + id = tokenURI
     */
    // function prefixURI() external view returns (string memory);

    /**
     * @dev Get whole data of table
     */
    // function metadataURI() external view returns (string memory);

    /**
     * @dev If A and B are matched
     */
    function isMatched(address userA,bool proj, address userB,bool prof)
        external
        view
        returns (bool);

    /**
     * @dev Get all matches given user
     */
    function getMatches(address user) external view returns (uint32[] memory);

}
