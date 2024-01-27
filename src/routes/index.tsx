import { createBrowserRouter } from "react-router-dom";

import UserProfile from "../pages/UserProfile";
import Hero from "../pages/Hero";
import NotFoundPage from "../pages/NotFoundPage";

export const routes = createBrowserRouter([
        {
            path: "/",
            element: <Hero />,
        },
        {
            path: "/user/:id",
            element: <UserProfile />
        },
        {
            path: "*",
            element: <NotFoundPage />
        }
] , {basename : '/user-directory'});