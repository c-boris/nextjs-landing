"use client";

import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Nos Réalisations"
          paragraph="Découvrez notre collection de projets innovants et performants."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <Fade cascade damping={0.3}>
            <div className="relative z-10 rounded-md bg-indigo-100 px-8 py-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
              <Image
                src="/images/blog/Macbook.webp"
                alt="Projet 1"
                width={600}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="relative z-10 rounded-md bg-indigo-100 px-8 py-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
              <Image
                src="/images/blog/iPhone.webp"
                alt="Projet 2"
                width={600}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="relative z-10 rounded-md bg-indigo-100 px-8 py-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
              <Image
                src="/images/blog/blog-03.jpg"
                alt="Projet 3"
                width={600}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Projects;
