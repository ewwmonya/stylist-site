"use client"
import Link from "next/link";
import { useRef, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { GrLinkNext } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiShoppingCart } from "react-icons/ti";

import { navLinks } from "../../navLinks";
import { usePathname } from "next/navigation";
import { nanoid } from "nanoid";


const Nav = () => {
  const pathName = usePathname()

  const [showLinks, setShowLinks] = useState(false);
  const navHeight = useRef(null);
  const linksRef = useRef<HTMLUListElement>(null)

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
            {navLinks.map((link)=>{
              const {name, path, id} = link
              return <Link href={path} key={id} className={`${pathName === path ? "text-yellow-300 font-bold" : "text-lime-100 hover:underline hover:underline-offset-4 duration-300"}`}>
              {name}
            </Link>
            })}
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
        <div className={`text-white tracking-wider font-bold overflow-hidden transition-all duration-500 ease-in-out mt-10 ${
    showLinks ? 'opacity-100 visible' : 'opacity-0 invisible'
  }`} ref={navHeight} style={linkStyle}>
          <ul className='' ref={linksRef}>
          {navLinks.map((link)=>{
              const {name, path,id} = link
              return <li className={``} key={id}>

                 <Link href={path}  className={`${pathName === path ? "text-yellow-300 font-bold" : "text-lime-100 hover:underline hover:underline-offset-4 duration-300"} text-lime-100 hover:text-lime-950 hover:bg-lime-100 duration-300 flex justify-between items-center p-5`}>
              {name} <GrLinkNext className='text-green-950 font-bold' />
            </Link>
            </li>
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Nav;
