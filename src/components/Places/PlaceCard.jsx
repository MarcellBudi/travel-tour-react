import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const PlaceCard = ({ img, title, location, price, type, rating, handleOrderPopup }) => {
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i < rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300 dark:text-gray-600" />);
      }
    }
    return stars;
  };

  return (
    <div
      className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white rounded-lg overflow-hidden transform hover:-translate-y-0 hover:scale-[1.02] cursor-pointer"
      onClick={handleOrderPopup}
    >
      <div className="relative">
        <img
          src={img}
          alt={title}
          className="w-full h-[220px] object-cover"
        />
        <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-3 rounded-md text-sm">
          {type}
        </div>
      </div>

      <div className="space-y-3 p-4">
        <h1 className="text-xl font-semibold truncate transition-all duration-300 hover:text-primary">
          {title}
        </h1>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <IoLocationSharp className="text-lg" />
          <span>{location}</span>
        </div>
        <div className="flex items-center justify-between border-t pt-3">
          <div className="flex items-center gap-1">
            {renderStars()}
            <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">({rating})</span>
          </div>
          <div className="text-lg font-medium text-gray-900 dark:text-gray-100">
            {formattedPrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
