"use client";

import { VAULT } from "@/queries/vault";
import { VaultDataQuery } from "@/types/vault";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { useState, useEffect } from "react";
import BorrowIcon from "../icons/borrow-icon";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Divider } from "../ui/divider";
import VaultStatistic from "./vault-statistic";
import {
  formatAddress,
  formatUSD,
  formatPercentage,
  getExplorerUrl,
} from "@/lib/utils";

type VaultCardProps = {
  initialData: VaultDataQuery;
  vaultAddress: string;
  chainId: string;
};

const VaultCard = ({ initialData, vaultAddress, chainId }: VaultCardProps) => {
  const [vaultData, setVaultData] = useState(initialData);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const { refetch, loading } = useQuery(VAULT, {
    variables: {
      address: vaultAddress.toLowerCase(),
      chainId: Number(chainId),
    },
    skip: true,
  });

  const handleRefetch = async () => {
    try {
      const { data } = await refetch();
      setVaultData(data);
    } catch (error) {
      throw error;
    }
  };

  return (
    <Card className="w-[362px] rounded-[20px] border-none shadow-none">
      <CardContent className="flex flex-col items-end gap-8">
        <div className="flex w-full flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-20 w-20 items-center justify-center p-[2px]">
              <Image
                className="rounded-full"
                src={vaultData?.vaultByAddress?.metadata?.image || ""}
                alt={vaultData?.vaultByAddress?.name || ""}
                width={66}
                height={66}
              />
            </div>
            <div className="space-y-[2px]">
              <h3 className="text-lg font-medium text-text-primary">
                {vaultData?.vaultByAddress?.name}
              </h3>
              <p className="text-[15px] text-text-secondary">
                {vaultData?.vaultByAddress?.metadata?.curators
                  ?.map((curator) => curator.name)
                  .join(", ")}
              </p>
            </div>
          </div>
          <Divider />
          <div className="space-y-3">
            <VaultStatistic
              name="Total Supply (USD)"
              value={formatUSD(
                vaultData?.vaultByAddress?.state?.totalAssetsUsd
              )}
            />
            <VaultStatistic
              name="Instant Net APY"
              value={formatPercentage(vaultData?.vaultByAddress?.state?.netApy)}
            />
            <VaultStatistic
              name="Vault Owner"
              value={formatAddress(vaultData?.vaultByAddress?.state?.owner)}
              link={getExplorerUrl(
                chainId,
                vaultData?.vaultByAddress?.state?.owner || ""
              )}
            />
          </div>
        </div>
        <Button
          size="icon"
          onClick={handleRefetch}
          disabled={loading || !isHydrated}
        >
          <BorrowIcon className="text-icon-button-primary" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default VaultCard;
