import { Typography } from "@mui/material";
import Image from "next/image";

interface TagProps {
  icon: string;
  name: string;
}

export default function Tag({ icon, name }: TagProps) {
  return (
    <div className="flex items-center border border-text-500 rounded-lg px-2 py-1">
      <div>
        <img
          alt="icone da tag"
          src={icon}
          
        />
      </div>
      <Typography className="text-[10px] ml-2">{name}</Typography>
    </div>
  );
}
