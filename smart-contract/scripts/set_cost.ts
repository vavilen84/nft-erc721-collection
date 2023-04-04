import { utils } from 'ethers';
import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import CollectionConfig from './../config/CollectionConfig';
import NftContractProvider from '../lib/NftContractProvider';

async function main() {
    const contract = await NftContractProvider.getContract();
    const publicSalePrice = utils.parseEther(CollectionConfig.publicSale.price.toString());
    if (!await (await contract.cost()).eq(publicSalePrice)) {
        console.log(`Updating the token price to ${CollectionConfig.publicSale.price} ${CollectionConfig.mainnet.symbol}...`);

        await (await contract.setCost(publicSalePrice)).wait();
    }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
