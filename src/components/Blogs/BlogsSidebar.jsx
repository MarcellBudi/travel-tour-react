import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";

// Komponen RelatedBlogItem untuk menampilkan blog terkait
const RelatedBlogItem = ({ image, title, date }) => {
  const encodedTitle = (title) =>
    encodeURIComponent(title.toLowerCase().replace(/ /g, "-"));

  return (
    <div className="flex items-center space-x-3 mb-3">
      <img
        src={image || "default-image-path.jpg"}
        alt={title}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex flex-col">
        {/* Buat judul bisa diklik dan arahkan ke halaman detail */}
        <a
          href={`/blogs/${encodedTitle(title)}`}
          onClick={() => window.scrollTo(0, 0)}
          className="text-sm font-semibold hover:text-primary transition-colors duration-300"
        >
          {title}
        </a>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
    </div>
  );
};

const BlogsSidebar = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=travel&apiKey=f55ad4a0a71c4c6b8113f32252174b10`
        );
        const data = await response.json();
        const articles = data.articles.map((article, index) => ({
          id: index,
          image: article.urlToImage,
          title: article.title,
          description: article.description,
          author: article.author || "Unknown",
          date: new Date(article.publishedAt).toLocaleDateString(),
        }));
        setBlogsData(articles);
      } catch (error) {
        console.error("Error fetching the blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleLoadMore = () => {
    navigate("/all-blogs");
  };

  return (
    <div className="">
      {blogsData.slice(0, 5).map((item) => (
        <RelatedBlogItem
          key={item.id}
          image={item.image}
          title={item.title}
          date={item.date}
        />
      ))}
      {displayLimit < blogsData.length && (
        <div className="mt-4 text-center">
          <button
            onClick={handleLoadMore}
            className="inline-flex items-center gap-2 px-4 py-1 bg-primary text-white text-sm rounded transition-transform transform hover:scale-105 hover:bg-primary-dark focus:outline-none"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogsSidebar;
