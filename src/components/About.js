import React from "react";
import img from "../assets/img/img2.jpg";
const About = () => {
  return (
    <div className="min-h-screen  flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" className="w-full lg:w-1/2 h-[400px] object-cover rounded-lg"></img>
      <div className="space-y-4 lg:pt-14">
        <h1 className="font-semibold text-4xl text-center md:text-start" >Why Choose Us?</h1>
        <p>
          Nous proposons des ingrédients frais, des plats soigneusement préparés
          et une passion pour la qualité que vous ressentirez à chaque bouchée.
        </p>
        <p>
          Nos chefs sélectionnent les meilleurs ingrédients pour créer des plats
          savoureux, alliant tradition, fraîcheur et savoir-faire.
        </p>
        <div className="flex justify-center lg:justify-start">
            <button title="Learn More"></button>
        </div>
      </div>
    </div>
  );
};

export default About;
