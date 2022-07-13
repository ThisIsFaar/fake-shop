import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
