import "../styles/components/Header.scss";
import argentBankLogo from "../assets/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faPowerOff } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div>
        {!isAuthenticated ? (
          <Link className="main-nav-item" to="/SignIn">
            <FontAwesomeIcon icon={faUserCircle} className="icon" /> Sign In
          </Link>
        ) : (
          <div className="header-logged-in">
            <Link to="/user" className="main-nav-item header-username">
              <FontAwesomeIcon icon={faUserCircle} className="icon" />{" "}
              {user?.userName || "User"}
            </Link>

            <button
              className="main-nav-item logout-button"
              onClick={handleLogout}
              aria-label="Logout"
              type="button"
            >
              <FontAwesomeIcon icon={faPowerOff} className="icon" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
