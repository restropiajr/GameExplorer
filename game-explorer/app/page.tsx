'use client';
import { BsSearch } from 'react-icons/bs';
import { Link as ScrollLink } from 'react-scroll';

export default function Home() {
  return (
    <main>
      <section className='main-container gap-4'>
        <h1 className='text-center text-5xl text-white md:text-5xl'>
          Welcome to {''}
          <span className='animate-gradient gradient-text font-bold tracking-wide'>
            GameExplorer
          </span>
        </h1>
        <p className='text-white'>Over 500,000+ video games to discover!</p>
        <ScrollLink
          to='games'
          smooth={true}
          duration={500}
          ignoreCancelEvents={true}
          className='cursor-pointer'
        >
          <p className='rounded border px-4 py-2 text-xl text-white'>
            See Collection
          </p>
        </ScrollLink>
      </section>
      <section id='games' className='main-container gap-4'>
        <h2 className='text-2xl text-white underline'>Latest Releases</h2>
        <form className='flex gap-4'>
          <input type='search' className='rounded p-2' placeholder='Search' />
          <button type='button'>
            <BsSearch className='text-white' size={25} />
          </button>
        </form>
      </section>
    </main>
  );
}
