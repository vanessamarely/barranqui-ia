import SideBar from "../components/SideBar/SideBar";
import TextPrompt from "../components/TextPrompt/TextPrompt";

const TextPromptPage = () => {
  return (
    <div className="box">
      <SideBar />
      <div className="right-box">
        <div className="home-box">
          <h1> TextPrompt!</h1>
          <section>
            <TextPrompt />
          </section>
        </div>
      </div>
    </div>
  );
};

export default TextPromptPage;
