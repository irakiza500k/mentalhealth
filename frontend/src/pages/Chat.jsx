import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Chat() {

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 I'm your AI emotional support assistant. How are you feeling today?"
    }
  ]);


  const sendMessage = async () => {

    if (!message.trim()) return;


    const userMessage = {
      sender: "user",
      text: message
    };


    setMessages((prev) => [...prev, userMessage]);

    setMessage("");

    setLoading(true);


    try {

      const response = await axios.post(
        "http://localhost:8000/api/ai/chat",
        {
          message
        }
      );


      const aiMessage = {
        sender: "bot",
        text: response.data.reply
      };


      setMessages((prev) => [...prev, aiMessage]);

    }

    catch (error) {

      console.log(error);

    }

    finally {

      setLoading(false);

    }

  };


  return (

    <div className="min-h-screen bg-black text-white flex flex-col">


      {/* HEADER */}

      <div className="
        bg-[#111111]
        border-b
        border-yellow-500/20
        p-5
        flex
        justify-between
        items-center
      ">

        <h1 className="text-3xl font-bold text-yellow-400">

          AI Emotional Support

        </h1>


        <Link
          to="/dashboard"
          className="
            border
            border-yellow-500
            text-yellow-400
            px-5
            py-2
            rounded-xl
            hover:bg-yellow-500
            hover:text-black
            transition-all
          "
        >

          Back

        </Link>

      </div>


      {/* CHAT */}

      <div className="
        flex-1
        overflow-y-auto
        p-6
        space-y-5
      ">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`max-w-[80%] md:max-w-[60%] p-4 rounded-2xl text-lg ${
              msg.sender === "user"
                ? "ml-auto bg-yellow-500 text-black"
                : "bg-[#1a1a1a] border border-yellow-500/20"
            }`}
          >

            {msg.text}

          </div>

        ))}


        {loading && (

          <div className="
            bg-[#1a1a1a]
            border
            border-yellow-500/20
            p-4
            rounded-2xl
            w-fit
          ">

            AI is typing...

          </div>

        )}

      </div>


      {/* INPUT */}

      <div className="
        border-t
        border-yellow-500/20
        p-5
        flex
        gap-4
      ">

        <input
          type="text"
          placeholder="Type how you feel..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {

            if (e.key === "Enter") {

              sendMessage();

            }

          }}
          className="
            flex-1
            bg-[#111111]
            border
            border-yellow-500/20
            rounded-xl
            p-4
            outline-none
            text-white
            text-lg
          "
        />


        <button
          onClick={sendMessage}
          className="
            bg-yellow-500
            text-black
            px-8
            rounded-xl
            font-bold
            text-lg
            hover:scale-105
            transition-all
          "
        >

          Send

        </button>

      </div>

    </div>

  );
}

export default Chat;