import { PropsWithChildren } from "react";

export const Heading = ({ children }: PropsWithChildren) => (
  <h1 className="text-3xl font-bold mb-6 text-center text-zbr">{children}</h1>
);
