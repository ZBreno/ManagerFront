import { Search } from "@mui/icons-material";

interface SearchProps {
  placeholder: string;
}
export default function SearchField({ placeholder }: SearchProps) {
  return (
    <div className="relative mt-10">
      <input
        className="w-full border text-base placeholder:font-poppins border-text-500 placeholder:text-text-500 focus:outline-0 rounded-xl border-opacity-50 text-text-500 pl-6 py-3 "
        type="text"
        placeholder={`Busque aqui suas ${placeholder}`}
      />
      <div className="absolute inset-y-0 left-3/4 ml-72 flex items-center">
        <Search className="text-primary-500" sx={{ width: 24, height: 24 }} />
      </div>
    </div>
  );
}
