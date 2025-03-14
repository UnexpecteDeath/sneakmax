import { createHashRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/home_page/homepage";
import Layout from "./components/layout/layout";
import SneakersPage from "./pages/sneakers_page";
import Cart_page from "./pages/cart_page";
import PlacingAnOrder from "./pages/placing an order";


export const route =  createHashRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {index: true, element: <HomePage />},
            {path: "sneakers/:id", element: <SneakersPage />},
            {path: "cart", element: <Cart_page/>},
            {path: "order", element: <PlacingAnOrder/>},
            {path: '*', element: <Navigate to="/" /> }
        ]
    }
])