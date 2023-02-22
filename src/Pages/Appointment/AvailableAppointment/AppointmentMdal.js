import { format } from "date-fns";
import React, { useContext } from "react";
import { postData } from "../../../api/CommonService";
import { AuthContext } from "../../../context/AuthProvider";
import { postBooking } from "../../../api/ApiConstant";
import { toast } from "react-hot-toast";
const AppointmentMdal = ({ teatment, selected, setTreatment, refetch }) => {
  const { name, slots,price } = teatment;
  const date = format(selected, "PP");
  const { user } = useContext(AuthContext);

  const handleBooking = async (e) => {
    e.preventDefault();
    const form = e.target;
    const pName = form.name.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      paitent: pName,
      email,
      slot,
      phone,
      treatment: name,
      price:price
    };

    const res = await postData(postBooking, booking);

    if (res.data.status === "success") {
      toast.success(res.data.message);
      setTreatment(null);
      refetch();
    }
    else{
      toast.error(res.data.message);
    }
    
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center p-3">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-6 mt-6"
          >
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered input-primary w-full"
            />
            <select name="slot" className="select select-primary  w-full ">
              {slots?.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input input-bordered input-primary w-full "
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input input-bordered input-primary w-full "
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered input-primary w-full "
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentMdal;
