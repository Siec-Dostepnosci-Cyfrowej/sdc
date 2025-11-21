import * as React from "react";
import { cn } from "@/lib/utils";

export function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "tw-block tw-text-sm tw-font-semibold tw-mb-1 tw-text-gray-800",
        className
      )}
      {...props}
    />
  );
}
