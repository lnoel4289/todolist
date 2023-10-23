import React from "react";

const AboutPage = () => {
  return (
    <main className="px-5 grow font-indie text-sm xs:text-base sm:text-2xl">
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
      <p>
        Next step should be to make state persistent through sessions and also
        to have more options to manage todo's in the list.
      </p>
    </main>
  );
};

export default AboutPage;
