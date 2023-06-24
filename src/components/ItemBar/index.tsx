import { Link, LinkProps, Typography } from "@mui/material";

interface ItemBarProps extends LinkProps {
  text: string;
  icon: React.ReactNode;
  isSelected?: boolean;
  route?: string;
}
export default function ItemBar({
  text,
  icon,
  isSelected,
  route,
  ...rest
}: ItemBarProps) {
  return (
    <Link
      {...rest}
      href={route}
      className={`flex items-center hover:bg-bg-menu rounded-sm cursor-pointer ${
        isSelected && "bg-bg-menu rounded-sm"
      } p-2 no-underline`}
    >
      <div className={`${isSelected ? "text-primary-500" : "text-text-500"} `}>{icon}</div>

      <Typography
        className={`ml-10 text-base  ${
          isSelected ? "text-primary-500" : "text-text-500"
        }`}
      >
        {text}
      </Typography>
    </Link>
  );
}
