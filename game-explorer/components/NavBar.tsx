'use client';

import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export function NavBar() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [navbarBG, setNavbarBG] = useState<string>('bg-transparent');

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 50) {
        setNavbarBG('bg-black bg-opacity-60');
      } else {
        setNavbarBG('bg-transparent');
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        className={`fixed left-0 top-0 z-10 flex h-[80px] w-full items-center justify-center ${navbarBG} transition duration-500 ease-in-out`}
      >
        <div className='mx-auto flex w-full items-center justify-between px-4 md:w-2/3'>
          <Link href='/' className='flex items-center justify-center'>
            <p className='animate-gradient gradient-text text-lg font-bold tracking-wide'>
              GameExplorer
            </p>
          </Link>
          {/* Hamburger-Toggler */}
          <div className='flex md:hidden'>
            <FaBars
              className='cursor-pointer text-white'
              size={25}
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          </div>
          {/* Desktop-Menu */}
          <div className='hidden md:flex'>
            <ul className='flex items-center justify-center gap-4'>
              <li>
                <Link href='/' className='flex items-center justify-center'>
                  <p className='text-white'>Home</p>
                </Link>
              </li>
              {!isUserLoggedIn && (
                <>
                  <li>
                    <Link
                      href='signin'
                      className='flex items-center justify-center'
                    >
                      <p className='text-white'>Sign In</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='signup'
                      className='flex items-center justify-center'
                    >
                      <p className='text-white'>Sign Up</p>
                    </Link>
                  </li>
                </>
              )}
              {isUserLoggedIn && (
                <>
                  <li>
                    <Link
                      href='wishlist'
                      className='flex items-center justify-center'
                    >
                      <p className='text-white'>Wishlist</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='reviews'
                      className='flex items-center justify-center'
                    >
                      <p className='text-white'>Reviews</p>
                    </Link>
                  </li>
                  <li>
                    <button className='text-white'>Sign Out</button>
                  </li>
                </>
              )}
            </ul>
          </div>
          {/* Mobile-Menu */}
          <div
            className={`nav-overlay ${
              mobileMenu ? 'translate-y-0 ' : '-translate-y-full'
            }`}
            onClick={() => setMobileMenu(!mobileMenu)}
          />
          <div
            className={`nav-menu ${
              mobileMenu ? 'translate-y-0 ' : '-translate-y-full'
            }`}
          >
            <div className='flex flex-col items-center justify-center gap-4'>
              <h2 className='mt-4 text-3xl text-black'>Menu</h2>
              <ul className='flex items-center justify-center gap-2'>
                <li>
                  <Link href='/' className='flex items-center justify-center '>
                    <p
                      className='text-black'
                      onClick={() => setMobileMenu(!mobileMenu)}
                    >
                      Home
                    </p>
                  </Link>
                </li>
                {!isUserLoggedIn && (
                  <>
                    <li>
                      <Link
                        href='signin'
                        className='flex items-center justify-center'
                      >
                        <p
                          className='text-black'
                          onClick={() => setMobileMenu(!mobileMenu)}
                        >
                          Sign In
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='signup'
                        className='flex items-center justify-center'
                      >
                        <p
                          className='text-black'
                          onClick={() => setMobileMenu(!mobileMenu)}
                        >
                          Sign Up
                        </p>
                      </Link>
                    </li>
                  </>
                )}
                {isUserLoggedIn && (
                  <>
                    <li>
                      <Link
                        href='wishlist'
                        className='flex items-center justify-center'
                      >
                        <p
                          className='text-black'
                          onClick={() => setMobileMenu(!mobileMenu)}
                        >
                          Wishlist
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='reviews'
                        className='flex items-center justify-center'
                      >
                        <p
                          className='text-black'
                          onClick={() => setMobileMenu(!mobileMenu)}
                        >
                          Reviews
                        </p>
                      </Link>
                    </li>
                    <li>
                      <button
                        className='flex items-center justify-center text-black'
                        onClick={() => setMobileMenu(!mobileMenu)}
                      >
                        Sign Out
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
