"use client";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Titre de section */}
        <SectionTitle
          title="Nos Réalisations"
          paragraph="Découvrez notre collection de projets innovants et performants."
          center
          width="665px"
        />

        {/* Grid pour afficher trois projets */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Projet 1 */}
          <div className="relative z-10 rounded-md bg-indigo-100 px-8 py-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
            <Image
              src="/images/blog/blog-01.jpg" // Remplacer par le chemin correct de l'image
              alt="Projet 1"
              width={600} // Largeur de l'image
              height={300} // Hauteur de l'image
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Projet 2 */}
          <div className="relative z-10 rounded-md bg-indigo-100  px-8 py-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
            <Image
              src="/images/blog/blog-02.jpg" // Remplacer par le chemin correct de l'image
              alt="Projet 2"
              width={600} // Largeur de l'image
              height={300} // Hauteur de l'image
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Projet 3 */}
          <div className="relative z-10 rounded-md bg-indigo-100  px-8 py-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
            <Image
              src="/images/blog/blog-03.jpg" // Remplacer par le chemin correct de l'image
              alt="Projet 3"
              width={600} // Largeur de l'image
              height={300} // Hauteur de l'image
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
