import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo1 from "../assets/logo1.png";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Logo1} alt="Kieler Project Management" />
          <span>Kieler Project Management</span>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <li>
            {!isPending && (
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            )}
            {isPending && <button disabled className="logout-btn">Logging out!</button>}
          </li>
        )}
      </ul>
    </div>
  );
}
