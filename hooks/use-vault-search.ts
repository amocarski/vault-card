import { useState, useEffect, useCallback } from "react";
import { ApolloError, useQuery } from "@apollo/client";
import { VAULTS } from "@/queries/vaults";
import { isAddress } from "viem";

type UseVaultSearchResult = {
  inputValue: string;
  setInputValue: (value: string) => void;
  loading: boolean;
  data: any;
  error: string | boolean | undefined | ApolloError;
};

enum ErrorMessages {
  INVALID_ADDRESS = "This is not a valid address.",
  NO_VAULT = "No vault found for this name",
}

const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

const useVaultSearch = (debounceMs = 300, first = 10): UseVaultSearchResult => {
  const [inputValue, setInputValue] = useState("");
  const [localLoading, setLocalLoading] = useState(false);
  const debouncedValue = useDebounce(inputValue, debounceMs);
  const [error, setError] = useState<string | boolean | undefined>(undefined);

  useEffect(() => {
    if (inputValue) {
      setLocalLoading(true);
    }
  }, [inputValue]);

  const isAddressInput = debouncedValue?.toLowerCase().startsWith("0x");
  const isValidAddress = debouncedValue ? isAddress(debouncedValue) : true;
  const hasAddressError = isAddressInput && !isValidAddress;

  const queryVariables = {
    first,
    where: debouncedValue
      ? isAddress(debouncedValue)
        ? { whitelisted: true, address_in: [debouncedValue] }
        : { whitelisted: true, search: debouncedValue }
      : {},
  };

  const {
    loading: queryLoading,
    data,
    error: queryError,
  } = useQuery(VAULTS, {
    variables: queryVariables,
    skip: !debouncedValue || hasAddressError,
  });

  useEffect(() => {
    if (hasAddressError) {
      setError(ErrorMessages.INVALID_ADDRESS);
      setLocalLoading(false);
    } else if (queryError) {
      setError(queryError.message);
      setLocalLoading(false);
    } else if (
      data?.vaults?.items.length === 0 &&
      !queryLoading &&
      debouncedValue
    ) {
      setError(ErrorMessages.NO_VAULT);
      setLocalLoading(false);
    } else if (data || !debouncedValue) {
      setError(undefined);
      setLocalLoading(false);
    }
  }, [
    debouncedValue,
    hasAddressError,
    queryError,
    data?.vaults?.items.length,
    queryLoading,
    data,
  ]);

  return {
    inputValue,
    setInputValue,
    loading: localLoading || queryLoading,
    data,
    error,
  };
};

export { useVaultSearch };
