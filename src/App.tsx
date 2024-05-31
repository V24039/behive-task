import "./App.css";
import { Header } from "./Header";
import Navbar from "./Navbar";
import { Properties } from "./Properties";

function App() {
  return (
    <div className="text-main-text w-full h-full bg-main">
      <Navbar />
      <Header/>
      <Properties/>
    </div>
  );
}

export default App;
