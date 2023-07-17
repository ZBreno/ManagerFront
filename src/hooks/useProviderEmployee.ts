import { useEffect, useState } from "react";


export const useProviderEmployee = () => {
  const [employee, setEmployee] = useState<null | false | Record<string, string>>();

  return {
    employee,
    setEmployee,
  };
};
