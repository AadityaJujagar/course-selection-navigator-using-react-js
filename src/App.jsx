import React, { useState, useEffect } from "react";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loader, setLoader] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  const fetchData = async () => {
    setLoader(true);
    try {
      const rawData = await fetch(apiUrl);
      const formattedData = await rawData.json();

      setCourses(formattedData.data);
    } catch (error) {
      toast.error("Something went wrong!");
    }
    setLoader(false);
  };

  // only while the course render
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          <Filter
            category={category}
            setCategory={setCategory}
            filterData={filterData}
          />
        </div>
        <div className="w-11/12 max-w-[1200px]  mx-auto flex justify-center items-center min-h-[50vh]">
          {loader ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
