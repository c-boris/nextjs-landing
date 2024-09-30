import Breadcrumb from "@/components/Common/Breadcrumb";
import Projects from "@/components/Legal";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets | Studio 126, Agence Web",
  description:
    "Agence web, spécialisée dans la création de sites internet, applications web et boutiques en ligne.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Nos projets"
        description="Découvrez notre collection de projets innovants et performants."
      />

      <Projects />
    </>
  );
};

export default ContactPage;
