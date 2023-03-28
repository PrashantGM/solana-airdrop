import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from '@solana/web3.js';
import { Router, Request, Response } from 'express';

const router = Router();

router.route('/airdrop').post(async (req: Request, res: Response) => {
  try {
    const { solAddress, sol } = req.body;
    const numericSol = Number(sol);
    const publicKey = new PublicKey(solAddress);
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

    const airdropSignature = await connection.requestAirdrop(
      publicKey,
      LAMPORTS_PER_SOL * numericSol
    );

    const latestBlockHash = await connection.getLatestBlockhash();

    const transactionCompleted = await connection.confirmTransaction({
      blockhash: latestBlockHash.blockhash,
      lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
      signature: airdropSignature,
    });

    res.status(200).json({
      success: true,
      msg: `${sol} sol successfully air dropped to wallet ${publicKey}`,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, msg: 'Something went wrong! Please try again.' });
  }
});

export { router };
