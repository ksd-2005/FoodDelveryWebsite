import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import Restaurants from "./components/Restuarant";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router"
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
 const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
          {
            path:"/",
            element:<Body />
          },
          {
            path:"/about",
            element:<AboutUs />
        },
        {
          path:"/contact",
          element: <ContactUs />
        },
        {
          path:"/restaurant/:id",
          element:<Restaurants />
        }
        ],
        errorElement:<Error />
    },

 ])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter}/>);
