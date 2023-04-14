import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Login from "./Components/Home/Login";
import Home from "./Components/Home/Home";
import "tailwindcss/tailwind.css";
import History from "./Components/Home/History";
import Orders from "./Components/Home/Orders";
import NotFound from "./Components/Home/NotFound";
import Profile from "./Components/Home/Profile/Profile";
import UpdateProfile from "./Components/Home/Profile/UpdateProfile";
import FoodDetails from "./Components/Home/Order/FoodDetails";
import ProfileSidebar from "./Components/Home/Profile/ProfileSidebar";
import Offers from "./Components/Home/Profile/Offers";
import Security from "./Components/Home/Profile/Security";
import Cart from "./Components/Home/Order/Cart";
import Delivery from "./Components/Home/Order/Delivery";
import Payment from "./Components/Home/Order/Payment";
import AllFood from "./Components/Home/Order/AllFood";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "login",
      element: <Login />,
    },
    // home page links
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/history",
      element: <History />,
    },
    {
      path: "/food",
      element: <FoodDetails />,
    },
    {
      path: "/allfood",
      element: <AllFood />,
    },

    {
      path: "/profile",
      element: <Profile />,
    },

    // home page links end'
    //profile sec links

    {
      path: "/profileSidebar",
      element: <ProfileSidebar />,
    },
    {
      path: "/updateProfile",
      element: <UpdateProfile />,
    },
    {
      path: "/offer",
      element: <Offers />,
    },
    {
      path: "/security",
      element: <Security />,
    },
    {
      path: "/orders",
      element: <Orders />,
    },
    //payment pages
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/delivery",
      element: <Delivery />,
    },
    {
      path: "/payment",
      element: <Payment />,
    },
//not found page
    {
      path: "notfound",
      element: <NotFound />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
