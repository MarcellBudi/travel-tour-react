import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogsComp = () => {
  const [blogsData, setBlogsData] = useState([]);

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

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white pt-10 pb-20">
        <section data-aos="fade-up" className="container">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {blogsData.length > 0 ? (
              blogsData.slice(0, 9).map((item) => (
                <BlogCard key={item.id} {...item} />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
