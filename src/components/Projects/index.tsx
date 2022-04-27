/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const projects = [
  {
    name: "jigly",
    link: "https://github.com/calvincheng/jigly",
    active: true,
  },
  {
    name: "qzlt",
    link: "https://github.com/calvincheng/qzlt",
    active: true,
  },
  {
    name: "mimicry",
    link: "https://github.com/calvincheng/mimicry",
    active: true,
  },
  {
    name: "pathfinding",
    link: "https://github.com/calvincheng/pathfinding",
    active: true,
  },
  {
    name: "pointillism",
    link: "https://github.com/calvincheng/pointillism",
    active: true,
  },
  {
    name: "boids",
    link: "https://github.com/calvincheng/boids",
    active: true,
  },
  {
    name: "work in progress",
    link: "#",
    active: false,
  },
  {
    name: "work in progress",
    link: "#",
    active: false,
  },
];

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
