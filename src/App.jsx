import About from "./components/About";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-offwhite">
      <Navbar />
      <Homepage />
      <About />
    </div>
  );
}
