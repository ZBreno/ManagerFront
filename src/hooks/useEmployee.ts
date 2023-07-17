import { EmployeeContext } from "@/providers/EmployeeContext";
import { useContext } from "react";


export const useEmployee = () => {
  return useContext(EmployeeContext);
};