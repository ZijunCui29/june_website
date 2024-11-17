import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { photos, skills, experiences } from "../constants";
import CTA from "../components/CTA.jsx";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          June
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Hi, I'm June, originally from China. In 2023, I graduated from the
          Digital Humanities Master's program at EPFL. Studying at EPFL was an
          incredible journey that broadened my horizons and deepened my
          understanding of technologeis.
          <br />
          <br />
          I've worked at several companies and picked up many skills along the
          way. My passion lies in applying IT technologies, and I'm also keen to
          understand people, as I believe it’s one of the most important aspects
          of life.
          <br />
          <br />I read a lot during my student years, especially enjoying
          Sherlock Holmes stories and Agatha Christie’s novels. Interstellar is
          my favorite movie! Recently I’ve been passionate about learning French
          and exploring 3D modeling.
        </p>
      </div>

      <div className="mt-6 mb-10 flex flex-col">
        <div className="mt-5 flex justify-center gap-2 sm:gap-10">
          {photos.map((photo, index) => (
            <div
              key={`photo-${index}`}
              className="w-52 h-64 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-10">
          {skills.map((skill) => (
            <div className="block-container w-16 h-16">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">My Projects</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Here is a selection of projects I completed during my studies at
            EPFL, where I applied my knowledge of digital humanities,
            programming, and data analysis to solve real-world and historical
            problems and explore new ideas.
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.key_skills}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3
                    className="text-black text-xl font-poppins font-semibold"
                    style={{ margin: 0 }}
                  >
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base">
                    {experience.key_skills}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
