import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function Button({
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "tw-inline-flex tw-items-center tw-justify-center tw-rounded tw-text-sm tw-font-medium tw-transition-colors tw-duration-150 tw-focus-visible:tw-outline-none tw-focus-visible:tw-ring-2 tw-focus-visible:tw-ring-offset-2 tw-ring-offset-white",

        variant === "default" &&
          "tw-bg-blue-600 tw-text-white hover:tw-bg-blue-700",

        variant === "outline" &&
          "tw-border tw-border-gray-300 tw-bg-white hover:tw-bg-gray-50",

        "tw-h-10 tw-px-4",
        className
      )}
      {...props}
    />
  );
}
