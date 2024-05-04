import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Loading from "../Loading/Loading";
import "./Chat.style.css";
import avatar from "./../../assets/avatar.svg";

import {
  MODEL_NAME,
  API_KEY,
  generationConfig,
  safetySettings,
} from "./../../utils/variables";
console.log(API_KEY);
const Chat = () => {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const [message, setMessage] = useState(
    "Hello Javascript expert! I am a student and I am learning about Javascript, could you please help me to learn some concepts?"
  );

  const model = genAI.getGenerativeModel({
    model: MODEL_NAME,
    generationConfig,
    safetySettings,
  });

  const chat = model.startChat({
    history: [],
  });

  const addMessageToHistory = (role, message) => {
    setChatHistory((prevHistory) => [...prevHistory, { role, parts: message }]);
  };

  const fetchData = async () => {
    setLoading(true);
    addMessageToHistory("user", message);
    const result = await chat.sendMessage(`
    According to the prompt, I will provide you with the following information requested for Javascript language: 
    ${message}`);
    const response = result.response;

    const text = response.text();
    addMessageToHistory(
      "model",
      text
        .replace(/\n/g, "<br />")
        .replace(/"/g, "")
        .replace(/\*([^*]+)\*/g, "<h3>$1</h3>")
    );
    setMessage("");
    setLoading(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetchData();
  };

  const handleSetMessage = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="container">
      <h1>Gemini AI Chat JS</h1>
      <p>
        Hello! I am a javascript expert and I invited you to chat with me to
        learn!
      </p>

      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="chat-container">
            {chatHistory &&
              chatHistory?.map(({ parts, role }, index) => (
                <div key={index} className={`chat-response ${role}`}>
                  <div className="role">
                    {role === "user" ? <h2>User</h2> : <h2>Model:</h2>}

                    <img src={avatar} width="100" alt="avatar" />
                  </div>
                  <div
                    className="chat-message"
                    dangerouslySetInnerHTML={{ __html: parts }}
                  />
                </div>
              ))}
          </div>
        </>
      )}
      <form className="chat-form" onSubmit={handleSubmit}>
        <textarea
          className="chat-form-text "
          value={message}
          onChange={handleSetMessage}
          placeholder="Enter your prompt here..."
        />
        <button className="chat-form-button" type="submit">
          Generate Text
        </button>
      </form>
    </div>
  );
};

export default Chat;
