"use client";

import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Mentions Légales"
          paragraph=""
          center
          width="665px"
        />

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                Confidentialité
              </h2>

              <div>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Le site studio-126.com n’enregistre pas d’informations
                  personnelles permettant l’identification, à l’exception des
                  formulaires que l’utilisateur est libre de remplir. <br />
                  Ces informations ne seront pas utilisées sans votre accord,
                  nous les utiliserons seulement pour vous adresser des
                  courriers, des brochures, des devis ou vous contacter. Les
                  informations recueillies sur les sites bénéficient de la
                  protection de la loi « Informatique et Libertés » n° 78-17 du
                  06 janvier 1978. Elles bénéficient d’un droit d’accès, de
                  rectification, d’opposition à communication et de suppression
                  sur simple demande par email à contact@studio-126.com. <br />
                  Le site studio-126.com pourra procéder à des analyses
                  statistiques sans que celles-ci soient nominatives et pourra
                  en informer des tiers (organismes d’évaluation de
                  fréquentation) sous une forme résumée et non nominative.
                </p>
              </div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                Liens hypertexte
              </h2>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Le site studio-126.com ne contrôle pas les sites en connexion
                avec le sien, et ne saurait donc être responsable de leur
                contenu. Les risques liés à l’utilisation de ces sites incombent
                pleinement à l’utilisateur. Il se conformera à leurs conditions
                d’utilisation.
              </p>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                Collecte de Cookies
              </h2>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Nos serveurs ne collectent aucunes informations personnelles sur
                les visiteurs du site. Les données de trafic et les fichiers de
                cookies implantés sur votre ordinateur ont pour seule finalité
                de permettre d’analyser la fréquentation des différentes pages
                du site studio-126.com afin d’en améliorer le contenu. Ces
                données sont conservées 12 mois. <br />
                Les données relatives à la navigation des visiteurs ne sont pas
                exploitées nominativement. Il s’agit de statistiques permettant
                de connaître le trafic de chacune des pages, les parcours de
                navigation, le taux de consultations par jour de la semaine et
                par heure de la journée ainsi que les différentes erreurs
                possibles côté clients ou serveur. Pour plus d’informations,
                vous pouvez consulter les conditions générales de Google
                Analytics. <br />
                Par le biais de votre navigateur, vous avez la possibilité de
                bloquer l’implantation de cookies sur votre ordinateur :
              </p>
              <ul className="mb-10 list-inside list-disc text-body-color">
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Mozilla Firefox :
                  https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Google Chrome :
                  https://support.google.com/chrome/answer/95647?hl=fr
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Safari :
                  https://support.apple.com/fr-fr/guide/safari/sfri11471/mac
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Internet Explorer :
                  https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Opera : http://help.opera.com/Windows/10.20/fr/cookies.html
                </li>
              </ul>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                Données personnelles
              </h2>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Nous ne collectons, dans aucun cas, l’adresse e-mail des
                visiteurs sans que ceux-ci la communiquent de manière pleine et
                entière. <br />
                En complétant le formulaire et en cochant la case à cocher de
                consentement du formulaire, le visiteur donne son accord afin
                que les données à caractère personnel soient traitées. Les
                données saisies et envoyées via les formulaires ont pour
                finalités la prise de contact avec les personnes ayant
                complétées un formulaire (envoi de devis, réponses mails,
                demandes d’informations, …) ; la gestion des prospects et
                clients générale avec les personnes intéressées par nos services
                ; le suivi relationnel avec les personnes ayant proposé leurs
                candidatures dans le cadre d’une demande de recrutement. <br />
                Dans tous les cas, vous pouvez refuser de fournir vos données
                personnelles. <br />
                Dans ce cas, vous ne pourrez pas utiliser les services du site,
                notamment celui de solliciter des renseignements sur
                l’entreprise. Vos informations ne sont pas stockées à des fins
                commerciales, ni cédées, ni communiquées à des tiers.
              </p>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                Droit d’accès, de rectification ou suppression des données
                personnelles
              </h2>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Conformément à la loi Informatique et Libertés du 6 janvier 1978
                modifiée, ainsi qu’au Règlement Européen Général sur la
                Protection des Données (RGPD), vous disposez des droits d’accès,
                de rectification et de suppression des données personnelles vous
                concernant. <br />
                Vous pouvez exercer ce droit en utilisant le formulaire de
                contact du site ou sur simple demande par email à
                contact@studio-126.com.
              </p>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                Éditeur
              </h2>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                studio-126.com <br />
                Code APE/NAF : 6201Z <br />
                Convention : Programmation informatique
                <br />
                Siège social : 126, Rue de SEZE 69006 Lyon <br /> N° de
                téléphone : 06 52 24 77 22
              </p>

              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                Hébergement
              </h2>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Vercel Inc. <br /> 340 S Lemon Ave #4133 Walnut, CA 91789 <br />{" "}
                N° de téléphone : (559) 288-7060
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
