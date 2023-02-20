import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { ADD_DOCTORS, GET_SPECIALITY } from "../../../api/ApiConstant";
import { getData,postData } from "../../../api/CommonService";
import Loading from "../../Shared/Loading";

const AddDoctor = () => {
  const imagebbKey = process.env.REACT_APP_IMAGE_BB;
  const { data: specialites = [], isLoading } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const data = await getData(GET_SPECIALITY);
      return data.data.data;
    },
  });
const navigate= useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddDoctor = async (data) => {
    const image = data.img[0];
    const formdata = new FormData();
    formdata.append("image", image);
    const url = ` https://api.imgbb.com/1/upload?expiration=600&key=${imagebbKey}`;
    fetch(url, {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log("🚀 ~ imgData", imgData.data.url);

          const newDoc = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            image: imgData.data.url,
          };
          addDoctors(newDoc);
        }
      });
  };
  if (isLoading) {
    <Loading />;
  }
  const addDoctors = async (data) => {
    const res = await postData(ADD_DOCTORS, data);
    if(res.data.status === 'success') {
      toast.success(res.data.message)
      navigate("/")
    }
  };
  return (
    <div className="flex justify-center ">
      <div className="w-96 p-7 shadow-xl  ">
        <h3 className="text-3xl mb-10">Add a new doctor</h3>

        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="mt-2 text-red-600" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full "
              {...register("email", { required: "Email Address is required" })}
            />
            {errors.email && (
              <p className="mt-2 text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Speciality</span>
            </label>
            <select
              {...register("speciality", {
                required: "Speciality is required",
              })}
              className="select select-bordered w-full max-w-xs"
            >
              {specialites?.map((speciality) => (
                <option key={speciality._id} value={speciality.name}>
                  {speciality.name}
                </option>
              ))}
            </select>
            {errors.speciality && (
              <p className="mt-2 text-red-600" role="alert">
                {errors.speciality?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full "
              {...register("img", { required: "Img is required" })}
            />
            {errors.img && (
              <p className="mt-2 text-red-600" role="alert">
                {errors.img?.message}
              </p>
            )}
          </div>
          <input
            className="btn btn-accent w-full mt-5"
            type="submit"
            value="Add Doctor"
          />
          {/* {signupError && <p className="mt-2 text-red-600">{signupError}</p>} */}
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
