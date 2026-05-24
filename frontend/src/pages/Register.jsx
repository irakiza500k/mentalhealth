import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import API from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
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
        "/auth/register",
        formData
      );

      setMessage(response.data.message);

      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (error) {

      setMessage(
        error.response?.data?.message ||
        "Registration failed"
      );

    }

  };

  return (

    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-black via-purple-950 to-black text-white">

      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl w-[400px] shadow-2xl">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Register
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
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-gray-800 outline-none"
            required
          />

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
            className="w-full bg-pink-600 p-4 rounded-lg hover:bg-pink-700 transition"
          >
            Register
          </button>

        </form>

        <p className="mt-6 text-center text-gray-300">

          Already have an account?

          <Link
            to="/login"
            className="text-pink-400 ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  );
}

export default Register;