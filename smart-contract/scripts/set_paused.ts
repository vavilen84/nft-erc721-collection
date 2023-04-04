import { utils } from 'ethers';
import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import CollectionConfig from './../config/CollectionConfig';
import NftContractProvider from '../lib/NftContractProvider';

async function main() {
    const contract = await NftContractProvider.getContract();
    // Unpause the contract (if needed)
    // if (await contract.paused()) {
    //     console.log('Unpausing the contract...');

        await (await contract.setPaused(true)).wait();
    // }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
