'use client';

import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export function NavBar() {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
	const [mobileMenu, setMobileMenu] = useState(false);

	return (
		<nav className='fixed top-0 left-0 w-full h-[80px] bg-[#151515] z-10 flex justify-center items-center'>
			<div className='flex justify-between items-center px-4 w-full md:w-2/3 mx-auto'>
				<Link href='/' className='flex justify-center items-center'>
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
					<ul className='flex justify-center items-center gap-4'>
						<li>
							<Link href='/' className='flex justify-center items-center'>
								<p className='text-white'>Home</p>
							</Link>
						</li>
						<li>
							<Link href='games' className='flex justify-center items-center'>
								<p className='text-white'>Games</p>
							</Link>
						</li>
						{!isUserLoggedIn && (
							<>
								<li>
									<Link
										href='signin'
										className='flex justify-center items-center'
									>
										<p className='text-white'>Sign In</p>
									</Link>
								</li>
								<li>
									<Link
										href='signup'
										className='flex justify-center items-center'
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
										className='flex justify-center items-center'
									>
										<p className='text-white'>Wishlist</p>
									</Link>
								</li>
								<li>
									<Link
										href='reviews'
										className='flex justify-center items-center'
									>
										<p className='text-white'>Reviews</p>
									</Link>
								</li>
								<li>
									<button className='flex justify-center items-center text-white'>
										Sign Out
									</button>
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
					<div className='flex flex-col justify-center items-center gap-4'>
						<h2 className='text-black text-3xl mt-4'>Menu</h2>
						<ul className='flex justify-center items-center gap-2'>
							<li>
								<Link href='/' className='flex justify-center items-center '>
									<p
										className='text-black'
										onClick={() => setMobileMenu(!mobileMenu)}
									>
										Home
									</p>
								</Link>
							</li>
							<li>
								<Link
									href='games'
									className='flex justify-center items-center '
								>
									<p
										className='text-black'
										onClick={() => setMobileMenu(!mobileMenu)}
									>
										Games
									</p>
								</Link>
							</li>
							{!isUserLoggedIn && (
								<>
									<li>
										<Link
											href='signin'
											className='flex justify-center items-center'
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
											className='flex justify-center items-center'
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
											className='flex justify-center items-center'
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
											className='flex justify-center items-center'
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
											className='flex justify-center items-center text-black'
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
	);
}
