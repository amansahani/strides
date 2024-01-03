import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { RouteContainer } from "./Routes";
import { Header } from "./components/NavigationBoard";
import { MainContainer } from "./pages/container";

function App() {
  return (
    <div className="h-screen w-screen">
      <Router>
        <div className="container mx-auto p-4 flex flex-col my-auto items-center">
          <div className="bg-white rounded-lg shadow-md w-11/12 lg:w-4/6 flex flex-col items-center">
            <h1 className="text-gray-900  lg:text-2xl p-3 font-bold">
              Admission Registration Form
            </h1>
            <Header />
            <RouteContainer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
