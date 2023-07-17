"use client";

import * as React from "react";

import { Progress } from "@/components/ui/Progress";
import { Icons } from "../Icons";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(40), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Progress value={progress} className="w-[100%] mb-5" />

      <div className="flex flex-col  gap-[16px]">
        <h3 className="text-[#4C4C4C] text-base font-bold">{title}</h3>

        <p className="flex items-center gap-[12px]">
          <span className="bg-[#F0EDFF] rounded-full p-2">
            <Icons.speaker />
          </span>
          قطة
        </p>
      </div>
    </div>
  );
}
