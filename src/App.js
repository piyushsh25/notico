import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/LandingPage/LandingPage";
import { Notification } from "./components/Notification/Notification";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/notification" element={<Notification/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
