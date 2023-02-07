import * as C from "./styles";

export function Search() {
  return (
    <>
      <C.ContainerSearch>
        <C.SearchImage />
        <C.SearchInput placeholder="Search..." />
      </C.ContainerSearch>
    </>
  );
}
