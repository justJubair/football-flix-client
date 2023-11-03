import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import MyTeam from "../pages/MyTeam/MyTeam";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Players from "../pages/Players/Players";

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
            },
            {
                path: "/players",
                element: <Players/>
            }
            
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    }
])
export default router;