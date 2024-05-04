import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

import "./TextPrompt.css";

const apiKey = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const TextPrompt = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await model.generateContent(output);
    const response = await result.response;
    console.log(response.text());
    setOutput(response.text());
  };

  return (
    <>
      <div>
        <textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Enter your prompt here..."
        />
      </div>
      <button className="chat-form-button" type="button" onClick={handleSubmit}>
        Generar
      </button>
      <div className="response">{output && <p>{output}</p>}</div>
    </>
  );
};

export default TextPrompt;
