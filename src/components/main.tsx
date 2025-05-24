import { PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren) => (
  <main className="container mx-auto py-10 flex-1 md:px-0 px-4" role="main">
    {children}
  </main>
);
