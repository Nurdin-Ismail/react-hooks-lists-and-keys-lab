import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const arr = links.map((nav) => {
    return <a key={nav}href={`#${nav}`}>{nav}</a>
  });

  return <nav>{arr}</nav>;
}

export default NavBar;
