import { Provider } from "react-redux";
import "./App.css";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Navbar from "./Navbar";
import { Properties } from "./Properties";
import { store } from "./redux/store";
import { Perks } from "./Perks";

function App() {
  return (
    <Provider store={store}>
      <div className="text-main-text w-fit min-h-full items-center bg-main">
        <Navbar />
        <Header />
        <div className="flex flex-col w-fit gap-10 md:px-0 lg:px-20 mt-10">
          <Perks />
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
