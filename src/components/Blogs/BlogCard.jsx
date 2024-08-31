import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUserAlt, FaChevronRight } from "react-icons/fa";

const BlogCard = ({ image, date, title, description, author }) => {
  // Encode the title to make it URL-friendly
  const encodedTitle = encodeURIComponent(title.toLowerCase().replace(/ /g, "-"));

  return (
    <Link
      to={`/blogs/${encodedTitle}`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      state={{ image, date, title, description, author }}
    >
      <div className="transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 dark:bg-slate-950 dark:text-white rounded-lg shadow-md">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={image || "default-image-path.jpg"}
            alt={title}
            className="mx-auto h-[250px] w-full object-cover transition duration-700 transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 transition-opacity duration-500 hover:opacity-80"></div>
        </div>
        <div className="px-6 mt-2 flex justify-between pt-2 text-slate-600 dark:text-slate-400 text-sm">
          <p className="flex items-center">
            <FaCalendarAlt className="mr-1" /> {date}
          </p>
          <p className="flex items-center line-clamp-1">
            <FaUserAlt className="mr-1" /> By {author}
          </p>
        </div>
        <div className="space-y-2 px-6 py-3">
          <h1 className="line-clamp-1 font-bold text-lg text-slate-800 dark:text-white transition-colors duration-300 hover:text-primary">
            {title}
          </h1>
          <p className="line-clamp-2 text-sm text-slate-600 dark:text-slate-300">
            {description}
          </p>
          {/* Add the "Read More" button with an arrow icon */}
          <div className="pt-1">
            <Link
              to={`/blogs/${encodedTitle}`}
              className="inline-flex items-center mt-2 text-primary hover:underline dark:text-primary-light"
            >
              Read More <FaChevronRight className="ml-1 text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
