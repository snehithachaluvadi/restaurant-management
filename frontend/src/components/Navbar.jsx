import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [show, setShow] = useState(false);

  // Define keyboard shortcuts
  const handleKeyPress = (event) => {
    const shortcuts = {
      h: "home",
      m: "menu",
      a: "about",
      r: "reservation",
    };

    if (shortcuts[event.key]) {
      document.getElementById(shortcuts[event.key])?.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);
  return (
    <>
      <nav>
        <div className="logo">KVS</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <div className="nav-buttons" style={{ display: "flex", gap: "10px" }}>
            <button className="menuBtn" onClick={() => window.location.href = "#menu"}>OUR MENU</button>
          </div>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;