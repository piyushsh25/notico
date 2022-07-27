import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Logout } from "./components/Logout/Logout";
import { RedirectAuth } from "./Hooks/Auth/RedirectAuth";
import { RequiresAuth } from "./Hooks/Auth/RequiresAuth";
import { Bookmark } from "./Pages/Bookmark";
import { LandingPage } from "./Pages/LandingPage";
import { Login } from "./Pages/Login";
import { NotificationPage } from "./Pages/NotificationPage";
import { Signup } from "./Pages/Signup";
import { useSelector } from "react-redux"
import EditPostModal from "./components/Modal/EditModal";
import SinglePageComponent from "./components/Single-Post/SinglePage";
import MockmanEs from "mockman-js";
import { UserProfile } from "./components/UserProfile/UserProfile";
function App() {
  const { showEditModal } = useSelector((store) => store.postReducer)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:postId" element={<SinglePageComponent/>} />
          <Route element={<RequiresAuth />}>
            <Route path="/notification" element={<NotificationPage />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/bookmark" element={<Bookmark />} />
          </Route>
          <Route element={<RedirectAuth />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="/mock" element={<MockmanEs/>}/>
          <Route path="user/:username" element={<UserProfile/>}/>
        </Routes>
      </BrowserRouter>
      {showEditModal && <EditPostModal />}
     
    </div>
  );
}

export default App;
