"use client";
import { Card, CardContent } from "@/components/ui/card";
import { DataCard } from "@/components/ui/data-card";
import { Input } from "@/components/ui/input";
import React, { useEffect } from "react";
import VaultListItem from "@/components/vaults/vault-list-item";
import XIcon from "@/components/icons/x-icon";
import SpinnerIcon from "@/components/icons/spinner-icon";
import CheckBorderIcon from "@/components/icons/check-border-icon";
import { useVaultSearch } from "@/hooks/use-vault-search";

const VaultsSearch = () => {
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { inputValue, setInputValue, loading, data, error } = useVaultSearch();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest("[data-dropdown]")
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleInputFocus = () => {
    if (inputValue && !loading) {
      setOpen(true);
    }
  };

  const inputEndIcon = loading ? (
    <SpinnerIcon className="animate-spin text-constant-warning" />
  ) : error ? (
    <XIcon
      className="text-text-interactive-error hover:cursor-pointer"
      onClick={() => {
        setOpen(false);
        setInputValue("");
      }}
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
          onFocus={handleInputFocus}
          endIcon={inputEndIcon}
          error={error}
          success={!!data?.length}
        />
        <DataCard open={open} targetRef={inputRef} className="w-[310px]">
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
