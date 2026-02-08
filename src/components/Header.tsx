import { Link } from "react-router-dom";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center px-6 py-3 bg-pink-100 shadow-lg">
      {/* Logo */}
      <div>
        <img className="w-24" src={LOGO_URL} alt="App Logo" />
      </div>

      {/* Navigation */}
      <ul className="flex items-center gap-6">
        <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/grocery">Grocery</Link>
        </li>

        <li>Cart</li>

        <li>
          <button
            className="px-4 py-1 border border-black rounded-lg bg-white"
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
