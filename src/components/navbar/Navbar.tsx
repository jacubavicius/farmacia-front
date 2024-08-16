import React from "react";
import { Link } from "react-router-dom";
import { FirstAid } from "@phosphor-icons/react";

function Navbar() {
  return (
    <>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between bg-amber-300">
            <div className="uppercase text-gray-800 dark:text-white hover:text-blue-800 font-black text-3xl">
                <a href=""><FirstAid size={40} weight="fill"/></a>
            </div>
            <div className="flex items-center">
                <nav className="font-sen text-gray-800 dark:text-white uppercase font-bold text-lg lg:flex items-center hidden">
                    <Link to="/home" className="py-2 px-6 flex hover:text-blue-800">Home</Link>
                    <a href="#" className="py-2 px-6 flex hover:text-blue-800">Produtos</a>
                    <a href="#" className="py-2 px-6 flex hover:text-blue-800">Categorias</a>
                </nav>               
            </div>
        </div>
    </>
  );
}

export default Navbar;
