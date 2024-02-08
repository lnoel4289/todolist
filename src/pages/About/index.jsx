import { useSelector } from "react-redux";

const AboutPage = () => {
  const mode = useSelector((state) => state.mode);

  return (
    <div className={mode === "dark" ? "grow dark bg-gray-700" : "grow"}>
      <main className="px-5 sm:px-10 font-indie text-sm xs:text-lg sm:text-3xl dark:text-gray-300">
        <p className="mt-2 xs:mt-5">
          Welcome to this to-do list single page application !
        </p>
        <br />
        <p className="mt-2 xs:mt-5">
          You can freely use this with no limitations.
        </p>
        <br />
        <p className="mt-2 xs:mt-5">
          Please don't write here any sensible information, as this app use your
          browser's local storage which, may be read by third party.
        </p>
        <br />
        <p>Have good to-do's !</p>
        <br />
      </main>
    </div>
  );
};

export default AboutPage;
