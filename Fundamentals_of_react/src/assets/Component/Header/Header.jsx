import reactcore from "../../react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  //dynamic change od the data
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactcore} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}