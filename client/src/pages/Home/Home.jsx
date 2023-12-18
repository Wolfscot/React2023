import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Jobs from "../Jobs/Jobs";
import Sidebar from "../../components/Sidebar/Sidebar";
import Newsletter from "../../components/Newsletter/Newsletter";

import { useEffect, useState } from "react";


const Home = () => {
  const [selectedCategory, setselectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json").then(res => res.json())
      .then(data => {
        setJobs(data);
        //setCurrentPage(1);
        setIsLoading(false);

      })
  }, [])


  const [query, setQuery] = useState("");
  // handlers for search and filtering
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setselectedCategory(event.target.value);

  };
  const handleClick = (event) => {
    setselectedCategory(event.target.value);
  };

  // pagination/
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  //  next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  //  prev page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    // Filtering Input Items


    //Applying input search field
    if (query) {
      filteredJobs = filteredItems;
    }

    // Applying selected filters 
    if (selected) {
      console.log((selected));

      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          salaryType,
          experienceLevel,
          maxPrice,
          postingDate,
          employmentType,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          postingDate === selected || parseInt(maxPrice) <= parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
      console.log(filteredJobs);
    }
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    return filteredJobs.map((data, i) => <Card key={i} data={data} />);

  };

  const result = filteredData(jobs, selectedCategory, query);


  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        <div className="col-span-2 bg-white p-4 rounded">

          {isLoading ? ( // Loading indicator
            <p className="font-medium">The positions are filtering...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
              <p>No data found.Search for Something Else</p>
            </>
          )}


          {/* pagination  */}

          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="hover:underline"
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="bg-white p-4 rounded">
          <Newsletter />
        </div>
      </div>
    </div>
  )
}

export default Home;