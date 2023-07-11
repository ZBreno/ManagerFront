import { TextField, TextFieldProps, Typography } from "@mui/material";

interface SearchProps extends Omit<TextFieldProps, 'variant'> {
  label?: string;
  placeholder: string;
  variant?: 'primary' | 'error' | 'search';
}
export default function InputField({ label, placeholder, variant, ...rest }: SearchProps) {
  return (
    <div>
      
      <Typography className={`mb-2 ${variant == 'error' ? 'text-danger-600 font-medium' : 'text-text-500'} `}>{label}</Typography>
      
      <TextField
        className={`${variant ? variant : 'primary'} w-full  file:py-2 file:px-6 file:rounded file:border-1 file:border-gray-400`}
        placeholder={`${placeholder}`}
        {...rest}
      />
      
    </div>
  );
}
