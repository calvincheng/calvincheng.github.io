/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MenuBar, Projects } from "components";

function App() {
  return (
    <div
      css={css`
        position: relative;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <MenuBar />
      <div
        css={css`
          height: calc(100vh - 68px);
          width: 100vw;
          display: flex;
          justify-content: space-between;
          position: absolute;
          top: 68px;
        `}
      >
        <div />
        <Projects />
      </div>
    </div>
  );
}

export default App;
