"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const user = true;

  const links = [
    { title: "Home", url: "/" },
    { title: "Menu", url: "/menu" },
    { title: "About Us", url: "/about" },
    { title: "Contact", url: "/contact" },
  ];
  return (
    <div>
      {!open ? (
        <Image
          src="/burgermenu.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="fixed top-12 left-0 w-full h-[calc(100vh-3rem)] text-5xl text-white bg-red-500 flex flex-col items-center justify-center z-50">
          {links.map((item, i) => (
            <Link
              key={i}
              href={item.url}
              onClick={() => setOpen(false)}
              className="py-1 hover:text-red-500"
            >
              {item.title}
            </Link>
          ))}
          {user ? (
            <Link href="/orders">My Orders</Link>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
