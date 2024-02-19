import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { UserContext } from "./utils/context/UserContext";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const user = {
      name: "Rajneesh Kumar",
    };
    setUserName(user.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
        {/* Outlet will be replaced the about or contact page , it will not show inside the html */}
      </div>
    </UserContext.Provider>
  );
};

const Grocery = lazy(() => import("./components/groceryStore/Grocery"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading..........</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurantmenu/:resId", element: <RestaurantMenu /> },
    ],

    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
