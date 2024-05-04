import { BrowserRouter, Route, Routes } from "react-router-dom";

import ChatPage from "./pages/ChatPage";
import HomeBuddy from "./pages/HomeBuddy";
import TextPromptPage from "./pages/TextPromptPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="text" element={<TextPromptPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="/" element={<HomeBuddy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
