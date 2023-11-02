import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import MyTeam from "../pages/MyTeam/MyTeam";
import Dashboard from "../pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/myTeam",
                element: <MyTeam/>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    }
])
export default router;