import React from "react";
import Review from "./Review";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      img: people1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
    },
    {
      _id: 2,
      name: "Winson Herry",
      img: people2,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
    },
    {
      _id: 3,
      name: "Winson Herry",
      img: people3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
    },
  ];
  return (
    <section className="p-5">
      <h2 className="text-xl ml-4 text-secondary font-bold">Testimonial</h2>
      <h2 className="ml-4 text-2xl">What Our Patients Says</h2>
      <div className="grid lg:grid-cols-3 gap-2">
        {reviews.map((review) => (
          <Review key={review.id} data={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
