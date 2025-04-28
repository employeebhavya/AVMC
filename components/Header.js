import Image from "next/image";
import React from "react";
import Menu from "./Menu";
import SearchComponent from "./SearchComponent";

function Header() {
  return (
    <section className="bg-white sticky top-0 z-50">
      <div className="container1 py-2 2xl:py-4 flex justify-between items-center gap-4">
        <div>
          <Image src="/logo.svg" alt="Logo" width={232} height={58} />
        </div>
        <div className="flex item gap-6">
          <Menu />
          <SearchComponent />
        </div>
      </div>
    </section>
  );
}

export default Header;
