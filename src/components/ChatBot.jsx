// src/components/ChatBot.jsx
import React, { useState } from 'react';
import { IoMdSend } from "react-icons/io";

const OPENAI_API_KEY="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"; 

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
          model: "gpt-4.1",
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
