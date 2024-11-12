import React from "react";

function Sidebar({ sidebar }) {
  return (
    <aside className="bg-gray-900 text-white p-6 w-full md:w-2/5 space-y-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-orange-400 mb-4">
        {sidebar.title}
      </h2>
      <ul className="space-y-8">
        {sidebar.articles.map((article, index) => (
          <li key={index} className="space-y-4">
            <a href={article.url} className="hover:text-orange-400">
              <h3 className="text-lg font-bold">{article.title}</h3>
            </a>
            <p className="text-gray-400 text-sm md:text-base">
              {article.description}
            </p>
            {index < sidebar.articles.length - 1 && (
              <hr className="border-gray-700 mt-6" />
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
