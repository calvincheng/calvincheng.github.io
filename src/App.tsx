/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MenuBar } from "components";

function App() {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
      `}
    >
      <MenuBar />
    </div>
  );
}

export default App;
