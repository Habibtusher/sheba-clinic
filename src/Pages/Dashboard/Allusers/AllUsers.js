import { async } from "@firebase/util";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { DELETE_USER, UPDATE_USERS, USERS } from "../../../api/ApiConstant";
import { getData, remove, updateData } from "../../../api/CommonService";
import ConfirmationModal from "../../Shared/ConfirmationModal";

const AllUsers = () => {
  const [deleteUser,setDeleteUser] = useState(null)
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await getData(USERS);
      return res?.data?.data;
    },
  });
  useEffect(() => {}, []);

  const handleAdmin = async (id) => {
    const res = await updateData(`${UPDATE_USERS}/${id}`);
    if (res.data.data.modifiedCount > 0) {
      toast.success(res.data.message);
      refetch();
    }
  };
  const successModal = async () => {
    const res = await remove(`${DELETE_USER}/${deleteUser._id}`);
    if (res.data.status === "success") {
        toast.success(res.data.message);
        refetch()
    }
    else{
        toast.success(res.data.message)
    }
  };
  return (
    <div >
       <h3 className="text-3xl mb-10">All Users</h3>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.role !== "admin" && (
                  <button
                    onClick={() => handleAdmin(user._id)}
                    className="btn btn-xs btn-primary"
                  >
                    Make Admin
                  </button>
                )}
              </td>
              <td>
                {" "}
                <label
                    htmlFor="confirmation-modal"
                    className="btn  btn-sm btn-error text-white"
                    onClick={() => setDeleteUser(user)}
                  >
                    Delete
                  </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {deleteUser && (
        <ConfirmationModal
          title={"Are you sure want to delete?"}
          message={`If you delete ${deleteUser.name}. It cann't be ubdo.`}
          cancel={() => setDeleteUser(null)}
          data={deleteUser}
          successModal={successModal}
          actionBntName={"Delete"}
          actionBntNameClsName ={"btn-error text-white"}
        />
      )}
    </div>
  );
};

export default AllUsers;
