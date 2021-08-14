import clsx from "clsx";
import Link from "next/link";
import MainLayout from "../../components/layout";
import Head from "next/head";

const ContactSocialMedia = (props) => {
  const { href, iconSocialSrc, alt, contentSpan, contentLinkIcons } = props;

  return (
    <li className={clsx("flex items-center my-2 sm:text-size-6.2 text-size-4")}>
      <img src={iconSocialSrc} className={clsx("w-6 sm:w-7")} alt={alt} />
      <span className={clsx("mx-2 font-extraBold sm:mx-3")}>{contentSpan}</span>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={clsx("underline")}
      >
        {contentLinkIcons}
      </a>
    </li>
  );
};

const AboutMe = () => {
  return (
    <MainLayout>
      <Head>
        <title>Sobre Mi - Abraham Calsin</title>
      </Head>
      <div className="mt-0 sm:mt-20 sm:mb-10">
        <div className="bg-clrOption-1 w-25 h-1-2 my-2 sm:m-0 sm:mb-3 sm:h-2-6 sm:w-35"></div>
        <h1 className="font-extraBold text-size-6 sm:text-size-8.2-desk">
          {"{"}Sobre Mi{"}"}
        </h1>
        <p className="text-size-4 leading-loose font-medium mt-2 px-0 sm:text-size-8.1-desk">
          Hey, hola! Soy Abraham Calsin un individuo autodidacta, me apasiona la
          programación, actualmente me desempeño como desarrollador frontend,
          creo proyectos de código abierto, escribo en JavaScript moderno,
          Typescript, React.js y Next.js. Me fascina el asunto del trabajo en
          equipo, a lo largo de mi aventura en el mundo del desarrollo web, me
          involucre en el desarrollo de varios proyectos, proponiéndome retos,
          los cuales me enseñaron a corregir mis propios errores al desarrollar
          un Sitio Web. Puedes ver mi trabajo en la sección de
          <Link href="/projects">
            <a className="font-bold underline ml-2">Proyectos.</a>
          </Link>
        </p>
        <p className="font-semiBold text-size-6.2 sm:text-size-6 mt-12">
          ¿Te interesa lo que hago?, ¡Trabajemos juntos!.
          <span className="block mt-2 relative font-bold before:content-[' '] before:inline-block before:h-2-6 before:w-10 before:mb-2 before:mr-2-6 before:rounded-rds-1.1 before:bg-clrOption-1">
            Contáctame:
          </span>
        </p>
        <div className="font-semiBold my-3 mb-15 sm:mb-0">
          <ContactSocialMedia
            iconSocialSrc="/icons/email.svg"
            alt="Email"
            contentSpan="Email:"
            contentLinkIcons="@abrahamcalsin"
            href="mailto:hello.abrahamcalsin@gmail.com"
          />
          <ContactSocialMedia
            iconSocialSrc="/icons/linkedin.svg"
            alt="LinkedIn"
            contentSpan="LinkedIn:"
            href="https://www.linkedin.com/in/abrahamcalsin/"
            contentLinkIcons="@abrahamcalsin"
          />
          <ContactSocialMedia
            iconSocialSrc="/icons/twitter.svg"
            alt="Twitter"
            contentSpan="Twitter:"
            href="https://twitter.com/abraham_calsin"
            contentLinkIcons="@abraham_calsin"
          />
          <ContactSocialMedia
            iconSocialSrc="/icons/github.svg"
            alt="GitHub"
            contentSpan="GitHub:"
            href="https://github.com/abrahamcalsin"
            contentLinkIcons="@abrahamcalsin"
          />
        </div>
      </div>
    </MainLayout>
  );
};
export default AboutMe;