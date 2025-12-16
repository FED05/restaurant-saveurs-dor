import React from "react";
import foodimg from "../assets/img/food.jpg";
const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/food.jpg')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-gray-200 font-semibold text-6xl "> Des ingrédients frais, des saveurs vraies</h1>
        <p className="text-gray-400">
          Chez Saveurs d’Or, nous vous proposons une cuisine authentique
          préparée avec des ingrédients frais et de qualité. Chaque plat est
          conçu avec passion pour vous offrir une expérience gustative unique.
        </p>
        <div>
          <button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;
