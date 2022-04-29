/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const HomeLink = () => {
  return <a href="">Calvin Cheng</a>;
};

const MenuBar = () => {
  return (
    <nav
      css={css`
        position: absolute;
        top: 0;
        width: 100vw;
        height: 68px;

        display: flex;
        align-items: center;
        padding: 0px 32px;

        border-bottom: 1px solid black;
        font-size: 18px;

        a {
          text-decoration: none;
        }
      `}
    >
      <HomeLink />
    </nav>
  );
};

export default MenuBar;
