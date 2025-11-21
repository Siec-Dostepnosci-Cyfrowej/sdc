import * as React from "react";

export const Fieldset = ({
  legend,
  children,
}: {
  legend: string;
  children: React.ReactNode;
}) => (
  <fieldset className="border rounded-md p-4">
    <legend className="text-sm font-semibold px-2">{legend}</legend>
    {children}
  </fieldset>
);
