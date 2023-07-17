"use client";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/Button";
import { Content } from "./ui/SingleCardContent";
import { Header } from "./ui/Header";
import Link from "next/link";

interface FrameProps {
  text?: string;
  icon?: any;
  color?: string;
}

export function SingleCard({ icon, text }: FrameProps) {
  return (
    <div>
      <Header title="Listen & Repeat" />
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
