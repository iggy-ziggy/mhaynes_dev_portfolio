import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import TextBlock from "./components/TextBlock/TextBlock";
import Card from "./components/Card/Card";
import Image from "./components/Image/Image";
import IconGrid from "./components/IconGrid/IconGrid";
import Footer from "./components/Footer/Footer";
import Placeholder from "./assets/generic_placeholder_500x500.png";
import HomePage from "./pages/HomePage/HomePage";
import icon1 from "./assets/generic_placeholder_500x500.png";
import icon2 from "./assets/generic_placeholder_500x500.png";
import icon3 from "./assets/generic_placeholder_500x500.png";
import icon4 from "./assets/generic_placeholder_500x500.png";
import icon5 from "./assets/generic_placeholder_500x500.png";
import AboutMe from "./lib/AboutMe";
import "./App.css";

function App() {
  const techIcons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const icons = [icon1, icon2, icon3];
  return (
    <>
      <div className="container">
        <HomePage />
      </div>

      {/* <IconGrid>{icons}</IconGrid> */}
      {/* <div className="container">
        <Card
          title={`The Bag of Tricks`}
          src={Placeholder}
          alt="placeholder"
          btnName="Resume"
        >
          <IconGrid>{techIcons}</IconGrid>
          <TextBlock>
            <AboutMe />
          </TextBlock>
        </Card>
      </div>
      <Footer>
      {icons}
    </Footer> */}
    </>
  );
}

export default App;
