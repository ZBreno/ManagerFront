import { Search } from "@mui/icons-material";
import { Input, TextField, Typography } from "@mui/material";

interface SearchProps {
  label?: string;
  placeholder: string;
}
export default function SearchField({ label, placeholder }: SearchProps) {
  return (
    <div className="mt-10">
      
      <Typography>{label}</Typography>
      
      <TextField
        className="search w-full"
        placeholder={`Busque aqui suas ${placeholder}`}
        InputProps={{
          endAdornment: (
            <Search
              className="text-primary-500 "
              sx={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      
    </div>
  );
}
