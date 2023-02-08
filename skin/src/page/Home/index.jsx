import * as C from "./styles";
import Search from "../../components/Search";
import SignIn from "../../components/SignIn";

export function Home() {
  return (
    <C.Container>
      <C.Header>
        <h1>Logo</h1>
        <Search />
        <SignIn />
      </C.Header>
    </C.Container>
  );
}
