"use client";
import CheckBorderIcon from "@/components/icons/check-border-icon";
import SpinnerIcon from "@/components/icons/spinner-icon";
import XIcon from "@/components/icons/x-icon";
import { Card, CardContent } from "@/components/ui/card";
import { DataCard } from "@/components/ui/data-card";
import { Input } from "@/components/ui/input";
import VaultListItem from "@/components/vaults/vault-list-item";
import { useVaultSearch } from "@/hooks/use-vault-search";
import React from "react";

const VaultsSearch = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { inputValue, setInputValue, loading, data, error } = useVaultSearch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const inputEndIcon = loading ? (
    <SpinnerIcon className="animate-spin text-constant-warning" />
  ) : error ? (
    <XIcon
      className="text-text-interactive-error hover:cursor-pointer"
      onClick={() => setInputValue("")}
    />
  ) : data ? (
    <CheckBorderIcon className="text-constant-valid" />
  ) : null;

  return (
    <Card className="flex h-[160px] w-[350px] items-center">
      <CardContent className="flex w-full gap-4">
        <Input
          ref={inputRef}
          value={inputValue}
          label="Vault Address or Name"
          placeholder="Search by address or name..."
          className="w-full"
          onChange={handleInputChange}
          endIcon={inputEndIcon}
          error={error}
          success={!!data?.length}
        />
        <DataCard open={!!data} targetRef={inputRef} className="w-[310px]">
          <div className="flex flex-col">
            {data?.map((vault, index) => (
              <VaultListItem
                key={index}
                name={vault?.name || vault?.address}
                image={vault?.metadata?.image}
              />
            ))}
            {error && <VaultListItem empty />}
          </div>
        </DataCard>
      </CardContent>
    </Card>
  );
};

export default VaultsSearch;
