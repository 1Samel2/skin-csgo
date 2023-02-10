import * as C from "./styles";
import Carousel from "../../components/CarouselLib";
import Grid from "../../components/CarouselPopularInCsGo"

export function Home() {
  return (
    <C.Container>
      <C.Header>
        <h1>Logo</h1>
      </C.Header>
      <Carousel />
      <br />
      <br />
      <C.Line />
      <br />
      <Grid/>

    </C.Container>
  );
}
