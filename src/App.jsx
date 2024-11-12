import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import MainFeature from "./components/MainFeature";
import Sidebar from "./components/Sidebar";
import Highlights from "./components/Highlights";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/data");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      }
    };

    fetchData();
  }, []);

  if (error) return <div>{error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center font-sans text-gray-900">
      <Navbar navItems={data.navItems} />
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-8 mt-8 px-4 md:px-0">
        <MainFeature mainArticle={data.mainArticle} />
        <Sidebar sidebar={data.sidebar} />
      </div>
      <Highlights articles={data.articles} />
    </div>
  );
}

export default App;
