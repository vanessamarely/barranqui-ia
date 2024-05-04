import SideBar from "../components/SideBar/SideBar";
import Story from "../components/Story/Story";

const StoryPage = () => {
  return (
    <div className="box">
      <SideBar />
      <div className="right-box">
        <div className="home-box">
          <section>
            <Story />
          </section>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
