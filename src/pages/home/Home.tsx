import React from "react";
import home from '../../assets/home.png';
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      <div className="bg-amber-50 dark:bg-amber-50 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto pl-20 flex relative pt-20">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span className="w-20 h-2 bg-blue-800 dark:bg-blue-800 mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-5xl sm:text-7xl font-black flex flex-col leading-none dark:text-blue-800 text-gray-800">
              Farmácia
              <span className="text-5xl sm:text-7xl">Central</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 font-medium pt-6 dark:text-black">
                Mais do que uma farmácia, somos seu aliado no bem-estar! 
            </p>
            <p className="text-sm sm:text-base text-gray-700 font-medium dark:text-black">
                Explore nossas soluções para uma vida saudável.
            </p>
            <div className="flex mt-8">
              <Link
                to="/produtos"
                className="uppercase py-2 px-4 rounded-lg bg-blue-800 border-2 border-transparent text-white text-md mr-4 hover:bg-blue-400"
              >
                Produtos
              </Link>
            </div>
          </div>
          <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
            <img
              src={home}
              className="max-w-xs md:max-w-sm m-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
