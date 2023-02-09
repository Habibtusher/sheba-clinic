import React from "react";

const Review = ({ data }) => {
  const { _id, name, img, location, review } = data;
  return (
    <div className="card  shadow-xl">
      <div className="card-body">
        <p>{review}</p>
        <div className="card-actions ">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt=""/>
            </div>
          </div>
          <div>
            <h5 className="text-lg">{name}</h5>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
