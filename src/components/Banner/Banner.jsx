import React from "react";
import TravelImg from "../../assets/traveltourbox.png";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <>
      <div className="min-h-[600px] bg-gray-100">
        <div className="min-h-[600px] flex justify-center items-center py-12 sm:py-0">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
              {/* Image section */}
              <div data-aos="flip-up">
                <img
                  src={TravelImg}
                  alt="biryani img"
                  className="max-w-[450px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                />
              </div>
              {/* Text content section */}
              <div className="flex flex-col justify-center gap-8 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-800"
                >
                  Explore All Corners of Indonesia with Us
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-lg text-gray-600 tracking-wide leading-relaxed"
                >
                  Join us to explore the wonders of Indonesia. From the exotic charm of Bali to the stunning natural beauty of Raja Ampat, we're ready to take you to your dream destination. With friendly and professional service, we're committed to being your best travel partner.
                </p>
                <div
                  data-aos="zoom-in"
                  className="grid grid-cols-2 gap-8 mt-4"
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <MdFlight className="text-5xl h-14 w-14 shadow-lg p-4 rounded-full bg-violet-100 dark:bg-violet-500 text-violet-700" />
                      <p className="text-xl font-medium text-gray-700">Flight</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <MdOutlineLocalHotel className="text-5xl h-14 w-14 shadow-lg p-4 rounded-full bg-orange-100 dark:bg-orange-500 text-orange-700" />
                      <p className="text-xl font-medium text-gray-700">Hotel</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <IoIosWifi className="text-5xl h-14 w-14 shadow-lg p-4 rounded-full bg-green-100 dark:bg-green-500 text-green-700" />
                      <p className="text-xl font-medium text-gray-700">Wi-Fi</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <IoFastFoodSharp className="text-5xl h-14 w-14 shadow-lg p-4 rounded-full bg-yellow-100 dark:bg-yellow-500 text-yellow-700" />
                      <p className="text-xl font-medium text-gray-700">Foods</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;




