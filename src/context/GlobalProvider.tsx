"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, ReactNode, useContext } from "react";

const Context = createContext<null>(null);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Context.Provider value={null}>{children}</Context.Provider>
    </QueryClientProvider>
  );
};

export const GlobalConsumer = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};
