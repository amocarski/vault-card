import Link from "next/link";
import ArrowUpRightIcon from "../icons/arrow-up-right-icon";

type VaultStatisticProps = {
  name: string;
  value: string;
  link?: string;
};

const VaultStatistic = ({ name, value, link }: VaultStatisticProps) => {
  return (
    <div className="space-y-1">
      <p className="text-lg text-text-primary">{name}</p>
      {link ? (
        <Link
          href={link}
          className="flex items-center gap-[2px] text-[15px] text-text-body transition-colors hover:text-text-primary"
        >
          {value}
          <ArrowUpRightIcon className="text-icon-secondary" />
        </Link>
      ) : (
        <p className="text-[15px] text-text-body">{value}</p>
      )}
    </div>
  );
};

export default VaultStatistic;
