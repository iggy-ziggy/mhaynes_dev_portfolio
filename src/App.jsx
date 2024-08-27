import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import TextBlock from "./components/TextBlock/TextBlock";
import Card from "./components/Card/Card";
import Image from "./components/Image/Image";
import IconGrid from "./components/IconGrid/IconGrid";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Placeholder from "./assets/generic_placeholder_500x500.png";
import HomePage from "./pages/HomePage/HomePage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import icon1 from "./assets/generic_placeholder_500x500_purple.png";
import icon2 from "./assets/generic_placeholder_500x500_purple.png";
import icon3 from "./assets/generic_placeholder_500x500_purple.png";
import AboutMe from "./lib/AboutMe";
import "./App.css";

function App() {
  const icons = [icon1, icon2, icon3];
  return (
    <>
    <Nav />
      <div className="container">
        {/* <HomePage /> */}
        <SkillsPage />
        <Footer>
          {icons}
        </Footer>
      </div>
    </>
  );
}

export default App;
