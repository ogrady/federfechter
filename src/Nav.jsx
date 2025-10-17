import { useState, cloneElement } from "react";
import "./Nav.css"

export default function Nav({children}) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const childrenWithClose = children.map((child) =>
    child.type === "a"
        ? cloneElement(child, {
            onClick: () => setOpen(false)
        })
        : child
  )

  return (
    <nav className="nav">
      <div className="logo"><a href="/"><img src="logo.png"></img></a></div>
      <div className={`menu ${open ? "open" : ""}`}>
        {childrenWithClose}
      </div>

      <div className="burger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}