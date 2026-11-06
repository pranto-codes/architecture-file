import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Teams from "./components/Teams/Teams";
import Features from "./components/Features/Features";
import Facts from "./components/Facts/Facts";
import Sponsors from "./components/Sponsors/Sponsors";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Teams />
      <Features />
      <Facts />
      <Sponsors />
      <Footer />
    </>
  );
}

export default App;
