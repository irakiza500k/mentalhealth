import { useState } from "react";
import { Link } from "react-router-dom";

function Chat() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 I'm your AI emotional support assistant. How are you feeling today?"
    }
  ]);


  const sendMessage = () => {

    if (!message.trim()) return;


    const userMessage = {
      sender: "user",
      text: message
    };


    setMessages((prev) => [...prev, userMessage]);


    let aiReply =
      "I understand how you feel. Remember you are not alone 💛";


    if (message.toLowerCase().includes("sad")) {

      aiReply =
        "I'm sorry you're feeling sad. Talking about your emotions can help 💛";

    }

    else if (message.toLowerCase().includes("stress")) {

      aiReply =
        "Stress can be overwhelming. Try breathing exercises and taking short breaks 🌿";

    }

    else if (message.toLowerCase().includes("depressed")) {

      aiReply =
        "You matter and your feelings are valid. Consider talking with someone you trust 💛";

    }

    else if (message.toLowerCase().includes("happy")) {

      aiReply =
        "That's wonderful 🌟 Keep spreading positivity and taking care of yourself.";

    }


    setTimeout(() => {

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: aiReply
        }
      ]);

    }, 1000);


    setMessage("");

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


      {/* CHAT AREA */}

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

      </div>


      {/* INPUT AREA */}

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