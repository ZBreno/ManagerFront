"use cliente";
import { Typography } from "@mui/material";
import { Circle, Add } from "@mui/icons-material";
import SelectField from "../Select";
import ButtonForm from "../Button";
import Search from "../Search/inde";
interface Option {
  text: string;
  value: number;
}

interface HeaderProps {
  options?: Option[];
  title: string;
  subtitle: string;
}
export default function Header({ options, title, subtitle }: HeaderProps) {
  return (
    <div>
      <div className="flex justify-between  items-center">
        <div className="flex flex-col">
          <Typography className="text-primary-500 text-3xl font-bold">
            {title}
          </Typography>
          <div className="flex items-center">
            <Typography className="mr-3 text-text-600 text-xl">
              {subtitle}
            </Typography>
            <Circle className="text-text-600" sx={{ width: 8, height: 8 }} />
            {options ? (
              <div>
                <SelectField options={options} />
              </div>
            ) : (
              <Typography className="ml-3 text-text-600 text-xl">
                Visão geral
              </Typography>
            )}
          </div>
        </div>
        {title !== "Dashboard" && (
          <div>
            <ButtonForm
              text={`Criar ${subtitle.toLowerCase()}`}
              onClick={() => alert("em breve")}
              startIcon={<Add />}
              style={{ textTransform: "none" }}
              className="bg-primary-500 text-white hover:bg-primary-500 px-6 py-2 rounded-sm text-xl"
            />
          </div>
        )}
      </div>
      {subtitle != "Dashboard" && (
        <form>
          <Search placeholder={title.toLowerCase()} />
        </form>
      )}
    </div>
  );
}
