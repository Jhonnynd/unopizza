import React from "react";
import BurgerMenu from "./BurgerMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-12 p-4 items-center text-2xl text-red-500 flex uppercase justify-between border-b-2 border-b-red-500">
      <div className="text-xl">
        <Link href="/">Uno Pizza</Link>
      </div>
      <div className="md:hidden">
        <BurgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
