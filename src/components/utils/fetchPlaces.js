// src/utils/fetchPlaces.js
export const fetchPlaces = async () => {
    try {
      const response = await fetch(
        "https://travel-advisor.p.rapidapi.com/locations/search?query=Bali&limit=10&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US",
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'a747c3ae0bmsh283595c58b8158dp18c73fjsn62142bc024d9',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.data.map((place) => ({
        title: place.result_object.name,
        link: `/destinations/${place.result_object.location_id}`,
        img: place.result_object.photo ? place.result_object.photo.images.large.url : "https://via.placeholder.com/400",
        type: place.result_object.category.key || "N/A",
      }));
    } catch (error) {
      console.error("Failed to fetch places:", error);
      throw error;
    }
  };
  