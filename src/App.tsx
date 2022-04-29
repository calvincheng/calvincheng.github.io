/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MenuBar } from "components";

function App() {
  return (
    <div
      css={css`
        position: relative;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
      `}
    >
      <MenuBar />
      <div
        css={css`
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          text-align: center;
          padding: 48px;
          transform: translate(-50%, -40%);
        `}
      >
        <div
          css={css`
            font-size: 76px;
            margin-bottom: 80px;
            line-height: 1.2;
            @media (max-width: 700px) {
              font-size: 56px;
              margin-bottom: 60px;
            }
          `}
        >
          Work in progress
        </div>
        <div
          css={css`
            font-size: 18px;
            line-height: 1.8;
          `}
        >
          Need to reach me?
          <br />
          Find me on{" "}
          <a target="_blank" href="https://github.com/calvincheng">
            Github
          </a>
          ,{" "}
          <a target="_blank" href="https://linkedin.com/in/cheng-calvin/">
            LinkedIn
          </a>
          , or <a href="mailto:calvin.cc.cheng@gmail.com">send me an email</a>.
        </div>
      </div>
    </div>
  );
}

export default App;
