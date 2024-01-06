import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/NavBar.js";
import Hero from "./components/Hero.js";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
    </>
  );
}

export default App;
