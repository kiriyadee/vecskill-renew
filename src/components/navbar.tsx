/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { UserNav } from "./user-nav";

const Navbar = ({}) => {
  return (
    <div
      className="items-center p-2 z-0"
      style={{ backgroundColor: "#101840" }}
    >
      <div className="container mx-auto flex justify-between">
        <div>
          <Link href="/">
            <img
              src="https://res.cloudinary.com/enwuft/image/upload/v1629014172/vecskills_bw_logo_al2ukr.png"
              className="bg-cover h-9 cursor-pointer"
              alt="Logo"
            />
          </Link>
        </div>

        <div>
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
