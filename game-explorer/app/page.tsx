import { BsSearch } from 'react-icons/bs';

export default function Home() {
	return (
		<main className='main-container'>
			<section className='flex flex-col justify-center items-center gap-4 mt-24'>
				<h1 className='text-4xl md:text-5xl text-white text-center'>
					Welcome to {''}
					<span className='font-bold tracking-wide animate-gradient gradient-text'>
						GameExplorer
					</span>
				</h1>
				<p className='text-white'>Over 500,000+ video games to discover!</p>
				<form className='flex gap-4'>
					<input type='search' className='rounded p-2' placeholder='Search' />
					<button type='button'>
						<BsSearch className='text-white' size={25} />
					</button>
				</form>
			</section>
			<section className='flex flex-col justify-center items-center md:items-start mt-24 gap-4 w-full md:w-2/3'>
				<h2 className='text-2xl text-white underline'>Top Rated Games 2023</h2>
			</section>
		</main>
	);
}
