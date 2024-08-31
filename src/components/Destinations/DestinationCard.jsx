import React from "react";

const DestinationCard = ({ img, type }) => {
  const handleClick = () => {
    const url = `/destinations/${type.toLowerCase()}`;
    window.location.href = url;
  };

  return (
    <div
      className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white rounded-lg overflow-hidden transform hover:-translate-y-0 hover:scale-[1.02] cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative">
        <img
          src={img}
          alt={type}
          className="w-full h-[220px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white py-1 px-3 rounded-md text-xl">
          {type}
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
