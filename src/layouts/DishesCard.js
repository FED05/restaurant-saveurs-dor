import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const DishesCard = (props) => {
  return (
    <div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      <img src={props.img} alt="img" className="rounded-xl"></img>
      <div className="space-y-4">
        <h3 className="font-semibold text-center text-xl pt-6">{props.title}</h3>
        <div className="flex flex-row justify-center">
          <BsStarFill className="text-red-500" />
          <BsStarFill className="text-red-500" />
          <BsStarFill className="text-red-500" />
          <BsStarFill className="text-red-500" />
          <BsStarHalf className="text-red-500" />
        </div>
        <div className=" flex flex-row items-center justify-center gap-4" >
          <h3 className=" font-semibold text-lg">{props.price}</h3>
          <button title="Buy Now" />
        </div>
      </div>
    </div>
  );
};

export default DishesCard;
