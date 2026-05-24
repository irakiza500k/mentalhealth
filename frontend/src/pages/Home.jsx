import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="min-h-screen bg-black text-white relative overflow-hidden">


      {/* Background Glow */}

      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-yellow-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-orange-500/20 blur-[120px] rounded-full"></div>


      {/* Main Container */}

      <div className="max-w-7xl mx-auto px-6">


        {/* Navbar */}

        <nav className="flex items-center justify-between py-8">

          <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-400">

            MindCare

          </h1>

        </nav>


        {/* Hero Section */}

        <section className="
          flex
          flex-col
          items-center
          justify-center
          text-center
          pt-10
          md:pt-20
        ">

          <h1 className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-extrabold
            leading-tight
            max-w-4xl
          ">

            Digital Mental Health

            <br />

            <span className="text-yellow-400">

              & Counseling Platform

            </span>

          </h1>


          <p className="
            text-gray-300
            text-lg
            md:text-xl
            mt-8
            max-w-3xl
            leading-relaxed
          ">

            A secure and confidential platform offering anonymous counseling,
            AI emotional support, appointment booking,
            and youth support forums.

          </p>


          {/* Buttons */}

          <div className="
            flex
            flex-col
            sm:flex-row
            gap-5
            mt-10
          ">

            {/* Get Started */}

            <Link
              to="/register"
              className="
                border-2
                border-yellow-500
                text-yellow-400
                px-8
                py-4
                rounded-xl
                text-lg
                font-semibold
                transition-all
                duration-300
                hover:bg-yellow-500
                hover:text-black
                hover:scale-105
              "
            >
              Get Started
            </Link>


            {/* Login */}

            <Link
              to="/login"
              className="
                border-2
                border-yellow-500
                text-yellow-400
                px-8
                py-4
                rounded-xl
                text-lg
                font-semibold
                transition-all
                duration-300
                hover:bg-yellow-500
                hover:text-black
                hover:scale-105
              "
            >
              Login
            </Link>

          </div>

        </section>


        {/* Features */}

        <section className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          py-20
        ">


          {/* Card 1 */}

          <div className="
            bg-[#111111]
            border
            border-yellow-500/20
            rounded-3xl
            p-8
            transition-all
            duration-300
            hover:border-yellow-400
            hover:-translate-y-2
          ">

            <div className="text-5xl mb-5">

              🧠

            </div>

            <h2 className="
              text-2xl
              font-bold
              text-yellow-400
              mb-4
            ">

              Anonymous Counseling

            </h2>

            <p className="
              text-gray-300
              leading-relaxed
              text-lg
            ">

              Talk privately with professional counselors
              without revealing your identity.

            </p>

          </div>


          {/* Card 2 */}

          <div className="
            bg-[#111111]
            border
            border-yellow-500/20
            rounded-3xl
            p-8
            transition-all
            duration-300
            hover:border-yellow-400
            hover:-translate-y-2
          ">

            <div className="text-5xl mb-5">

              🤖

            </div>

            <h2 className="
              text-2xl
              font-bold
              text-yellow-400
              mb-4
            ">

              AI Emotional Support

            </h2>

            <p className="
              text-gray-300
              leading-relaxed
              text-lg
            ">

              Receive emotional guidance and wellness support anytime.

            </p>

          </div>


          {/* Card 3 */}

          <div className="
            bg-[#111111]
            border
            border-yellow-500/20
            rounded-3xl
            p-8
            transition-all
            duration-300
            hover:border-yellow-400
            hover:-translate-y-2
          ">

            <div className="text-5xl mb-5">

              💬

            </div>

            <h2 className="
              text-2xl
              font-bold
              text-yellow-400
              mb-4
            ">

              Youth Support Forums

            </h2>

            <p className="
              text-gray-300
              leading-relaxed
              text-lg
            ">

              Connect with supportive communities
              and safely share experiences.

            </p>

          </div>

        </section>

      </div>

    </div>

  );
}

export default Home;