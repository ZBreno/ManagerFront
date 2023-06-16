
import { Link, LinkProps, Typography } from "@mui/material";

interface ItemBarProps extends LinkProps{
  text: string;
  icon: React.ReactNode;
  active?: boolean;
}
export default function ItemBar({ text, icon, active, ...rest }: ItemBarProps) {
  return (
    <Link {...rest} href="#" className={`flex items-center ${active && 'bg-bg-menu rounded-sm'} p-2 no-underline`}>
      {icon}
      <Typography className={`ml-10 text-2xl ${active ? 'text-primary-500': 'text-text-500'}` }>{text}</Typography>
    </Link>
  );
}
