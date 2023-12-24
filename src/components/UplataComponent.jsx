import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function UplataComponent() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      brojKartice: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("filed is required"),
      lastName: Yup.string().required("filed is required"),
      email: Yup.string().required("filed is required"),
      city: Yup.string().required("filed is required"),
      brojKartice: Yup.number().required("filed is required"),
    }),
    onSubmit: (values) => {
      console.log(values);

      formik.resetForm();
    },
  });

  const showError = (name) =>
    formik.errors[name] && formik.touched[name] && formik.errors[name];

  return (
    <div className="container mx-auto my-auto bg-gray-700 h-[100vh] flex flex-col items-center justify-center">
      <h1 className="text-center text-purple mb-[30px] text-3xl">UPLATNICA</h1>
      <div>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label>
              First Name:{" "}
              <span className="text-[14px] text-red-600">
                {showError("firstName")}
              </span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              placeholder="firstname"
              className="p-[7px] rounded-lg border-2 border-purple bg-purple-900 text-white placeholder:text-[#ddd]"
            />
          </div>
          <div className="flex flex-col">
            <label>
              Last Name:{" "}
              <span className="text-[14px] text-red-600">
                {showError("lastName")}
              </span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              placeholder="lasttname"
              className="p-[7px] rounded-lg border-2 border-purple bg-purple-900 text-white placeholder:text-[#ddd]"
            />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="email"
              className="p-[7px] rounded-lg border-2 border-purple bg-purple-900 text-white placeholder:text-[#ddd]"
            />
          </div>

          <div className="flex flex-col">
            <label> City</label>
            <input
              type="text"
              name=" city"
              value={formik.values.city}
              onChange={formik.handleChange}
              placeholder=" city"
              className="p-[7px] rounded-lg border-2 border-purple bg-purple-900 text-white placeholder:text-[#ddd]"
            />
          </div>
          <div className="flex flex-col">
            <label>Broj Kartice</label>
            <input
              type="text"
              name="brojKartice"
              value={formik.values.brojKartice}
              onChange={formik.handleChange}
              placeholder=" brojKartice"
              className="p-[7px] rounded-lg border-2 border-purple bg-purple-900 text-white placeholder:text-[#ddd]"
            />
          </div>
          <button
            type="submit"
            className="px-[16px] py-[8px]
             bg-akvacolor rounded-full
             text-white"
          >
            Pay Now
          </button>
          <button
            type="submit"
            className="px-[16px] py-[8px]
             bg-yellow rounded-full
             text-black"
          >
            All Users
          </button>
        </form>
      </div>
    </div>
  );
}

export default UplataComponent;
