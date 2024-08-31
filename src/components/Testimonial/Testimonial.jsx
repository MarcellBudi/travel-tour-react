import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Isabella",
    text: "The service was outstanding, with every aspect of our needs met in a timely and professional manner.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Truly exceptional! The team exceeded our expectations and made the entire process seamless and enjoyable.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "John Doe",
    text: "A wonderful experience from start to finish. Their attention to detail and dedication to customer satisfaction is second to none.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Emily Johnson",
    text: "Professional, reliable, and simply outstanding. I highly recommend their services to anyone looking for top-notch quality.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Michael Lee",
    text: "Their expertise and customer service are truly unmatched. Every interaction was a pleasure, and the results were fantastic.",
    img: "https://picsum.photos/105/105",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Header section */}
        <div className="text-center mb-16 max-w-lg mx-auto">
          <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Testimonials
          </p>
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200">
            
            What Our Clients Say
          </h1>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mt-4">
          We are incredibly grateful for the exceptional service we received. Every detail was handled with the utmost care and professionalism
          </p>
        </div>
        {/* Testimonial section */}
        <div className="relative">
          <Slider {...settings}>
            {testimonialData.map(({ id, name, text, img }) => (
              <div key={id} className="p-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={img}
                      alt={name}
                      className="w-20 h-20 rounded-full mb-4 border-4 border-primary dark:border-secondary object-cover"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{text}</p>
                    <div className="absolute top-0 right-0 text-blue-100 dark:text-gray-700 text-9xl font-serif transform translate-x-6 -translate-y-6 opacity-20">
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
