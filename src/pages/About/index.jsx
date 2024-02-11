import { useSelector } from "react-redux";
import data from "../../data/lang";

const AboutPage = () => {
  const mode = useSelector((state) => state.mode);
  const lang = useSelector((state) => state.lang);
  const text = lang === "en" ? data.en : data.fr;

  return (
    <div
      className={mode === "dark" ? "grow dark bg-gray-700" : "grow"}
    >
      <main className="px-3 xs:px-5 sm:px-10 font-indie text-sm xs:text-lg sm:text-3xl dark:text-gray-300">
        <p className="mt-2 xs:mt-5">
          {text.aboutPage.p1}
        </p>
        <br />
        <p className="mt-2 xs:mt-5">
        {text.aboutPage.p2}
        </p>
        <br />
        <p className="mt-2 xs:mt-5">
        {text.aboutPage.p3}
        </p>
        <br />
        <p>{text.aboutPage.p4}</p>
        <br />
      </main>
    </div>
  );
};

export default AboutPage;
