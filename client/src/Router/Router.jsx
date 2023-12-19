import React from 'react'

import {createBrowserRouter,} from "react-router-dom";
import App from '../App';
import Home from '../Pages/Home/Home';
import MyJobs from '../Pages/Jobs/Jobs';
import Salary from '../Pages/Salary/Salary';
import CreateJob from '../Pages/JobManagement/CreateJob';
import UpdateJob from '../Pages/JobManagement/UpdateJob';
import JobDetails from '../Pages/JobDetails/JobDetails';
import Login from '../Pages/Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/my-job",
            element: <PrivateRoute><MyJobs/></PrivateRoute>
        },
        {
            path: "/salary",
            element: <Salary/>
        },
        {
          path: "/post-job",
          element: <CreateJob/>
        },
        {
          path: "edit-job/:id",
          element: <UpdateJob/>,
          loader: ({params}) => fetch(`http://localhost:5000/all-jobs/${params.id}`)
        },
        {
          path:"/jobs/:id",
          element: <JobDetails/>,
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>
    }
  ]);

  export default router;