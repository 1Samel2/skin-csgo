import * as C from "./styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router";

export function InfoProduct() {
  const navigate = useNavigate();

  return (
    <C.Div>
      <button onClick={() => navigate(-1)}>
        <ChevronLeftIcon />
      </button>
      <C.Container>
        <C.ContainerImg>
          <img src="https://cs.money/img/main/slider-items/cs/5.png" alt="" />
        </C.ContainerImg>
        <C.ContainerInfo>
          <div>
            <p>specialist gloves</p>
            <p>Crimson Web</p>
            <p>Extraordinary Gloves</p>
            <div>
              <p>555,00</p>
              <p>
                666.95 <span>Steam Price</span>
              </p>
            </div>
          </div>
        </C.ContainerInfo>
      </C.Container>
    </C.Div>
  );
}
