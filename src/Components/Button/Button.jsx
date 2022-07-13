import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({ link, data }) {
  return (
    <Link to={link} className="primary-btn">
      {data}
    </Link>
  );
}
