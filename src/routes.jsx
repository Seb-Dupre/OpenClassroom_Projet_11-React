import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Sign-in";
import User from "./pages/User";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/User" element={<User />} />
    </Routes>
  );
}

export default AppRouter;
