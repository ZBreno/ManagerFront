import { ExpandMore } from "@mui/icons-material";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@mui/material";
import { useState } from "react";
import ButtonForm from "../Button";

interface AccordionsProps {
  name: string;
  action: string;
  head: string;
  location: string;
  contact: string;
  index: number;
}
export default function Accordions({
  name,
  action,
  head,
  location,
  contact,
  index,
}: AccordionsProps) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className="mb-8">
      <Accordion
        onChange={handleChange(`panel${index}`)}
        className={` ${
          expanded == `panel${index}`
            ? "bg-white-500 border-2 border-primary-500 border-opacity-20 rounded-lg 0"
            : "bg-primary-500 "
        } bg-opacity-20 blur-0 shadow-none `}
        style={{ borderRadius: 16, padding: 0 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore color="primary" />}
          aria-controls={`panel1a-content${index}`}
          id={`panel1a-header${index}`}
        >
          <Typography className="text-primary-500 text-xl p-2 font-bold">
            {name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="pl-6 pt-0 mt-0">
          <Grid container>
            <Grid item xs={6}>
              <div className="flex flex-col gap-4">
                <div>
                  <Typography className="font-bold">Nome</Typography>
                  <Typography>{name}</Typography>
                </div>
                <div>
                  <Typography className="font-bold">Função do setor</Typography>
                  <Typography>{action}</Typography>
                </div>
                <div>
                  <Typography className="font-bold">Localização</Typography>
                  <Typography>{location}</Typography>
                </div>
                <div className="flex gap-4 mt-10">
                    <ButtonForm text="Excluir" style={{ textTransform: "none" }} className="text-danger-600 font-semibold hover:bg-danger-100 bg-danger-100 rounded-lg px-6 py-1"/>
                    <ButtonForm text="Editar " style={{ textTransform: "none" }} className="text-warning-600 font-semibold hover:bg-warning-100 bg-warning-100 rounded-lg px-6 py-1"/>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="flex flex-col gap-4">
                <div>
                  <Typography className="font-bold">Responsável</Typography>
                  <Typography>{head}</Typography>
                </div>
                <div>
                  <Typography className="font-bold">Contato</Typography>
                  <Typography>{contact}</Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
