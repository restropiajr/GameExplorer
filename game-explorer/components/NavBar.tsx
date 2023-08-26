'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export function NavBar() {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [mobileMenu, setMobileMenu] = useState(false);
	return (
		<nav className='fixed top-0 left-0 w-full h-[80px] bg-[#151515] flex justify-between items-center px-4 gap-2'>
			<Link href='/' className='flex justify-center items-center '>
				<p className='text-white font-bold text-lg tracking-wide'>
					GameExplorer
				</p>
			</Link>
			<form action=''>
				<input
					type='search'
					placeholder='Search'
					className='px-4 py-2 border rounded-full w-[175px] md:w-[250px] lg:w-[700px]'
				/>
			</form>
			{/* Hamburger-Toggler */}
			<div className='flex md:hidden'>
				<FaBars
					className='text-white cursor-pointer'
					size={25}
					onClick={() => setMobileMenu(!mobileMenu)}
				/>
			</div>
			{/* Desktop-Menu */}
			<div className='hidden md:flex'>
				<ul className='flex justify-center items-center gap-2'>
					{isUserLoggedIn && (
						<li>
							<Link href='/'>
								<Image
									src='/assets/images/re-logo.png'
									alt='User Avatar Logo'
									width={30}
									height={30}
									className='object-contain'
								/>
							</Link>
						</li>
					)}
					<li>
						<Link href='/' className='flex justify-center items-center '>
							<p className='text-white'>Home</p>
						</Link>
					</li>
					<li>
						<Link href='/' className='flex justify-center items-center '>
							<p className='text-white'>Games</p>
						</Link>
					</li>
					{!isUserLoggedIn && (
						<>
							<li>
								<Link href='/' className='flex justify-center items-center '>
									<p className='text-white'>Log In</p>
								</Link>
							</li>
							<li>
								<Link href='/' className='flex justify-center items-center '>
									<p className='text-white'>Sign Up</p>
								</Link>
							</li>
						</>
					)}
					{isUserLoggedIn && (
						<>
							<li>
								<Link href='/' className='flex justify-center items-center '>
									<p className='text-white'>Library</p>
								</Link>
							</li>
							<li>
								<Link href='/' className='flex justify-center items-center '>
									<p className='text-white'>Wishlist</p>
								</Link>
							</li>
							<li>
								<Link href='/' className='flex justify-center items-center '>
									<p className='text-white'>Reviews</p>
								</Link>
							</li>
							<li>
								<Link href='/' className='flex justify-center items-center '>
									<p className='text-white'>Sign Out</p>
								</Link>
							</li>
						</>
					)}
				</ul>
			</div>
		</nav>
	);
}
