import { gql } from "@apollo/client";

export const VAULTS = gql`
  query VaultSearchByFullAddress($first: Int, $where: VaultFilters) {
    vaults(first: $first, where: $where) {
      items {
        address
        chain {
          id
        }
        metadata {
          image
        }
        name
      }
    }
  }
`;
