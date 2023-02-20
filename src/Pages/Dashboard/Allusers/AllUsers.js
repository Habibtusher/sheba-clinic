import { async } from "@firebase/util";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { UPDATE_USERS, USERS } from "../../../api/ApiConstant";
import { getData, updateData } from "../../../api/CommonService";

const AllUsers = () => {
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await getData(USERS);
      return res.data.data;
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
            <th>Delet</th>
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
                <button className="btn btn-xs btn-danger">Delete</button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
