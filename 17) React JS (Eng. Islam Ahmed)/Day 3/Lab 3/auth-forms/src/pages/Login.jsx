import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";

const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Min 6 characters").required("Required"),
});

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    localStorage.setItem("user", JSON.stringify(values));
    navigate("/dashboard");
  };

  return (
    <div className="form-container">
      <h2>Login</h2>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>Email</label>
          <Field name="email" />
          <ErrorMessage name="email" component="div" className="error" />

          <label>Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" className="error" />

          <button type="submit">Login</button>
        </Form>
      </Formik>

      <p>
        No account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}