// src/Places.js
import React, { useEffect, useState } from "react";
import PlaceCard from "./PlaceCard";
import { FaSpinner } from 'react-icons/fa'; // Font Awesome Spinner Icon
import { fetchPlacesData } from "../../api"; // Importing the fetch function

const Places = ({ handleOrderPopup }) => {
  const [placesData, setPlacesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadPlaces = async () => {
    try {
      const data = await fetchPlacesData();
      setPlacesData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPlaces();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-28 mb-20">
        <FaSpinner className="animate-spin mr-2 text-3xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-32 mb-20 text-2xl">
        <p>Error: {error}</p>
        <button
          className="mt-4 px-4 py-2 bg-primary text-white rounded"
          onClick={loadPlaces}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to Visit in Bali
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {placesData.map((item, index) => (
            <PlaceCard
              key={index}
              handleOrderPopup={handleOrderPopup}
              {...item}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
export default Places;
