import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const Schema = Yup.object({
    fName: Yup.string().required("First name is required"),
    lName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    password: Yup.string()
      .min(6, "Min 6 chars")
      .required("Password is Required"),
  });

  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: "",
      password: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="flex flex-col gap-2 mb-5">
        <label>First Name</label>
        <input
          type="text"
          name="fName"
          onChange={handleChange}
          value={values.fName}
          className="border-2 p-2"
        />
        {errors.fName && <p className="text-red-500"> {errors.fName}</p>}
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label>Last Name</label>
        <input
          type="text"
          name="lName"
          onChange={handleChange}
          value={values.lName}
          className="border-2 p-2"
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={values.email}
          className="border-2 p-2"
        />
        {errors.email && <p className="text-red-500"> {errors.email}</p>}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password}
          className="border-2 p-2"
        />
      </div>

      <button
        className="bg-black text-white rounded-md p-2"
        onClick={handleSubmit}
        type="button"
      >
        Signup
      </button>
    </div>
  );
};

export default Signup;
