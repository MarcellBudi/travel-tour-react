import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import BlogCard from "./BlogCard";

const BlogsHome = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(3);
  const navigate = useNavigate(); // Inisialisasi useNavigate

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
    navigate("/all-blogs"); // Navigasi ke halaman semua blog
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white pt-10 pb-16">
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {blogsData.length > 0 ? (
            blogsData.slice(0, displayLimit).map((item) => (
              <BlogCard key={item.id} {...item} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        {displayLimit < blogsData.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded transition-transform transform hover:scale-105 hover:bg-primary-dark focus:outline-none"
            >
              All Blogs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
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
      </section>
    </div>
  );
};

export default BlogsHome;
