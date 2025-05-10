// src/components/ChatBot.jsx
import React, { useState } from 'react';
import { IoMdSend } from "react-icons/io";
const OPENAI_API_KEY = "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"; // ⚠️ For testing ONLY

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    // e.preventDefault();
    const userMessage = input.trim();
    if (!userMessage) return;

    const newMessages = [...messages, { type: 'user', text: userMessage }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userMessage }],
        }),
      });

      const data = await response.json();
      const botMessage = data.choices?.[0]?.message?.content || "Sorry, I had trouble understanding.";

      setMessages(prev => [...prev, { type: 'bot', text: botMessage }]);
    } catch (error) {
      console.error("OpenAI error:", error);
      setMessages(prev => [...prev, { type: 'bot', text: "An error occurred. Please try again later." }]);
    }

    setLoading(false);
  };

  return (
    <div className=" chatbox  bg-white p-4 max-w-md mx-auto  rounded  transition delay-150   cursor-pointer">
      <h2 className="text-lg font-semibold mb-2">SoftSell ChatBot</h2>
      <div className="h-60 overflow-y-auto bg-gray-100 p-2 mb-2 rounded">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.type === 'user' ? "text-right" : "text-left"}>
            <p className={`inline-block px-3 py-1 rounded ${msg.type === 'user' ? 'bg-blue-200' : 'bg-gray-300'}`}>
              {msg.text}
            </p>
          </div>
        ))}
        {loading && (
          <div className="text-left">
            <p className="inline-block px-3 py-1 rounded bg-gray-300 animate-pulse">Typing...</p>
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 p-2 border-none rounded"
          placeholder="Type a message..."
          disabled={loading}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          <IoMdSend />
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
