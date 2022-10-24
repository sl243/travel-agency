import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Booking from "../components/Booking/Booking";
import ConfirmBook from "../components/ConfirmBook/ConfirmBook";
import Contact from "../components/Contact/Contact";
import Destination from "../components/Destination/Destination";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import News from "../components/News/News";
import Profile from "../components/Profile/Profile";
import Register from "../components/Register/Register";
import TermsCondition from "../components/TermsCondition/TermsCondition";
import Main from "../Main/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'news',
                element: <News></News>
            },
            {
                path: 'destination',
                element: <Destination></Destination>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'booking',
                element: <Booking></Booking>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'confirmbook',
                element: <PrivateRoute><ConfirmBook></ConfirmBook></PrivateRoute>
            },
            {
                path: 'terms',
                element: <TermsCondition></TermsCondition>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            }
        ]
    }
])