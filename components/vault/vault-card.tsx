import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import BorrowIcon from "../icons/borrow-icon";
import { Button } from "../ui/button";
import { Divider } from "../ui/divider";
import VaultStatistic from "./vault-statistic";

const VaultCard = () => {
  return (
    <Card className="w-[362px] rounded-[20px] shadow-none">
      <CardContent className="flex flex-col items-end gap-8">
        <div className="flex w-full flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="p-[2px]">
              <Image
                className="rounded-full"
                src="/images/vaults/steakhouse.png"
                alt="Steakhouse USDC"
                width={66}
                height={66}
              />
            </div>
            <div className="space-y-[2px]">
              <h3 className="text-lg font-medium text-text-primary">
                Steakhouse USDC
              </h3>
              <p className="text-[15px] text-text-secondary">
                Steakhouse Financial
              </p>
            </div>
          </div>
          <Divider />
          <div className="space-y-3">
            <VaultStatistic name="Total Supply (USD)" value="$52.25M" />
            <VaultStatistic name="Instant Net APY" value="$52.25M" />
            <VaultStatistic
              name="Vault Owner"
              value="$52.25M"
              link="http://google.com"
            />
          </div>
        </div>
        <Button size="icon">
          <BorrowIcon className="text-icon-button-primary" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default VaultCard;
