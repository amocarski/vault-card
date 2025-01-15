"use client";

import AlertIcon from "@/components/icons/alert-icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <Card className="h-[435px] w-[362px] rounded-[20px] border-none shadow-none">
      <CardContent className="flex h-full flex-col items-end justify-center gap-8">
        <div className="flex w-[304px] flex-col items-center gap-3 text-center">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-1">
              <AlertIcon />
              <p className="text-[15px] font-medium text-text-body">Oops!</p>
            </div>
            <p className="text-[13px] font-medium text-text-secondary">
              Something went wrong, please try again.
            </p>
          </div>
          <Button onClick={() => reset()} className="w-fit">
            Try Again
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
