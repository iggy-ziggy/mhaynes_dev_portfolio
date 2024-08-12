import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import TextBlock from "./components/TextBlock/TextBlock";
import Card from "./components/Card/Card";
import Image from "./components/Image/Image";
import IconGrid from "./components/IconGrid/IconGrid";
import Placeholder from "./assets/generic_placeholder_500x500.png";
import AboutMe from "./lib/AboutMe";
import "./App.css";

function App() {
  const icons = [1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <>
    {/* <IconGrid>{icons}</IconGrid> */}
      <div className="container">
        <Card
          title={`The Bag of Tricks`}
          src={Placeholder}
          alt="placeholder"
          btnName="Resume"
        >
          <IconGrid>{icons}</IconGrid>
          {/* <TextBlock>
            <AboutMe />
          </TextBlock> */}
        </Card>
      </div>
    </>
  );
}

export default App;
