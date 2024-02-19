import { LOGO_URL } from "../utils/constants";
import { useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import { UserContext } from "../utils/context/UserContext";
const Header = () => {
  const { loggedInUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="w-24">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <h6>Online Status:{onlineStatus ? "🟢" : "🔴"}</h6>
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>

          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2">
            <h6>{loggedInUser}</h6>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
