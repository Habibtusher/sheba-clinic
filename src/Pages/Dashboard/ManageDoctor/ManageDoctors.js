import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { DELETE_DOCTORS, GET_DOCTORS } from "../../../api/ApiConstant";
import { getData, remove } from "../../../api/CommonService";
import ConfirmationModal from "../../Shared/ConfirmationModal";
import Loading from "../../Shared/Loading";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState();
  const { data: doctors = [], isLoading,refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const data = await getData(GET_DOCTORS);
      return data.data.data;
    },
  });
  //   if (isLoading) {
  //     <Loading />;
  //   }
  const successModal = async () => {
    const res = await remove(`${DELETE_DOCTORS}/${deleteDoctor._id}`);
    if (res.data.status === "success") {
        toast.success(res.data.message);
        refetch()
    }
    else{
        toast.success(res.data.message)
    }
  };
  return (
    <div>
      <h3 className="text-3xl mb-10">Manage Doctors: {doctors?.length}</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avater</th>
              <th>Name</th>
              <th>Speciality</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={doctor.image} />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.speciality}</td>
                <td>{doctor.email}</td>
                <td>
                  <label
                    htmlFor="confirmation-modal"
                    className="btn  btn-sm btn-error text-white"
                    onClick={() => setDeleteDoctor(doctor)}
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && (
        <ConfirmationModal
          title={"Are you sure want to delete?"}
          message={`If you delete ${deleteDoctor.name}. It cann't be ubdo.`}
          cancel={() => setDeleteDoctor(null)}
          data={deleteDoctor}
          successModal={successModal}
          actionBntName={"Delete"}
          actionBntNameClsName ={"btn-error text-white"}
        />
      )}
    </div>
  );
};

export default ManageDoctors;
