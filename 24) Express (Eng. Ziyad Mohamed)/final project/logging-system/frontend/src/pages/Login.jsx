import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";

export default function Login() {
  return (
    <AuthLayout title="Login">
      <form className="space-y-4">
        <Input label="Email" type="email" placeholder="Enter email" />
        <Input label="Password" type="password" placeholder="Enter password" />

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
          Login
        </button>

        <p className="text-sm text-center text-gray-500">
          Don’t have an account?{" "}
          <span className="text-blue-600 cursor-pointer">Register</span>
        </p>
      </form>
    </AuthLayout>
  );
}