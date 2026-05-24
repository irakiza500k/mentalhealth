import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import API from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post(
        "/auth/login",
        formData
      );

      // Save token
      localStorage.setItem(
        "token",
        response.data.token
      );

      // Save user
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      setMessage("Login successful");

      setTimeout(() => {

        navigate("/dashboard");

      }, 1000);

    } catch (error) {

      setMessage(
        error.response?.data?.message ||
        "Login failed"
      );

    }

  };

  return (

    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-black via-indigo-950 to-black text-white">

      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl w-[400px] shadow-2xl">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Login
        </h1>

        {
          message && (
            <p className="mb-4 text-center text-pink-400">
              {message}
            </p>
          )
        }

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-gray-800 outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-gray-800 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-purple-600 p-4 rounded-lg hover:bg-purple-700 transition"
          >
            Login
          </button>

        </form>

        <p className="mt-6 text-center text-gray-300">

          Don't have an account?

          <Link
            to="/register"
            className="text-purple-400 ml-2"
          >
            Register
          </Link>

        </p>

      </div>

    </div>

  );
}

export default Login;