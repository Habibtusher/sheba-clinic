import { createBrowserRouter } from "react-router-dom";
import { BOOKING_BYID } from "../../api/ApiConstant";
import { getData } from "../../api/CommonService";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import About from "../../Pages/About/About";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/Allusers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctor/ManageDoctors";
import MyAppointments from "../../Pages/Dashboard/MyAppointments/MyAppointments";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import AdminRoute from "../../Pages/Shared/AdminRoute";
import Errorpage from "../../Pages/Shared/Errorpage";
import PrivateRoute from "../../Pages/Shared/PrivateRoute";
import Signup from "../../Pages/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <Errorpage/>,
    children: [
      {
        path: "/dashboard",
        element: <MyAppointments />,
      },
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            {" "}
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-doctor",
        element: (
          <AdminRoute>
            {" "}
            <AddDoctor />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-doctor",
        element: (
          <AdminRoute>
            {" "}
            <ManageDoctors />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader:({params}) =>  getData(`${BOOKING_BYID}/${params.id}`)
      },
    ],
  },
]);
export default router;
