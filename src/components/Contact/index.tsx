"use client";

// import NewsLatterBox from "./NewsLatterBox";
import SectionTitle from "../Common/SectionTitle";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Nous contacter"
          paragraph="Pour toute correspondance, veuillez utiliser le formulaire
                ci-dessous. Nous sommes à votre disposition pour répondre à vos
                questions et vous assister."
          center
          width="665px"
        />
        <div className="-mx-4 flex flex-wrap ">
          <div className="mx-auto w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-md bg-indigo-100 px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              {/* <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Nous contacter
              </h2> */}
              {/* <p className="mb-12 text-base font-medium text-body-color">
                Pour toute correspondance, veuillez utiliser le formulaire
                ci-dessous. Nous sommes à votre disposition pour répondre à vos
                questions et vous assister.
              </p> */}
              <form
                action={async (formData) => {
                  const { data, error } = await sendEmail(formData);

                  if (error) {
                    toast.error(error);
                    return;
                  }

                  toast.success("Email envoyé!");
                }}
              >
                <div className="-mx-4 flex flex-wrap">
                  {/* <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Nom
                      </label>
                      <input
                        name="senderName"
                        type="text"
                        required
                        maxLength={50}
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div> */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="senderEmail"
                        required
                        maxLength={50}
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        required
                        maxLength={5000}
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <SubmitBtn />
                    {/* <button
                      type="submit"
                      className="rounded-md bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      Envoyer
                    </button> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
