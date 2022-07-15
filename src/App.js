import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { RedirectAuth } from "./Hooks/Auth/RedirectAuth";
import { RequiresAuth } from "./Hooks/Auth/RequiresAuth";
import { LandingPage } from "./Pages/LandingPage";
import { Login } from "./Pages/Login";
import { NotificationPage } from "./Pages/NotificationPage";
import { Signup } from "./Pages/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<RequiresAuth />}>
            <Route path="/notification" element={<NotificationPage />} />
          </Route>
          <Route element={<RedirectAuth/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
