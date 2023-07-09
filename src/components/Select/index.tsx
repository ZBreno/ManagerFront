import { KeyboardArrowDown } from "@mui/icons-material";
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
  Typography,
} from "@mui/material";
import { useState } from "react";
interface Option {
  text: string;
  value: number;
}

interface SelectFieldProps extends Omit<SelectProps, "variant"> {
  options: Option[];
  label?:string;
  variant?: "primary" | "secondary" | "error";
}
export default function SelectField({ options, variant, label, ...rest }: SelectFieldProps) {
  

  return (
    <form onChange={() => alert("ativou")} className="relative">
      {label && <Typography className={`mb-2 ${variant == 'error' ? 'text-danger-600 font-medium' : 'text-text-500'} `}>{label}</Typography>}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        {...rest}
        className={`${variant} w-full `}
        IconComponent={() => (
          <KeyboardArrowDown
            className={`${
              variant == "secondary" ? " text-text-600" : "text-primary-500"
            }`}
          />
        )}
      >
        {options.map(({ text, value }) => (
          <MenuItem className={``} key={value} value={value}>
            {text}
          </MenuItem>
        ))}
      </Select>
    </form>
  );
}
