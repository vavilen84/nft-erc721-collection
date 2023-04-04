import { utils } from 'ethers';
import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import CollectionConfig from './../config/CollectionConfig';
import NftContractProvider from '../lib/NftContractProvider';

async function main() {
    const contract = await NftContractProvider.getContract();
    var uriPrefix;
    try {
        uriPrefix = await contract.uriPrefix();
    } catch(e) {
        console.log(e);
    }
    console.log(uriPrefix);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
