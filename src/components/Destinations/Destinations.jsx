import React, { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";
import { FaSpinner } from 'react-icons/fa';

const Destinations = ({ handleOrderPopup }) => {
  const [placesData, setPlacesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPlaces = async () => {
    try {
      const response = await fetch(
        "https://travel-advisor.p.rapidapi.com/locations/search?query=Bali&limit=10&offset=0&units=km&location_id=1&currency=IDR&sort=relevance&lang=id_ID",
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'a617a2a742msh9c7b5be9d02c6b4p12f52ejsn2ec314f70d14',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const mappedData = data.data.map((place) => ({
        img: place.result_object.photo ? place.result_object.photo.images.large.url : "https://via.placeholder.com/400",
        type: place.result_object.category.key || "N/A",
      }));

      const filteredData = Object.values(
        mappedData.reduce((acc, item) => {
          if (!acc[item.type]) {
            acc[item.type] = item;
          }
          return acc;
        }, {})
      );

      setPlacesData(filteredData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-32 mb-20">
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
          onClick={fetchPlaces}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 pt-20 pb-60">
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          List of Destinations
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {placesData.map((item, index) => (
            <DestinationCard
              key={index}
              {...item}
              onClick={handleOrderPopup ? () => handleOrderPopup(item) : undefined} // If handleOrderPopup is provided, call it on click
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Destinations;
