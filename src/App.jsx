import { useState } from "react";
import Splash from "./components/Splash";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import IITProjects from "./components/IITProjects";
import Founders from "./components/Founders";
import Roadmap from "./components/Roadmap";
import Contact from "./components/Contact";

function App() {
  const [entered, setEntered] = useState(false);
  if (!entered) return <Splash onEnter={() => setEntered(true)} />;
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <IITProjects />
      <Founders />
      <Roadmap />
      <Contact />
    </div>
  );
}

export default App;