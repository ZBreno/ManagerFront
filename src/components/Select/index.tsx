import { KeyboardArrowDown } from "@mui/icons-material";
import { useState } from "react";

interface Option {
  text: string;
  value: number;
}

interface SelectFieldProps {
  options: Option[];
}
export default function SelectField({ options }: SelectFieldProps) {
  return (
    <form onChange={() => alert('ativou')} className="relative">
      <div className=" absolute top-1/2 text-text-600 -translate-y-1/2 left-56">
        <KeyboardArrowDown />
      </div>
      <select className="custom-select  pr-8 font-poppins block w-full px-4 py-2 text-xl text-text-600 leading-tight border-gray-300 bg-white rounded appearance-none focus:outline-none focus:border-blue-500">
        {options.map(({ text, value }) => (
          <option key={value} className="text-xl font-normal" value={value}>
            {text}
          </option>
        ))}
      </select>
    </form>
  );
}
