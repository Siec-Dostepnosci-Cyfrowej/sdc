import * as React from "react";
import { cn } from "@/lib/utils";

interface SelectProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
  className?: string;
  name?: string;
}

export const Select = ({ value, onChange, children, className, name }: SelectProps) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={cn(
        "h-10 w-full rounded-md border bg-white px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-primary",
        className
      )}
    >
      {children}
    </select>
  );
};
