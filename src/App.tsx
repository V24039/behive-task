import { Provider } from "react-redux";
import "./App.css";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Navbar from "./Navbar";
import { Properties } from "./Properties";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="text-main-text w-full min-h-full bg-main">
        <Navbar />
        <Header />
        <div className="flex flex-col gap-10 md:px-32 mt-10">
          <Properties />
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </Provider>
  );
}

export default App;
