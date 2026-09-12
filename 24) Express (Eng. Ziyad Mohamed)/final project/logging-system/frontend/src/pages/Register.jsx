import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";

export default function Register() {
  return (
    <AuthLayout title="Create Account">
      <form className="space-y-4">
        <Input label="Name" type="text" placeholder="Enter name" />
        <Input label="Email" type="email" placeholder="Enter email" />
        <Input label="Password" type="password" placeholder="Enter password" />

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
          Register
        </button>

    <p className="text-center text-sm">
      Already have an account?{" "}
      <span
        className="text-blue-600 cursor-pointer"
        onClick={() => navigate("/login")}
      >
        Login
      </span>
    </p>
      </form>
    </AuthLayout>
  );
}