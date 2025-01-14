import Link from "next/link";
import ArrowUpRightIcon from "./icons/arrow-up-right-icon";
import MorphoLogo from "./icons/morpho-logo";
import { Button } from "./ui/button";

const MainMenu = () => {
  return (
    <div className="flex w-full justify-between border-b-[0.5px] bg-background px-10 py-3">
      <div className="flex items-center gap-8">
        <MorphoLogo />
        <p>Morpho Test</p>
      </div>
      <Button variant="secondary" size="small" asChild>
        <Link href={process.env.GITHUB_REPO_URL!} target="_blank">
          Go to Github Repo <ArrowUpRightIcon className="text-icon-secondary" />
        </Link>
      </Button>
    </div>
  );
};

export default MainMenu;
