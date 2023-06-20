import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCompass, faBell, faEnvelope, faBookmark, faList, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { BiLogIn } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const links = [
    { path: "home", label: "Home", icon: faHome },
    { path: "explore", label: "Explore", icon: faCompass },
    { path: "notifications", label: "Notifications", icon: faBell },
    { path: "messages", label: "Messages", icon: faEnvelope },
    { path: "bookmarks", label: "Bookmarks", icon: faBookmark },
    { path: "lists", label: "Lists", icon: faList },
    { path: "more", label: "More", icon: faEllipsisH },
  ];

  const currentUser = useSelector((state) => state.user.currentUser);

  const linkItems = links.map((link) => (
    <Link
      key={link.path}
      to={`/tuiter/${link.path}`}
      className={`list-group-item text-capitalize ${active === link.path ? "active" : ""}`}
    >
      <FontAwesomeIcon icon={link.icon} className="me-2" />
      <span className="d-none d-xl-inline">{link.label}</span>
    </Link>
  ));

  return (
    <div className="list-group">
      {linkItems}
      {!currentUser && (
        <>
          <Link className="list-group-item" to="/tuiter/login">
            <BiLogIn className="me-2" />
            <span className="d-none d-xl-inline">Login</span>
          </Link>
          <Link className="list-group-item" to="/tuiter/register">
            <FiUserPlus className="me-2" />
            <span className="d-none d-xl-inline">Register</span>
          </Link>
        </>
      )}
      {currentUser && (
        <Link className="list-group-item" to="/tuiter/profile">
          <AiOutlineUser className="me-2" />
          <span className="d-none d-xl-inline">Profile</span>
        </Link>
      )}
      <p className="text-white fs-6">{ignore}</p>
      <p className="text-white fs-6">{tuiter}</p>
    </div>
  );
};

export default NavigationSidebar;