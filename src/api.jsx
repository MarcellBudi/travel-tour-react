export const fetchPlacesData = async () => {
    try {
      const response = await fetch(
        "https://travel-advisor.p.rapidapi.com/locations/search?query=Bali&limit=10&offset=0&units=km&location_id=1&currency=IDR&sort=relevance&lang=id_ID",
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'a617a2a742msh9c7b5be9d02c6b4p12f52ejsn2ec314f70d14', // Replace with your RapidAPI key
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        }
      );
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
  
      // Mapping data including rating
      const mappedData = data.data.map((place) => ({
        img: place.result_object.photo ? place.result_object.photo.images.large.url : "https://via.placeholder.com/400",
        title: place.result_object.name,
        location: place.result_object.location_string,
        price: Math.floor(Math.random() * 1000000), // Example price data
        type: place.result_object.category.key || "N/A",
        rating: place.result_object.rating || "N/A", // Adding rating to the data
      }));
  
      // Sort by rating (assuming rating is a number or can be converted to a number)
      const sortedData = mappedData
        .filter(item => item.rating !== "N/A")
        .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  
      return sortedData;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  