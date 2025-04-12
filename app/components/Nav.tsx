"use client"
import { useRef, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { GrLinkNext } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiShoppingCart } from "react-icons/ti";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const navHeight = useRef(null);
  const linksRef = useRef<HTMLUListElement>(null)
  console.log(linksRef);

  const toggleShowLinks = () => {
    setShowLinks(!showLinks)
  };

  const linkStyle = {
    height:
      showLinks && linksRef.current
        ? `${linksRef.current.getBoundingClientRect().height + 15}px`
        : "0px",
  };
  
  


  return (
    <header className='bg-green-950 px-6 py-8'>
      <div className='hidden lg:block'>
        <div className=' flex justify-between gap-4 items-center'>
          {/* Logo */}
          <h1 className='flex flex-col text-5xl'>
            <span className='text-lime-100'>DeLuca</span>{" "}
            <span className=' text-yellow-300'>Hair</span>
          </h1>
          {/* Links */}

          <div className='flex justify-center gap-x-6'>
            <a href='?#' className='text-lime-100'>
              Home
            </a>
            <a href='?#' className='text-lime-100'>
              Services
            </a>
            <a href='?#' className='text-lime-100'>
              Shop Merch
            </a>
            <a href='?#' className='text-lime-100'>
              Blog
            </a>
            <a href='?#' className='text-lime-100'>
              About Us
            </a>
          </div>
          <div className='flex justify-between items-center gap-8'>
            <button className='text-white flex items-center gap-1 bg-green-900 hover:bg-green-800 hover:scale-105 py-1 px-3 rounded-sm dur'>
              Login <FiLogIn />{" "}
            </button>

            <button className='text-green-200'>
              <TiShoppingCart className='text-3xl hover:text-green-100 duration-300 hover:scale-105' />
            </button>
          </div>
        </div>
      </div>

      <div className='lg:hidden block'>
        <div className='flex justify-between'>
          {/* Logo */}
          <h1 className='flex flex-col text-5xl'>
            <span className='text-lime-100'>DeLuca</span>{" "}
            <span className=' text-yellow-300'>Hair</span>
          </h1>
          <div className='flex justify-between gap-x-3 items-center'>
            <button>
              <TiShoppingCart className='text-white text-3xl hover:scale-105 duration-500' />
            </button>
            <button>
              <RxHamburgerMenu className='text-white text-3xl' onClick={()=>{toggleShowLinks()}}/>
            </button>
          </div>
        </div>
        <div className={`text-white tracking-wider font-bold overflow-hidden transition-all duration-500 ease-in-out ${
    showLinks ? 'opacity-100 visible' : 'opacity-0 invisible'
  }`} ref={navHeight} style={linkStyle}>
          <ul className='' ref={linksRef}>
            <li className={`border-t-2 mt-8`}>
              <a
                href='?#'
                className='text-lime-100 hover:text-lime-950 hover:bg-lime-100 duration-300 flex justify-between items-center p-5'
              >
                Home <GrLinkNext className='text-green-950 font-bold' />
              </a>
            </li>
            <li>
              <a
                href='?#'
                className='text-lime-100 hover:text-lime-950 hover:bg-lime-100 duration-300 flex justify-between items-center p-5'
              >
                Services <GrLinkNext className='text-green-950 font-bold' />
              </a>
            </li>
            <li>
              <a
                href='?#'
                className='text-lime-100 hover:text-lime-950 hover:bg-lime-100 duration-300 flex justify-between items-center p-5'
              >
                Shop Merch <GrLinkNext className='text-green-950 font-bold' />
              </a>
            </li>
            <li>
              <a
                href='?#'
                className='text-lime-100 hover:text-lime-950 hover:bg-lime-100 duration-300 flex justify-between items-center p-5'
              >
                Blog <GrLinkNext className='text-green-950 font-bold' />
              </a>
            </li>
            <li>
              <a
                href='?#'
                className='text-lime-100 hover:text-lime-950 hover:bg-lime-100 duration-300 flex justify-between items-center p-5'
              >
                About Us <GrLinkNext className='text-green-950 font-bold' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Nav;
