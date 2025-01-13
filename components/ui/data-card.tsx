"use client";

import * as React from "react";
import * as Portal from "@radix-ui/react-portal";

import { Card, CardContent } from "@/components/ui/card";

type DataCardProps = {
  children: React.ReactNode;
  open: boolean;
  targetRef: React.RefObject<HTMLElement>;
};

const DataCard = ({ open, targetRef, children }: DataCardProps) => {
  const [position, setPosition] = React.useState({ top: 0, left: 0, width: 0 });

  const updatePosition = React.useCallback(() => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 4, // 4px gap
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [targetRef]);

  React.useEffect(() => {
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [updatePosition]);

  if (!open) return null;

  return (
    <Portal.Root>
      <Card
        data-dropdown
        className="absolute z-50 h-fit max-h-[310px] overflow-y-auto !rounded-corner-radius border-[0.5px] animate-in fade-in-0 zoom-in-95"
        style={{
          top: position.top,
          left: position.left,
          width: position.width,
        }}
      >
        <CardContent className="p-3">{children}</CardContent>
      </Card>
    </Portal.Root>
  );
};

export { DataCard };
