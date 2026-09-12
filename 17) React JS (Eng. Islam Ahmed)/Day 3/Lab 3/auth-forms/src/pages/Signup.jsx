import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";

const SignupSchema = Yup.object({
  name: Yup.string().min(3, "Too short").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Min 6 characters").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
});

export default function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    localStorage.setItem("user", JSON.stringify(values));
    navigate("/dashboard");
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>Name</label>
          <Field name="name" />
          <ErrorMessage name="name" component="div" className="error" />

          <label>Email</label>
          <Field name="email" />
          <ErrorMessage name="email" component="div" className="error" />

          <label>Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" className="error" />

          <label>Confirm Password</label>
          <Field name="confirmPassword" type="password" />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="error"
          />

          <button type="submit">Signup</button>
        </Form>
      </Formik>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}