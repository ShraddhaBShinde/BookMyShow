import React from "react";
import { BiShareAlt} from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import IMAGES from "../../images/images";
const NavSm = () => {
  return (
    <>
    <div className="text-gray-800 flex items-center justify-between">
   <div>
      <h3 className="text-xl font-bold">It All Starts Here!</h3>
   </div>
   <div className="w-8 h-8">
      <BiShareAlt className="w-full h-full" />
   </div>
</div>
    </>
  )
};
const NavLg = () => {
    return (
        <>
        <div className="flex justify-between gap-5 w-full">
            <div className="flex justify-between pl-5 h-10">
                <img src={IMAGES.bmslogo} alt="logo" />
            </div>
                <div className="w-4/6 flex gap-3 items-center bg-white px-3 py-2 rounded-md">
                <BiSearch />
                <input
                    type="search"
                    className="w-full"
                    placeholder="Search for Movies, Events, Plays, Sports and Activities"
                />
                </div>
            <div className="flex pr-5">
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold px-4 rounded h-7 mt-2">Sign In
                </button>
            </div>
        </div>
        </>
    )
};

const MovieNavbar = () => {
  return (
    <>
     <nav className="bg-bms-800 px-2 py-4">
        <div className="md:hidden">{/*Mobile Screen*/}
          <NavSm />
        </div>
        <div className="hidden md:block lg:hidden">{/*Tablet Screen*/}
          <NavSm />
        </div>
        <div className="hidden lg:flex">{/*Large Screen*/}
          <NavLg />
        </div>
     </nav>
    </>
  );
};

export default MovieNavbar;