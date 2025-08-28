import React from "react";
import cardBack from "../assets/Card_Back.png";

const PlayerCardBack = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <img
        src={cardBack}
        alt="Player Card Back"
        className="w-[300px] rounded-xl shadow-lg"
      />
    </div>
  );
};

export default PlayerCardBack;
