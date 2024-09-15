import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Nos tarifs"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
