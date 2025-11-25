import { cn } from "@/lib/utils";

export const Badge = ({ children, className = "" }) => (
  <span className={cn("inline-block rounded px-2 py-1 text-xs bg-gray-100", className)}>
    {children}
  </span>
);
