import { Ethereum, Network, TatumSDK } from "@tatumio/tatum";
import { config } from "../config/config";

const tatum = await TatumSDK.init<Ethereum>({
  network: Network.ETHEREUM,
  apiKey: { v4: config.TATUM_API_KEY },
});

export async function getBalance(walletId: string): Promise<string> {
  const balance = await tatum.address.getBalance({
    addresses: [walletId],
    page: 1,
    pageSize: 1,
  });

  const balanceData = balance.data.find((asset) => asset.asset === "ETH");

  return balanceData.balance;
}
