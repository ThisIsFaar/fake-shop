import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="nav">
      <Link to="/products">FakeShop</Link>
    </div>
  );
}
