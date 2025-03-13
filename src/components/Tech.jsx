// eslint-disable-next-line no-unused-vars
import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const filteredTechnologies = technologies.filter(
    (tech) => tech.name !== "figma" && tech.name !== "docker"
  );
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {filteredTechnologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className='mt-2 text-white text-center text-sm'>{technology.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");