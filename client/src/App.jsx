import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import MainLayout from "./layout/MainLayout";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className=" container">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/post/:id" element={<Single />} />
            <Route path="/write" element={<Write />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}
