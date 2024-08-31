// import React from "react";
// import PlaceCard from "./PlaceCard";
// import Img1 from "../../assets/places/boat.jpg";
// import Img2 from "../../assets/places/tajmahal.jpg";
// import Img3 from "../../assets/places/water.jpg";
// import Img4 from "../../assets/places/place4.jpg";
// import Img5 from "../../assets/places/place5.jpg";
// import Img6 from "../../assets/places/place6.jpg";

// const PlacesData = [
//   {
//     img: Img1,
//     title: "Boat",
//     location: "USA",
//     description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     price: 400000,
//     type: "Cultural Relax",
//   },
//   { 
//     img: Img2,
//     title: "Taj Mahal",
//     location: "India",
//     description:
//       "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
//     price: 400000,
//     type: "Cultural Relax",
//   },
//   {
//     img: Img3,
//     title: "Underwater",
//     location: "US",
//     description:
//       "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
//     price: 1000000,
//     type: "Cultural Relax",
//   },
//   {
//     img: Img4,
//     title: "Sydney",
//     location: "USA",
//     description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     price: 500000,
//     type: "Cultural Relax",
//   },
//   {
//     img: Img5,
//     title: "Los Angeles",
//     location: "United states",
//     description:
//       "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
//     price: 450000,
//     type: "Cultural Relax",
//   },
//   {
//     img: Img6,
//     title: "Los Vegas",
//     location: "California",
//     description:
//       "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
//     price: 350000,
//     type: "Cultural Relax",
//   },
// ];

// const Places = ({ handleOrderPopup }) => {
//   return (
//     <>
//       <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
//         <section data-aos="fade-up" className="container ">
//           <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
//             Best Places to Visit
//           </h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {PlacesData.map((item, index) => (
//               <PlaceCard
//                 handleOrderPopup={handleOrderPopup}
//                 key={index}
//                 {...item}
//               />
//             ))}
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Places;


import React, { useEffect, useState } from "react";
import PlaceCard from "./PlaceCard";

const Places = ({ handleOrderPopup }) => {
  const [placesData, setPlacesData] = useState([]); // State untuk menyimpan data dari API
  const [loading, setLoading] = useState(true); // State untuk loading indicator
  const [error, setError] = useState(null); // State untuk error handling

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch("https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=115.0920&lat=-8.3405&apikey=5ae2e3f221c38a28845f05b61820ef8c3f8bc6bf23d7d2837034065c"); // Ganti dengan API URL dan API Key
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json(); // Ubah respons menjadi JSON

        // Contoh memetakan data API ke format yang sesuai untuk PlaceCard
        const mappedData = data.features.map((place) => ({
          img: place.properties.image || "default_image_url.jpg", // Pastikan ada URL gambar default
          title: place.properties.name,
          location: place.properties.address || "Location not available",
          description: place.properties.description || "No description available",
          price: Math.floor(Math.random() * 1000000), // Contoh data harga, mungkin tidak tersedia di API asli
          type: place.properties.kinds.split(",")[0] || "N/A",
        }));

        setPlacesData(mappedData); // Simpan data yang sudah dimapping
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPlaces(); // Memanggil fungsi fetch
  }, []); // Menjalankan efek hanya sekali saat komponen di-mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container ">
        <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to Visit
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
