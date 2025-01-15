import React from "react";
import Image from "next/image";
import ArrowRightIcon from "../icons/arrow-right-icon";
import { cn } from "@/lib/utils";

type VaultListItemProps = {
  name?: string;
  image?: string;
  empty?: boolean;
};

const VaultListItem = React.memo(
  ({ name, image, empty }: VaultListItemProps) => {
    return (
      <div
        className={cn(
          "flex w-full items-center justify-between rounded-lg px-2 py-1 text-[13px] font-normal text-text-body",
          !empty && "hover:cursor-pointer hover:bg-constant-dark"
        )}
      >
        {empty || !name || !image ? (
          <p className="flex w-full justify-center">No results :(</p>
        ) : (
          <>
            <div className="flex items-center gap-1">
              <div className="flex h-5 w-5 items-center justify-center">
                <Image
                  src={image}
                  alt="Vault image"
                  height={16}
                  width={16}
                  className="rounded-full"
                />
              </div>
              <p>{name}</p>
            </div>
            <ArrowRightIcon />
          </>
        )}
      </div>
    );
  }
);

export default VaultListItem;
