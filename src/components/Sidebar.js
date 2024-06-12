import React from "react";

import NavbarContent from "./NavbarContent";
export default function Sidebar() {
  return (
    <div className="hidden lg:block mt-16 fixed">
      <NavbarContent />
    </div>
  );
}
