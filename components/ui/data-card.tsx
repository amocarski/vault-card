"use client";

import * as React from "react";
import * as Portal from "@radix-ui/react-portal";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type DataCardProps = {
  children: React.ReactNode;
  open: boolean;
  targetRef: React.RefObject<HTMLElement>;
} & React.HTMLAttributes<HTMLDivElement>;

const DataCard = ({ open, targetRef, children, className }: DataCardProps) => {
  const [position, setPosition] = React.useState({
    top: 0,
    left: 0,
    width: 0,
  });

  const observerRef = useRef<MutationObserver | null>(null);

  const updatePosition = React.useCallback(() => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 10,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [targetRef]);

  useEffect(() => {
    updatePosition();
    window.addEventListener("resize", updatePosition);

    if (targetRef.current) {
      observerRef.current = new MutationObserver(updatePosition);
      observerRef.current.observe(targetRef.current, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }

    return () => {
      window.removeEventListener("resize", updatePosition);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [updatePosition, targetRef]);

  if (!open) return null;

  return (
    <Portal.Root className={cn(className)}>
      <Card
        data-dropdown
        className="absolute z-50 h-fit max-h-[310px] w-full overflow-y-auto !rounded-corner-radius border-[0.5px] animate-in fade-in-0 zoom-in-95"
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
