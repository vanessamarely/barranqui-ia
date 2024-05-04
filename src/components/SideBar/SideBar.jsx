import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <>
      <div className="sidebar-box">
        <div className="image-container">
          <img src="buddy-writer.svg" alt="Buddy Writer" />
        </div>
        <ul className="list-options">
          <li>
            <NavLink to="/text" className="list-options-item">
              TextPrompt
            </NavLink>
          </li>
          <li>
            <NavLink className="list-options-item" to="/chat">
              ChatPage
            </NavLink>
          </li>
          <li>
            <NavLink className="list-options-item" to="/">
              Buddy
            </NavLink>
          </li>
          <li>
            <NavLink className="list-options-item" to="/story">
              Story
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
