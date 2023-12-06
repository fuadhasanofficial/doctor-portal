import React from "react";
import pic from "../../../assets/images/treatment.png";

const Section = () => {
  return (
    <div className="lg:w-5/6 mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-xl mt-6 ">
        <figure>
          <img src={pic} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
