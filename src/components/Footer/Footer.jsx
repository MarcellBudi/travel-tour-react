import React, { useEffect, useState } from "react"; // Impor React dan hooks lainnya
import FooterLogo from "../../assets/logo go travel.jpeg";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Destinations",
    link: "/destinations",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
  const FooterLinksImportantLink = [
    {
      title: "Terms & Conditions",
      link: "/terms-conditions",
    },
  {
    
    title: "Policy & Privacy",
    link: "/policy-privacy",
  },
  {
    title: "FAQ",
    link: "/faq",
  },
];

const Footer = () => {
  const [destinationTypes, setDestinationTypes] = useState([]);

  useEffect(() => {
    const fetchDestinationTypes = async () => {
      try {
        const response = await fetch(
          "https://travel-advisor.p.rapidapi.com/locations/search?query=Bali&limit=10&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US",
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
        // Mengambil tipe data unik dan hanya huruf depan yang kapital
        const types = [...new Set(data.data.map((place) => {
          const type = place.result_object.category.key || "N/A";
          return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase(); // Hanya huruf pertama yang kapital
        }))];
        setDestinationTypes(types);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDestinationTypes();
  }, []);
  return (
    <>
      <div className="dark:bg-gray-950 mt-40 py-10 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
        >
          <source src={NatureVid} type="video/mp4" />
        </video>
        <div className="container">
          <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
            <div className="py-8 pl-9 pr-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src={FooterLogo} alt="" className="max-h-[60px]" />
                {/* TravelloGo */}
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                facere ab hic accusamus omnis dolor voluptatibus illo, tempore
                eum tenetur.
              </p>
              <br />
              <div className="flex items-center gap-3 ">
                <FaLocationArrow />
                <p>Gianyar Bali, Indonesia</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+62123123123</p>
              </div>
              {/* social handles */}
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Menu
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      // eslint-disable-next-line react/jsx-key
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                  Destinations
                </h1>
                <ul className="flex flex-col gap-3">
                  {destinationTypes.map((type, index) => (
                    <li
                      key={index}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200"
                    >
                      <Link
                        to={`/destinations?type=${type}`}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span>{type}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinksImportantLink.map((link) => (
                      // eslint-disable-next-line react/jsx-key
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span> {link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white rounded-b-xl">
            Copyright © 2024 All Rights Reserved | Made with ❤️ by MarcellBudi
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
