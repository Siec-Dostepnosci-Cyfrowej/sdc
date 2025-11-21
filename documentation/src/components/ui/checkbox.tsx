import * as React from "react";

export const Checkbox = ({
  checked,
  onChange,
  label,
}: {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}) => (
  <label className="flex items-center gap-2 text-sm">
    <input type="checkbox" checked={checked} onChange={onChange} />
    {label}
  </label>
);
