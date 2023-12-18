import Banner from "../../components/Banner/Banner";

import { useEffect, useState } from "react";
const Home = () => {
  const [selectedCategory, setselectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json").then(res => res.json())
      .then(data => {
        setJobs(data);
      })
  }, [])


  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    // Filtering Input Items

    console.log(filteredItems)
    if (query) {
      filteredJobs = filteredItems;
    }

    // Applying selected filter
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

   
    //filteredJobs = filteredJobs.slice(startIndex, endIndex);
//
    //return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);


  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
    </div>
  )
}

export default Home;