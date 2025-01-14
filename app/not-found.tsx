import AlertIcon from "@/components/icons/alert-icon";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex w-[304px] flex-col items-center gap-3 text-center">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-1">
          <AlertIcon />
          <p className="text-[15px] font-medium text-text-body">Not Found</p>
        </div>
        <p className="text-[13px] font-medium text-text-secondary">
          We could not find the page you were looking for.
        </p>
      </div>
      <Button className="w-fit">Try Again</Button>
    </div>
  );
}
