import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { payPersons } from "../store/userSlice";

function UplataComponent() {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      brojKartice: "",
    },
    onSubmit: (values) => {
      dispatch(payPersons(values));
      setTimeout(() => navigation("/paid"), 1000);
      formik.resetForm();
    },
  });

  return (
    <div className="bg-yellow h-[100vh] flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-purple mb-3">UPLATNICA</h1>
      <div>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
          <div>
            <label className="font-bold">Id</label>
            <input
              type="number"
              name="id"
              value={formik.values.id}
              onChange={formik.handleChange}
              placeholder="insert id"
              className=" flex flex-col border-2 border-purple rounded-[8px] py-1"
            />
          </div>
          {/* firstName */}
          <div>
            <label className="font-bold">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              placeholder="firstname"
              className=" flex flex-col border-2 border-purple rounded-[8px] py-1"
            />
          </div>
          {/* lastname */}
          <div>
            <label className="font-bold">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              placeholder="lastname"
              className="flex flex-col border-2 border-purple rounded-[7px] py-1"
            />
          </div>
          <div>
            <label className="font-bold">Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="email"
              className="flex flex-col border-2 border-purple rounded-[7px] py-1"
            />
          </div>
          <div>
            <label className="font-bold">City</label>
            <input
              type="text"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              placeholder="city"
              className="flex flex-col border-2 border-purple rounded-[7px] py-1"
            />
          </div>
          <div>
            <label className="font-bold">Broj Kartice</label>
            <input
              type="text"
              name="brojKartice"
              value={formik.values.brojKartice}
              onChange={formik.handleChange}
              placeholder="brojKartice"
              className="flex flex-col border-2 border-purple rounded-[7px] py-1"
            />
          </div>

          <button
            type="submit"
            className="px-[16px] py-[8px] bg-purple rounded-full border-none text-white mb-[10px]"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default UplataComponent;
