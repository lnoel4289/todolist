import React from "react";
import Header from "../../components/Header";

const AboutPage = () => {
  return (
    <main className="px-5 grow">
      <p>
        This additional page aims to show that state persists through
        navigating.
      </p>
      <p>
        You can safely visit an other page while current state isn't affected.
      </p>
    </main>
  );
};

export default AboutPage;
