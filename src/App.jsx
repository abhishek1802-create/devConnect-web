import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body/Body";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import { Provider } from "react-redux";
import appStore from "./store/store";
import Feed from "./components/Feed/Feed";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            {/* Show LandingPage at root URL */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Nested routes under a different parent path */}
            <Route path="/app" element={<Body />}>
              <Route path="feed" element={<Feed />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
