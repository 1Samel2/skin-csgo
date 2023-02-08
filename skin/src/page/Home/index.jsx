import * as C from "./styles";
import Search from "../../components/Search";
import SignIn from "../../components/SignIn";
import Carousel from "../../components/CarouselLib";
import Grid from "../../components/CarouselPopularInCsGo"

export function Home() {
  return (
    <C.Container>
      <C.Header>
        <h1>Logo</h1>
        <Search />
        <SignIn />
      </C.Header>
      <Carousel />
      <br />
      <C.Line />
      <br />
      <Grid/>

    </C.Container>
  );
}
