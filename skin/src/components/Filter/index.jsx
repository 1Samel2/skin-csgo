import * as C from "./styles";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

export default function Filter() {
  const [filter, setFilter] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <C.DivAlign>
        <C.ButtonFilter onClick={() => setFilter(!filter)}>
          {filter ? "Fechar filtro" : "Filtro"}
        </C.ButtonFilter>
      </C.DivAlign>

      <C.Container isOpenFilter={filter}>
        <C.AccordionContainer>
          <C.AccordionHeader onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
            KNIVES
            <ExpandLessIcon />
          </C.AccordionHeader>
          <C.AccordionPanel style={{ maxHeight: isOpen ? "100%" : 0 }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Faca da barbie"
                style={{ color: "#51627C", fontWeight: "800" }}
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Faca da barbie"
                style={{ color: "#51627C", fontWeight: "800" }}
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Faca da barbie"
                style={{ color: "#51627C", fontWeight: "800" }}
              />
            </FormGroup>
          </C.AccordionPanel>
        </C.AccordionContainer>
        <C.Line />
      

      </C.Container>
    </>
  );
}
