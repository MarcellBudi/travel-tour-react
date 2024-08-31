import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaSpinner } from 'react-icons/fa';
import PlaceCard from "../components/Places/PlaceCard";
import { fetchPlacesData } from '../api'; // Import the fetch function from api.jsx

const DestinationDetail = () => {
  const { type } = useParams(); // Mengambil parameter type dari URL
  const [placesData, setPlacesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const allPlacesData = await fetchPlacesData(); // Call the fetch function
        const filteredPlacesData = allPlacesData.filter(
          (place) => place.type.toLowerCase() === type.toLowerCase()
        );
        setPlacesData(filteredPlacesData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [type]); // Fetch data setiap kali type berubah

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
      </div>
    );
  }

  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 pt-20 pb-60">
      <section className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          {type.charAt(0).toUpperCase() + type.slice(1)} Destinations
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {placesData.map((item, index) => (
            <PlaceCard key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DestinationDetail;
