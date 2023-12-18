import React from 'react';
import Location from './JobFilters/Location';
import Salary from './JobFilters/Salary';
import PostingData from './JobFilters/PostingData';
import WorkExperience from './JobFilters/WorkExperience';
import EmploymentType from './JobFilters/EmploymentType';

const Sidebar = ({ handleChange, handleClick }) => {
  return (
    <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-2'>Filters</h3>
        <Location handleChange={handleChange}/>
        <Salary handleChange={handleChange} handleClick={handleClick}/>
        <PostingData handleChange={handleChange}/>
        <WorkExperience handleChange={handleChange}/>
        <EmploymentType handleChange={handleChange}/>
    </div>
  )
}

export default Sidebar