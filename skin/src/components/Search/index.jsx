import * as C from "./styles";

export default function Search() {
  return (
    <>
      <C.ContainerSearch>
        <C.SearchImage />
        <C.SearchInput placeholder="Search..." />
      </C.ContainerSearch>
    </>
  );
}
