import VaultCard from "@/components/vault/vault-card";
import { getClient } from "@/lib/apollo";
import { VAULT } from "@/queries/vault";

export default async function VaultPage({
  params,
}: {
  params: { vaultAddress: string; chainId: string };
}) {
  const client = getClient();

  try {
    const { data } = await client.query({
      query: VAULT,
      variables: {
        address: params.vaultAddress.toLowerCase(),
        chainId: Number(params.chainId),
      },
    });

    return (
      <VaultCard
        initialData={data}
        vaultAddress={params.vaultAddress}
        chainId={params.chainId}
      />
    );
  } catch (error) {
    throw error;
  }
}
