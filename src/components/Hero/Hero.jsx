import React from "react";

const Hero = () => {
  const [priceValue, setPriceValue] = React.useState(30);
  const formattedPriceIDR = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(priceValue * 10000); // Assuming 1 unit of priceValue is 10,000 IDR

  return (
    <div className="bg-hero-pattern bg-cover bg-center h-screen flex justify-center items-center relative mt-28">
      <div className="relative z-10 w-full max-w-4xl px-6 py-8 bg-white/90 rounded-lg shadow-xl backdrop-blur-sm">
        <div className="text-center text-white mb-8">
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="font-bold text-3xl text-primary"
          >
            Search Your Destination
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label htmlFor="destination" className="text-primary font-medium">
                Search your Destination
              </label>
              <input
                type="text"
                name="destination"
                id="destination"
                placeholder="Bali"
                className="w-full bg-gray-100 my-2 focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded-full p-3"
              />
            </div>
            <div>
              <label htmlFor="date" className="text-primary font-medium">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="w-full bg-gray-100 my-2 focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded-full p-3"
              />
            </div>
            <div>
              <label htmlFor="price" className="text-primary font-medium">
                <div className="w-full flex justify-between items-center">
                  <p>Max Price</p>
                  <p className="font-bold text-xl text-primary">
                    {formattedPriceIDR}
                  </p>
                </div>
              </label>
              <div className="bg-gray-100 rounded-full p-3 flex items-center">
                <input
                  type="range"
                  name="price"
                  id="price"
                  className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  min="150"
                  max="1000"
                  value={priceValue}
                  step="10"
                  onChange={(e) => setPriceValue(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 hover:shadow-lg px-6 py-3 rounded-full duration-200 block mx-auto">
            Search Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
