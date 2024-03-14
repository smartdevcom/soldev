import { Keypair } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers"

import "dotenv/config"

const keypair1 = Keypair.generate();
console.log(`The public key is: `, keypair1.publicKey.toBase58());
console.log(`The secret key is: `, keypair1.secretKey);
console.log(`✅ Finished!`);

const keypair2 = getKeypairFromEnvironment("SECRET_KEY");

console.log(keypair2.publicKey.toBase58(), keypair2.secretKey)

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);