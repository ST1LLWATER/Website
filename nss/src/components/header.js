import Announcement from "./announcement";
import Carousel from "./carousel";
import React from "react";

function Header() {
  return (
    <div className="rowC">
      <Carousel />
      <Announcement />
    </div>
  );
}

export default Header;
