import SideBar from "../components/SideBar/SideBar";
import GenerateDocumentation from "../components/GenerateDocumentation/GenerateDocumentation";


const HomeBuddy = () => {
  return (
    <div className="box">
      <SideBar />
      <div className="right-box">
        <div className="home-box">
          <section>
            <GenerateDocumentation />
          </section>
        </div>
      </div>
      
    </div>
  );
};

export default HomeBuddy;
