import SideBar from "../components/SideBar/SideBar";
import Chat from "../components/Chat/Chat";

const ChatPage = () => {
  return (
    <div className="box">
      <SideBar />
      <div className="right-box">
        <div className="home-box">
          <section>
            <Chat />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
