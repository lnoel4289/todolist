import React from "react";

const AboutPage = () => {
  return (
    <main className="px-5 sm:px-10 grow font-indie text-sm xs:text-lg sm:text-3xl text-white">
      <p className="mt-2 xs:mt-5">
        This App was coded using React + Vite, with a bit of TDD (i am beginner
        in it, though) using Vitest (equivalent to other tests frameworks like
        Jest or Mocha), Redux (even if it's oversized for this simple
        application - only an exercise), and TailwindCSS for styling all this.
      </p>
      <br />
      <p>
        By visiting this page, you can check that your modifications on the todo
        list are persistant through session, which is made possible by using
        Redux.
      </p>
      <br />
    </main>
  );
};

export default AboutPage;
