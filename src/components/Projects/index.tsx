/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import projects from "projects";

const Project = ({ project }: any) => {
  return (
    <div
      css={css`
        flex-grow: 1;
        width: 100%;
        border-left: 1px solid black;
        border-bottom: 1px solid black;
      `}
    >
      <a target={project.active ? "_blank" : ""} href={project.link}>
        <div
          css={css`
            position: relative;
            padding: 32px;
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
          `}
        >
          <span
            css={css`
              color: ${!project.active ? "#AAAAAA" : "black"};
              font-style: ${!project.active ? "italic" : "none"};
            `}
          >
            {project.name}
          </span>
        </div>
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <div
      css={css`
        display: flex;
        height: 100%;
        flex-direction: column;
        width: 240px;
      `}
    >
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
};

export default Projects;
