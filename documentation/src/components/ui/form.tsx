import * as React from "react";

export const Form = ({ children }: { children: React.ReactNode }) => (
  <form className="space-y-4">{children}</form>
);
