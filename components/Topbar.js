import Link from "next/link";
import React from "react";

function Topbar() {
  return (
    <section className="bg-topbar">
      <div className="container1 py-1 text-white flex justify-center md:justify-end items-center gap-4">
        <Link className="text-base" href="mailto:dean@avmc.edu.in">
          dean@avmc.edu.in
        </Link>
        <Link className="text-base" href="tel:04132611245">
          Call Us: 0413-2611245
        </Link>
      </div>
    </section>
  );
}

export default Topbar;
