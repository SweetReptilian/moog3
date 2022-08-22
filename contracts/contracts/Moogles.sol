// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./Iconnections.sol";


contract Moogles is ERC721, ERC721URIStorage, Ownable {
    Iconnections private _connectionContract;
    using Counters for Counters.Counter;
    Counters.Counter private tokenIds;


    string private tokensUri;
    constructor() ERC721("Moogles", "MDAO") {
        tokenIds.increment();
    }

    function _baseURI() internal pure override returns (string memory) {
        return "";
    }

    function setUri(string memory uri) public onlyOwner{
        tokensUri = uri;
    }

    function getUri() private view returns(string memory uri){
        return tokensUri;
    }

    function safeMint()
        public
        
    {
        // only MoogDao users can mint one NFTs
        require(_connectionContract.getProfID(msg.sender) > 0 && balanceOf(msg.sender) == 0);
        uint256 tokenId = tokenIds.current();
        string memory uri = getUri();
        uri = string.concat(
            uri,
            "/",
            Strings.toString(tokenId),
            ".json");
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
        tokenIds.increment();
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function setConnectionContract(Iconnections connectionContract) external onlyOwner      
    {
        _connectionContract = connectionContract;
    }
}