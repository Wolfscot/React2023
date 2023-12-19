import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../Pages/Home/Home';
import JobDetails from '../Pages/JobDetails/JobDetails';

import CreateJob from '../Pages/JobManagemet/CreateJob';
import MyJobs from '../Pages/JobManagemet/MyJobs';
import UpdateJob from '../Pages/JobManagemet/UpdateJob';
import Salary from "../Pages/Salary/Salary"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/post-job",
                element: <CreateJob />
            },
            {
                path: "edit-job/:id",
                element: <UpdateJob />,
                loader: ({ params }) => fetch(`http://localhost:5000/all-jobs/${params.id}`)
            },
            {
                path: "/my-job",
                element: <MyJobs />
            },
            {
                path: "/salary",
                element: <Salary />
            },
            {
                path: "/jobs/:id",
                element: <JobDetails />,
            }

        ]
    },
]);

export default router