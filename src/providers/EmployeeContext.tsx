import { useProviderEmployee } from "@/hooks/useProviderEmployee";
import React, { createContext } from "react";

type EmployeeContextType = ReturnType<typeof useProviderEmployee>;

export const EmployeeContext = createContext<EmployeeContextType>(
  {} as EmployeeContextType
);

interface EmployeeProviderProps {
  children: React.ReactNode;
}

export const EmployeeProvider = ({ children }: EmployeeProviderProps) => {
  return (
    <EmployeeContext.Provider value={useProviderEmployee()}>
      {children}
    </EmployeeContext.Provider>
  );
};
