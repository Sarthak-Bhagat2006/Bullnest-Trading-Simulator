import React, { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }


  const menuClass = "menu";
  const activeMenuClass = "menu selected"

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:3002/logout", { withCredentials: true });
      console.log(res.data.message);
      // Optionally show toast
      alert("Logout Successfully");
      setTimeout(() => {
        window.location.href = "http://localhost:3001";
      }, 100);
    } catch (error) {
      console.error("Logout failed", error);
      alert("Logout failed");
    }
  };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "70px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => { handleMenuClick(0) }} >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => { handleMenuClick(1) }} >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => { handleMenuClick(2) }} >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          {/* <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => { handleMenuClick(3) }} >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li> */}
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => { handleMenuClick(4) }} >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          {/* <li>
        <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => { handleMenuClick(5) }} >
          <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
        </Link>
      </li> */}
          <li>
            <Link style={{ textDecoration: "none" }} to="/logout" onClick={() => { handleLogout() }} >
              <p>Logout</p>
            </Link>
          </li>
        </ul>
        <hr />

      </div>
    </div>
  );
};

export default Menu;
