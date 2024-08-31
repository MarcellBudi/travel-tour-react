import React from "react";
import { FaStar, FaSuitcase, FaThumbsUp, FaShieldAlt } from "react-icons/fa";
import BlogsHome from "../components/Blogs/BlogsHome";
import Location from "../components/Location/Location";
import aboutImage from "../assets/images/about.jpeg"; // Gambar About Us
import exploreImage from "../assets/images/explore.jpeg"; // Gambar Explore
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="container pt-10">
        {/* Section with Image on the Right */}
        <div className="flex flex-col lg:flex-row-reverse items-center py-10">
  <div className="lg:w-1/2">
    <img
      src={aboutImage}
      alt="About Us"
      className="rounded-lg shadow-lg mt-16 lg:mt-24" // Margin top hanya untuk gambar
    />
  </div>
  <div className="lg:w-1/2 lg:pr-10 mt-6 lg:mt-0">
    <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-4xl font-bold text-primary">
    Welcome to Go Travel and Tour
    </h1>
    <p className="text-lg text-gray-700">
    We are an Indonesia-based travel and tour company, founded with a vision to provide an unforgettable travel experience for every customer. With a wide selection of amazing destinations throughout the archipelago, we are proud to be part of your adventure in exploring the natural beauty, culture, and history of Indonesia.
    </p>
  </div>
</div>

        {/* Why Choose Us Section with Cards */}
        <div className="pb-10">
          <h2 className="my-6 text-3xl font-bold text-secondary">
          Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
              <FaStar className="text-primary text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Experience and Expertise</h3>
              <p className="text-gray-600 text-center">
              With years of experience in the travel industry, our team consists of dedicated professionals who have in-depth knowledge of tourist destinations in Indonesia.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
              <FaSuitcase className="text-primary text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Various Tour Packages</h3>
              <p className="text-gray-600 text-center">
              We offer a variety of tour packages tailored to your interests and needs, from nature, culture, culinary, to extreme adventure.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
              <FaThumbsUp className="text-primary text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Best Service</h3>
              <p className="text-gray-600 text-center">
              We are committed to providing the best service at competitive prices, ensuring you get the best value for every rupiah you spend.
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
              <FaShieldAlt className="text-primary text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Safety & Comfort</h3>
              <p className="text-gray-600 text-center">
              Your safety and comfort are our top priorities. We work with trusted partners to ensure that all aspects of your trip, from transportation to accommodation, are well taken care of.
              </p>
            </div>
          </div>
        </div>

        {/* Explore Indonesia Section with Image and Button */}
        <div className="pt-10 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <img
              src={exploreImage}
              alt="Explore Indonesia"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-10 mt-6 lg:mt-0 text-center lg:text-left">
            <h2 className="my-6 text-3xl font-bold text-secondary">
            Explore Indonesia With Us
            </h2>
            <p className="text-lg text-gray-700 mb-6">
            Come join us to explore the wonders of Indonesia. From the exotic charm of Bali, to the stunning natural beauty of Raja Ampat, we are ready to take you to your dream destination. With a spirit of friendly and professional service, we are committed to being your best travel partner.
            </p>
            <Link to="/best-places">
  <button className="px-6 py-3 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-primary-dark transition">
    Explore
  </button>
</Link>
          </div>
        </div>
      </div>

      
      <BlogsHome />
    </>
  );
};

export default About;
