import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getBooking } from "../../../api/ApiConstant";
import { getData } from "../../../api/CommonService";
import { AuthContext } from "../../../context/AuthProvider";
import Loading from "../../Shared/Loading";

const MyAppointments = () => {
  const { user } = useContext(AuthContext);
  const url = `${getBooking}?email=${user.email}`;

  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", user.email],
    queryFn: async () => {
      const res = await getData(url);
      return res.data.data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h3 className="text-3xl mb-10">My Appointments</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment </th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{booking.paitent}</td>
                <td>{booking.treatment}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.slot}</td>
                <td>
                  {booking.price && !booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      {" "}
                      <button className="btn btn-primary btn-sm">Pay</button>
                    </Link>
                  )}
                  {booking.price && booking.paid && (
                    <span className="text-green-500">Paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
