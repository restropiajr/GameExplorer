'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export function NavBar() {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [mobileMenu, setMobileMenu] = useState(false);
	return (
		<nav className='fixed top-0 left-0 w-full h-[80px] bg-[#151515] flex justify-between items-center px-4 gap-2 z-10'>
			<Link href='/' className='flex justify-center items-center '>
				<p className='text-white font-bold text-lg tracking-wide'>
					GameExplorer
				</p>
			</Link>
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
			{/* Mobile-Menu */}
			<div
				className={`fixed inset-0 w-full bg-gray-500 bg-opacity-50 transition-transform duration-300 ease-in-out z-20
    			${mobileMenu ? 'translate-y-0 ' : '-translate-y-full'}`}
				onClick={() => setMobileMenu(!mobileMenu)}
			/>
			<div
				className={`fixed inset-0 h-[120px] bg-white transition-transform duration-300 ease-in-out z-30
				${mobileMenu ? 'translate-y-0 ' : '-translate-y-full'}`}
			>
				<div className='flex flex-col justify-center items-center gap-4'>
					<h2 className='text-black text-3xl mt-4'>Menu</h2>
					<ul className='flex flex-wrap justify-center items-center gap-2'>
						<li>
							<Link href='/' className='flex justify-center items-center '>
								<p className='text-black'>Home</p>
							</Link>
						</li>
						<li>
							<Link href='/' className='flex justify-center items-center '>
								<p className='text-black'>Games</p>
							</Link>
						</li>
						{!isUserLoggedIn && (
							<>
								<li>
									<Link href='/' className='flex justify-center items-center '>
										<p className='text-black'>Log In</p>
									</Link>
								</li>
								<li>
									<Link href='/' className='flex justify-center items-center '>
										<p className='text-black'>Sign Up</p>
									</Link>
								</li>
							</>
						)}
						{isUserLoggedIn && (
							<>
								<li>
									<Link href='/' className='flex justify-center items-center '>
										<p className='text-black'>Library</p>
									</Link>
								</li>
								<li>
									<Link href='/' className='flex justify-center items-center '>
										<p className='text-black'>Wishlist</p>
									</Link>
								</li>
								<li>
									<Link href='/' className='flex justify-center items-center '>
										<p className='text-black'>Reviews</p>
									</Link>
								</li>
								<li>
									<Link href='/' className='flex justify-center items-center '>
										<p className='text-black'>Sign Out</p>
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
}
