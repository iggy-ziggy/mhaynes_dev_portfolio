import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import TextBlock from "./components/TextBlock/TextBlock";
import Card from "./components/Card/Card";
import Image from "./components/Image/Image";
import Placeholder from "./assets/generic_placeholder_500x500.png";
import AboutMe from "./lib/AboutMe";
import "./App.css";

function App() {
  return (
    <>
      <Card
        title={`Hi. I'm Matt.`}
        src={Placeholder}
        alt="placeholder"
        btnName="Contact Me"
      >
        <TextBlock>
          <AboutMe />
        </TextBlock>
      </Card>
    </>
  );
}

export default App;
