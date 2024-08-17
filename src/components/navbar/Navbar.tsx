import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import { FirstAid } from "@phosphor-icons/react";

function Navbar() {
  let navigate = useNavigate()

  return (
    <>
      <div className="px-6 py-4 flex items-center justify-between bg-amber-300">
            <div className="uppercase text-gray-800 dark:text-white hover:text-blue-800 font-black text-3xl">
                <Link to="/home"><FirstAid size={40} weight="fill"/></Link>
            </div>
            <div className="flex items-center">
                <nav className="font-sen text-gray-800 dark:text-white uppercase font-bold text-lg lg:flex items-center hidden">
                    <Link to="/home" className="py-2 px-6 flex hover:text-blue-800">Home</Link>
                    <Link to="/produtos" className="py-2 px-6 flex hover:text-blue-800">Produtos</Link>
                    <Link to="/categorias" className="py-2 px-6 flex hover:text-blue-800">Categorias</Link>
                </nav>               
            </div>
        </div>
    </>
  );
}

export default Navbar;
