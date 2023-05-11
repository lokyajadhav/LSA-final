// import { Link } from "react-router-dom";
// import "./navbar.css";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <ul className="nav-list">
//         <Link to="/">
//           <label className="title algo-title">
//             LuckyStake Hybrid Algorithm
//           </label>
//         </Link>
//         <Link to="/" className="nav-list-item">
//           Home
//         </Link>
//         <Link to="/register" className="nav-list-item">
//           Register
//         </Link>
//         <Link to="/mine" className="nav-list-item">
//           Mine
//         </Link>
//         <Link to="/chain" className="nav-list-item">
//           Chain
//         </Link>
//         <Link to="/miners" className="nav-list-item">
//           Miners
//         </Link>
//       </ul>
//     </div>
//   );
// };
// export default Navbar;

import "./navbar.css";

import { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            LuckyStake Hybrid Algorithm
            {/* <i className="fa fa-code"></i> */}
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/register"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/mine"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Mine
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/chain"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Chain
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/miners"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Miners
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
