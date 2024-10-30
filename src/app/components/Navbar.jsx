"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 bg-[#eae9b9]">
      <div className="w-full ">
        <Link href="/">
          <Image
            className="py-6"
            src="/logo.svg"
            width="40"
            height="40"
            alt=""
          />
        </Link>
      </div>
      
      
    </nav>
  );
}
