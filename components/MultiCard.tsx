"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { Header } from "./ui/Header";
import { Content } from "./ui/MultiCardContent";

interface FrameProps {
  text?: string;
  icon?: any;
  color?: string;
}

export function MultiCard({ icon, text }: FrameProps) {
  return (
    <div>
      <Header title="Speak & Select" />
      <section className="flex flex-col items-center">
        <Content />
        <Link
          href=""
          className={cn(
            buttonVariants({ size: "large", outline: true, fullWidth: true })
          )}
        >
          {icon}
          <span
            className={`${
              text?.match("Wrong")
                ? "text-[#C72828]"
                : text?.match("Correct")
                ? "text-[#3bc728]"
                : "text-[#6949FF]"
            } ml-2 text-sm`}
          >
            {text}
          </span>
        </Link>
      </section>
    </div>
  );
}
