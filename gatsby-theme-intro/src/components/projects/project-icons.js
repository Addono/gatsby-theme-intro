import React from "react"
import ProjectIcon from "./project-icon"
import { ProjectType } from "../../types"

const ProjectIcons = ({ icons }) => (
  <ul className={"float-right"}>
    {Object.entries(icons)
      // Do not show the icons for which the url field was not set
      .filter(([, url]) => url !== null)
      .map(([icon, url]) => (
        <li
          className={"inline-block text-back ml-1 mt-1"}
          key={icon}
          rel="noopener noreferrer"
          target="_blank"
          aria-label={icon}
        >
          {url ? (
            <a
              href={url}
              className={"hover:text-black transition-color duration-700"}
            >
              <ProjectIcon icon={icon} />
            </a>
          ) : (
            // Do not show a link when the url is falsy, e.g. if it's the empty string
            <ProjectIcon icon={icon} />
          )}
        </li>
      ))}
  </ul>
)

ProjectIcon.propTypes = {
  icons: ProjectType.icons,
}

export default ProjectIcons
