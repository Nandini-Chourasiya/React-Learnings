import Examples from "./assets/Component/Examples.jsx";
import Header from "./assets/Component/Header/Header.jsx";
import CoreConcepts from "./assets/Component/CoreConcepts.jsx";
import TabButton from "./assets/Component/TabButton.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
      <CoreConcepts/>
      <Examples/>
      </main>
    </div>
  );
}

export default App;