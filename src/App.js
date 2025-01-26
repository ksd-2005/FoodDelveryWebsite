import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
//  const appRouter=createBrowserRouter([
//     {
//         path:"/",
//         element:<AppLayout />
//     },
//     {
//         path:"/about",
//         element:<AboutUs />
//     }
//  ])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
