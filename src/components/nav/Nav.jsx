import React from "react";
import "./nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiBook2Line } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : " "}
      >
        <IoHomeOutline />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : " "}
      >
        <AiOutlineUser />
      </a>

      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : " "}
      >
        <MdOutlineWorkOutline />
      </a>

      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "portfolio" ? "active" : " "}
      >
        <RiBook2Line />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : " "}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
