import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogsSidebar from "../components/Blogs/BlogsSidebar";

const BlogsDetails = () => {
  const { title } = useParams();
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    // Fetch blog data
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=travel&apiKey=f55ad4a0a71c4c6b8113f32252174b10"
        );
        const data = await response.json();
        const decodedTitle = title.replace(/-/g, " ");
        const article = data.articles.find(
          (article) => article.title.toLowerCase() === decodedTitle
        );

        if (article) {
          setBlogData({
            image: article.urlToImage,
            date: new Date(article.publishedAt).toLocaleDateString(),
            title: article.title,
            description: article.description,
            author: article.author || "Unknown",
          });
        }
      } catch (error) {
        console.error("Error fetching the blog details:", error);
      }
    };

    fetchBlogDetails();
  }, [title]);

  if (!blogData) {
    return <p>Loading...</p>;
  }

  const { image, date, title: blogTitle, description, author } = blogData;

  return (
    <div className="pt-48 pb-36 container mx-auto flex flex-col md:flex-row gap-8">
      {/* Main Content */}
      <div className="flex-1 bg-white shadow-md rounded-lg overflow-hidden">
        <div className="h-[300px] overflow-hidden">
          <img
            src={image}
            alt={blogTitle}
            className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <p className="text-slate-600 text-sm py-2">
            Written by <span className="font-semibold">{author}</span> on{" "}
            <span className="font-semibold">{date}</span>
          </p>
          <h1 className="text-3xl font-bold mb-4">{blogTitle}</h1>
          <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Sidebar with BlogsHome */}
      <aside className="w-full md:w-1/3 bg-gray-50 px-6 shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Related Blogs</h2>
        <BlogsSidebar />
      </aside>
    </div>
  );
};

export default BlogsDetails;
