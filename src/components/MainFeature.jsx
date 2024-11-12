import React from "react";
import mobeImage from "../assets/fonts/images/image-web-3-mobile.jpg";

function MainFeature({ mainArticle }) {
  return (
    <section className="flex flex-col w-full">
      {/* Mobile image */}
      <img
        src={mobeImage}
        alt={mainArticle.title}
        className="block md:hidden mb-8 w-full object-cover"
      />
      {/* Desktop image */}
      <img
        src={mainArticle.imageUrl}
        alt={mainArticle.title}
        className="hidden md:block mb-8 w-full object-cover"
      />
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 items-start">
        <h1 className="text-3xl md:text-6xl font-extrabold text-gray-900 mb-4 md:mb-0">
          {mainArticle.title}
        </h1>
        <div className="space-y-4 flex flex-col justify-start">
          <p className="text-gray-500 text-sm md:text-base">
            {mainArticle.description}
          </p>
          <a href={mainArticle.ctaButton.url}>
            <button className="px-6 py-2 text-white bg-red-500 hover:bg-black hover:text-white mt-4 w-full md:w-auto">
              {mainArticle.ctaButton.name}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default MainFeature;
