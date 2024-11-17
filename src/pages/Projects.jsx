import { projects } from "../constants/index.js";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons/index.js";
import CTA from "../components/CTA.jsx";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          <i>
            "Franchir la porte c’est tout un monde mais, en fait, il suffit de
            faire un pas."
          </i>
        </p>
      </div>

      <div className="flex flex-col my-20 gap-16">
        {projects.map((project) => (
          <div
            className="flex flex-col lg:flex-row gap-10 items-start"
            key={project.name}
          >
            {/* Project Image */}
            <div className="flex-shrink-0 w-full lg:w-[40%] overflow-hidden shadow-lg">
              <img
                src={project.previewImageUrl}
                alt={`${project.name} Preview`}
                className="w-full h-72 object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="flex-1">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>

              <p className="mt-2 text-slate-500">
                {project.description.map((text, index) => (
                  <p key={`project-point-${index}`}>
                    {text}
                    <br />
                    <br />
                  </p>
                ))}
              </p>

              {/* Project Link */}
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
