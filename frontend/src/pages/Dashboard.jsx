import { Link, useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));


  const logout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");

  };


  return (

    <div className="min-h-screen bg-black text-white p-6 md:p-10">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-5xl font-bold">

            Welcome {user?.name}

          </h1>

          <p className="text-gray-400 mt-2">

            Mental Health Support Dashboard

          </p>

        </div>


        <button
          onClick={logout}
          className="
            bg-red-600
            px-6
            py-3
            rounded-xl
            font-bold
          "
        >

          Logout

        </button>

      </div>


      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
        mt-16
      ">


        <Link
          to="/chat"
          className="
            bg-gradient-to-r
            from-yellow-500
            to-orange-500
            p-8
            rounded-3xl
            hover:scale-105
            transition-all
          "
        >

          <h2 className="text-3xl font-bold mb-5">

            AI Emotional Support

          </h2>

          <p>

            Chat with intelligent emotional support AI.

          </p>

        </Link>


        <Link
          to="/appointments"
          className="
            bg-gradient-to-r
            from-pink-600
            to-red-600
            p-8
            rounded-3xl
            hover:scale-105
            transition-all
          "
        >

          <h2 className="text-3xl font-bold mb-5">

            Counseling Appointments

          </h2>

          <p>

            Book and manage counseling sessions.

          </p>

        </Link>


        <Link
          to="/forums"
          className="
            bg-gradient-to-r
            from-purple-700
            to-indigo-700
            p-8
            rounded-3xl
            hover:scale-105
            transition-all
          "
        >

          <h2 className="text-3xl font-bold mb-5">

            Youth Support Forums

          </h2>

          <p>

            Join supportive community discussions.

          </p>

        </Link>

      </div>

    </div>

  );
}

export default Dashboard;