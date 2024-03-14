import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKeyString = '6SkySq3QC1f2muxHWFEYd1AxfVTHzJLKV3qJoBwpdm2f';

const isValidSolanaAddress = (address: string) => {
  try {
    const publicKey = new PublicKey(address);

    return true;
  } catch (error) {
    return false;
  }
}

if(isValidSolanaAddress(publicKeyString)) {
  const publicKey = new PublicKey(publicKeyString);

  // const connection = new Connection("https://api.devnet.solana.com", "confirmed");
  const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");
  
  const balanceInLamports = await connection.getBalance(publicKey);
  
  const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
  
  console.log(
    `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
  );
}

