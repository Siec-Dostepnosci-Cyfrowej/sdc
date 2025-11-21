import * as React from "react";

export const Tooltip = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <span className="relative group">
    {children}
    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 whitespace-nowrap rounded bg-black px-2 py-1 text-white text-xs opacity-0 group-hover:opacity-100">
      {label}
    </span>
  </span>
);
