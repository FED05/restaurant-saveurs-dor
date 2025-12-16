// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { IoMdRestaurant } from "react-icons/io";
// import {  AiOutlineMenuUnfold } from "react-icons/ai";
// import { AiOutlineClose } from "react-icons/ai";
// import { BiChevronDown } from "react-icons/bi";
// const Navbar = () => {
//   const [menu, setMenu] = useState(false);
//   const handleChange = () => {
//     setMenu(!menu);
//   };
//   const closeMenu = () => {
//     setMenu(false);
//   };
//   return (
//     <div className="fixed w-full">
//       <div>
//         <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
//           <div className="flex flex-row items-center cursor-pointer">
//             <span>
//               <IoMdRestaurant size={32} />
//             </span>
//             <h1 className="text-xl font-semibold">Saveurs d’Or</h1>
//           </div>
//           <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
//             <Link
//               to="/home"
//               className=" hover:text-red-500 transition-all cursor-pointer"
//             >
//               Home
//             </Link>

//             <div className="relative group">
//               <div className="flex items-center gap-1">
//                 <Link
//                   to="dishes"
//                   className=" hover:text-red-500 transition-all cursor-pointer"
//                 >
//                   Dishes
//                 </Link>
//                 <BiChevronDown className="cursor-pointer" size={25} />
//               </div>
//               <ul className=" absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
//                 <li>
//                   <Link
//                     to="dishes"
//                     className=" hover:text-red-500 transition-all cursor-pointer"
//                   >
//                     Spicy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="dishes"
//                     className=" hover:text-red-500 transition-all cursor-pointer"
//                   >
//                     Tasty
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="dishes"
//                     className=" hover:text-red-500 transition-all cursor-pointer"
//                   >
//                     Delicious
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="dishes"
//                     className=" hover:text-red-500 transition-all cursor-pointer"
//                   >
//                     Crispy
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <Link
//               to="/about"
//               className=" hover:text-red-500 transition-all cursor-pointer"
//             >
//               About
//             </Link>
//             <Link
//               to="/contact"
//               className=" hover:text-red-500 transition-all cursor-pointer"
//             >
//               Contact
//             </Link>
//             <Link
//               to="/dashboard"
//               className=" hover:text-red-500 transition-all cursor-pointer"
//             >
//               Dashboard
//             </Link>
//           </nav>
//           <div className=" md:hidden flex items-center">
//             {menu ? (
//               <AiOutlineClose size={25} onClick={handleChange} />
//             ) : (
//               <AiOutlineMenuUnfold size={25} onClick={handleChange} />
//             )}
//           </div>
//         </div>
//         <div
//           className={`${
//             menu ? "translate-x-0" : "-translate-x-full"
//           } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
//         >
//           <Link
//             to="home"
//             className=" hover:text-red-500 transition-all cursor-pointer"
//           >
//             Home
//           </Link>
//           <Link
//             to="dishes"
//             className=" hover:text-red-500 transition-all cursor-pointer"
//           >
//             Dishes
//           </Link>
//           <Link
//             to="about"
//             className=" hover:text-red-500 transition-all cursor-pointer"
//           >
//             About
//           </Link>
//           <Link
//             to="menu"
//             className=" hover:text-red-500 transition-all cursor-pointer"
//           >
//             Contact
//           </Link>
//           <Link
//             to="reviews"
//             className=" hover:text-red-500 transition-all cursor-pointer"
//           >
//             Dashboard
//           </Link>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
////----
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoMdRestaurant } from "react-icons/io";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const scrollToSection = (sectionId) => {
    // Si on n'est pas sur la page principale, naviguer d'abord
    if (location.pathname !== '/' && location.pathname !== '/home') {
      navigate('/');
      // Attendre que la navigation soit terminée avant de scroller
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Si on est déjà sur la page principale, juste scroller
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMenu();
  };

  return (
    <div className="fixed w-full z-50">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer" onClick={() => navigate('/')}>
            <span>
              <IoMdRestaurant size={32} />
            </span>
            <h1 className="text-xl font-semibold">Saveurs d'Or</h1>
          </div>
          
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-red-500 transition-all cursor-pointer"
            >
              Home
            </button>

            <div className="relative group">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => scrollToSection('dishes')}
                  className="hover:text-red-500 transition-all cursor-pointer"
                >
                  Dishes
                </button>
                <BiChevronDown className="cursor-pointer" size={25} />
              </div>
              <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                <li>
                  <button
                    onClick={() => scrollToSection('dishes')}
                    className="hover:text-red-500 transition-all cursor-pointer"
                  >
                    Spicy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('dishes')}
                    className="hover:text-red-500 transition-all cursor-pointer"
                  >
                    Tasty
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('dishes')}
                    className="hover:text-red-500 transition-all cursor-pointer"
                  >
                    Delicious
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('dishes')}
                    className="hover:text-red-500 transition-all cursor-pointer"
                  >
                    Crispy
                  </button>
                </li>
              </ul>
            </div>

            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-red-500 transition-all cursor-pointer"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-red-500 transition-all cursor-pointer"
            >
              Contact
            </button>

            <Link
              to="/dashboard"
              className="hover:text-red-500 transition-all cursor-pointer"
            >
              Dashboard
            </Link>
          </nav>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>

        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <button
            onClick={() => scrollToSection('home')}
            className="hover:text-red-500 transition-all cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('dishes')}
            className="hover:text-red-500 transition-all cursor-pointer"
          >
            Dishes
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-red-500 transition-all cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-red-500 transition-all cursor-pointer"
          >
            Contact
          </button>
          <Link
            to="/dashboard"
            onClick={closeMenu}
            className="hover:text-red-500 transition-all cursor-pointer"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;