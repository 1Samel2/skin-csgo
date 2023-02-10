import * as C from "./styles";
import Search from "../../components/Search";
import GridCard from "../../components/GridCard";
import Filter from "../../components/Filter";

export function ProductAll() {
  return (
    <C.Container>
      <C.Header>
        <a href="/">Logo</a>
        <Search />
      </C.Header>

      <C.DivItemsLink>
        <li>Faca</li>
        <li>Faca</li>
        <li>Faca</li>
        <li>Faca</li>
        <li>Faca</li>
        <li>Faca</li>
        <li>Faca</li>
      </C.DivItemsLink>

     <div>

     </div>

      <C.DivAlign>
        <div>
          <Filter />
        </div>

        <div>
          <GridCard />
        </div>
      </C.DivAlign>
    </C.Container>
  );
}
