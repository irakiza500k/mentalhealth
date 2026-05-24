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


      {/* HEADER */}

      <div className="
        flex
        flex-col
        md:flex-row
        justify-between
        items-start
        md:items-center
        gap-5
      ">

        <div>

          <h1 className="
            text-4xl
            md:text-6xl
            font-extrabold
          ">

            Welcome {user?.name}

          </h1>

          <p className="
            text-gray-400
            text-lg
            mt-3
          ">

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
            hover:bg-red-700
            transition-all
          "
        >

          Logout

        </button>

      </div>


      {/* CARDS */}

      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
        mt-14
      ">


        {/* AI CHAT */}

        <Link
          to="/chat"
          className="
            bg-gradient-to-r
            from-purple-700
            to-fuchsia-600
            p-8
            rounded-3xl
            hover:scale-105
            transition-all
            duration-300
            block
          "
        >

          <h2 className="
            text-3xl
            font-bold
            mb-5
          ">

            AI Emotional Support

          </h2>

          <p className="text-lg">

            Chat with AI emotional assistant.

          </p>

        </Link>


        {/* APPOINTMENTS */}

        <div
          className="
            bg-gradient-to-r
            from-pink-700
            to-red-600
            p-8
            rounded-3xl
            hover:scale-105
            transition-all
            duration-300
          "
        >

          <h2 className="
            text-3xl
            font-bold
            mb-5
          ">

            Counseling Appointments

          </h2>

          <p className="text-lg">

            Book and manage counseling sessions.

          </p>

        </div>


        {/* FORUMS */}

        <div
          className="
            bg-gradient-to-r
            from-indigo-700
            to-purple-600
            p-8
            rounded-3xl
            hover:scale-105
            transition-all
            duration-300
          "
        >

          <h2 className="
            text-3xl
            font-bold
            mb-5
          ">

            Youth Support Forums

          </h2>

          <p className="text-lg">

            Join supportive community discussions.

          </p>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;