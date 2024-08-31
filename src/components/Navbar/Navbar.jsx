import React, { useState } from "react";
import Logo from "../../assets/logo go travel.jpeg";
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react-refresh/only-export-components
export const NavbarLinks = [
  { name: "Home", link: "/" },
  { name: "Best Places", link: "/best-places" },
  { name: "Destinations", link: "/destinations" },
  { name: "About", link: "/about" },
  { name: "Blogs", link: "/blogs" },
  { name: "Contact", link: "/contact" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="fixed top-0 right-0 w-full z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-lg transition-all duration-300">
      {/* Top bar with contact details */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-1">
        <div className="container flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span className="text-sm">+62123123123</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="text-sm">info@gotravel.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-4">
            <img src={Logo} alt="Logo" className="h-12 sm:h-16" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {NavbarLinks.map((item, index) => (
              <li key={index} className="text-lg relative group">
                <NavLink
  to={item.link}
  className={({ isActive }) =>
    isActive
      ? "text-secondary font-semibold transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-secondary"
      : "text-gray-800 hover:text-secondary transition-all duration-300 relative group"
  }
>
  {item.name}
  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
</NavLink>
              </li>
            ))}
          </ul>

          {/* Action buttons */}
          <div className="flex items-center gap-4">
            <button
              className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300 ease-in-out text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={handleOrderPopup}
            >
              Book Now
            </button>

            {/* Mobile Hamburger Icon */}
            <div className="md:hidden block">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all duration-300"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all duration-300"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
