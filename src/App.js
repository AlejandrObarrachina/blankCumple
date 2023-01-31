import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MainPage from "./components/MainPage";
import FinalPage from "./components/FinalPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/gift" element={<FinalPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
