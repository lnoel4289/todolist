import React from "react";

const AboutPage = () => {
  return (
    <main className="px-5 sm:px-10 grow font-indie text-sm xs:text-lg sm:text-3xl text-white">
      <p className="mt-2 xs:mt-5">
        Welcome to this to-do list single page application !
      </p>
      <br />
      <p className="mt-2 xs:mt-5">
        You can freely use this with no limitations.
      </p>
      <br />
      <p className="mt-2 xs:mt-5">
        Please don't write here any sensible information, as this app use your browser's local storage which, may be read by third party.
      </p>
      <br />
      <p>Have good to-do's !</p>
      <br />
    </main>
  );
};

export default AboutPage;
