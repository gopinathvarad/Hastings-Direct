import React from "react";

const Highlights = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14 mx-auto w-full max-w-6xl px-4 md:px-0">
      {articles.map((article, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-16 h-16 md:w-24 md:h-24 object-cover"
            />
          </div>
          <div>
            <p className="text-xl md:text-2xl font-bold text-red-500">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="text-lg font-bold text-gray-900 hover:cursor-pointer hover:text-red-500">
              {article.title}
            </h3>
            <p className="text-gray-500 text-sm md:text-base">
              {article.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Highlights;
