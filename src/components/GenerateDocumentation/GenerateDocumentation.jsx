import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useState } from "react";
import { promst } from "../../utils/prompts";

import {
  MODEL_NAME,
  API_KEY,
  generationConfig,
  safetySettings,
} from "./../../utils/variables";

import "./GenerateDocumentation.css";

const GenerateDocumentation = () => {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [selectedDocumentType, setSelectedDocumentType] = useState("");
  const [selectPromptMessage, setSelectPromptMessage] = useState(
    promst[0]?.message
  );
  const [message, setMessage] = useState("");
  const [savedtext, setSavedText] = useState("");


  const fetchData = async () => {
    if (!!selectedDocumentType) {
      const model = genAI.getGenerativeModel({
        model: MODEL_NAME,
        generationConfig,
        safetySettings,
      });

      console.log("selectedDocumentType--- ", selectedDocumentType);
      console.log("selectPromptMessage---- ", selectPromptMessage);

      const prompt = `
      Based on ${selectedDocumentType}. 
      Includind the following information: ${selectPromptMessage}.
      Could you please create a document that includes the following request: ${input}`;

      console.log("---- prompt --- ", prompt);
      const result = await model.generateContent(prompt);
      const response = await result.response;
      console.log(response);
      const text = response.text() || "No response";

      setApiData(text.replace(/\n/g, "<br />"));
      setSavedText(text);
      setLoading(false);
    } else {
      setMessage("Please select a document type");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchData();
  };

  const handleTextChange = (event) => {
    setInput(event.target.value);
  };

  const handleExport = () => {
    const file = new Blob([savedtext], { type: "text/plain" });
    const a = document.createElement("a");
    const url = URL.createObjectURL(file);
    a.href = url;
    a.download = "documentation.txt";
    document.body.appendChild(a);
    a.click();
  };

  const handleDocumentType = (event) => {
    setSelectedDocumentType(event.target.value);
  };

  useEffect(() => {
    {
      const selected = promst.find(
        (item) => item.name === selectedDocumentType
      );
      setSelectPromptMessage(selected?.prompt);
    }
  }, [selectedDocumentType]);

  const handleSave = () => {
    setMessage("Saved to User Manuals");
  };

  return (
    <div className="generate-documentation">
      <h2>Generate Documentation</h2>
      <p>Welcome! we are going to create together the documentation</p>
      <div className="generate-documentation__container-buttons">
        <button type="button" className="generate-documentation__button">
          <img src="upload-solid.svg" alt="" />
          Update File
        </button>
        <button type="button" className="generate-documentation__button">
          <img src="link-solid.svg" alt="" />
          Connect with your repository
        </button>
      </div>
      <div className="generate-documentation_container">
        <label htmlFor="documentType">Document Type</label>
        <select
          name="documentType"
          id="documentType"
          className="generate-documentation_select"
          onChange={handleDocumentType}
        >
          <option value="">Selected a Document Type</option>
          {promst?.map((item) => (
            <option key={item?.id} value={item?.name}>
              {item?.name}
            </option>
          ))}
        </select>
      </div>
      <div className="generate-documentation__container-textarea">
        <textarea
          placeholder="Generate a user manual based on the connected project ..."
          id="w3review"
          name="w3review"
          rows="4"
          cols="50"
          onChange={handleTextChange}
        ></textarea>
        <div className="generate-documentation__container-buttons">
          <button
            onClick={handleSubmit}
            className="generate-documentation__button"
          >
            Generate
          </button>

          <div className="generate-documentation__container-buttons">
            <button
              onClick={handleSave}
              type="button"
              className="generate-documentation__button"
            >
              <img src="floppy-disk-solid.svg" alt="" />
              Save to User Manuals
            </button>
            <button
              onClick={handleExport}
              type="button"
              className="generate-documentation__button"
            >
              <img src="file-export-solid.svg" alt="" />
              Export
            </button>
          </div>
        </div>
        <div className="model-response">
          {!loading && (
            <>
              <div
                className="text-align-left"
                dangerouslySetInnerHTML={{
                  __html: apiData,
                }}
              />
            </>
          )}
          {loading && <p>Loading...</p>}
        </div>
        <div className="generate-documentation__message_container">
          {message && (
            <p className="generate-documentation__message">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerateDocumentation;
