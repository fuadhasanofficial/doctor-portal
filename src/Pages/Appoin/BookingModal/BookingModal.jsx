import { format } from "date-fns";
import { te } from "date-fns/locale";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  const handleBooking = (e) => {
    e.preventDefault();
    const person = e.target.person.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const slot = e.target.slot.value;
    console.log(person, phone, email, slot);
    setTreatment(null);
  };
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="booking-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{name}</h3>
          <form onSubmit={handleBooking}>
            <div className="grid grid-cols-1 gap-2">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered  w-full "
                defaultValue={date}
                disabled
              />
              <select
                name="slot"
                className="select select-ghost w-full input-bordered "
              >
                {slots.map((slot, idx) => (
                  <option key={idx} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="person"
                placeholder="Full Name"
                className="input input-bordered  w-full "
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered  w-full "
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input input-bordered  w-full "
              />{" "}
              <br />
              <input className="w-full btn" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default BookingModal;
