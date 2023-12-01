import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Appointment from "../pages/appointment/Appointment";
import Signup from "../pages/signup/Signup";
import RequireAuth from "../pages/login/RequireAuth";
import Dashboard from "../layouts/Dashboard";
import MyAppointments from "../pages/dashboard/MyAppointments";
import MyReview from "../pages/dashboard/MyReview";
import Users from "../pages/dashboard/Users";
import RequireAdmin from "../pages/login/RequireAdmin";
import AddDoctor from "../pages/dashboard/AddDoctor";
import ManageDoctors from "../pages/dashboard/ManageDoctors";
import Payment from "../pages/dashboard/Payment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/appointment',
                element: <RequireAuth><Appointment /></RequireAuth>
            },
            {
                path: '/dashboard',
                element: <RequireAuth><Dashboard /></RequireAuth>,
                children: [
                    {
                        path: '/dashboard',
                        element: <MyAppointments />
                    },
                    {
                        path: 'review',
                        element: <MyReview />
                    },
                    {
                        path: 'payment/:id',
                        element: <Payment />
                    },
                    {
                        path: 'users',
                        element: <RequireAdmin><Users /></RequireAdmin>
                    },
                    {
                        path: 'addDoctor',
                        element: <RequireAdmin><AddDoctor /></RequireAdmin>
                    },
                    {
                        path: 'manageDoctor',
                        element: <RequireAdmin><ManageDoctors /></RequireAdmin>
                    },
                ]
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    }
]);

export default router;