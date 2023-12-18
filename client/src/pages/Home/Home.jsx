import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Jobs from "../Jobs/Jobs";


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
  // handlers for search and filtering
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };  
  
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    
  };
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
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

    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
   
  };

  const result = filteredData(jobs, selectedCategory, query);


  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div>
          <Jobs result={result}/>
      </div>
    </div>
  )
}

export default Home;