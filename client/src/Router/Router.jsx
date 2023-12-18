import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../Pages/Home/Home';
import CreateJob from '../Pages/Job/CreateJob';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/post-job",
                element: <CreateJob/>
            },
            {
                path: "/my-job",
                element: <MyJobs/>
            },
            
        ]
    },
]);

export default router