import { BsSearch } from 'react-icons/bs';

export default function Home() {
  return (
    <main className='main-container'>
      <section className='mt-24 flex flex-col items-center justify-center gap-4'>
        <h1 className='text-center text-4xl text-white md:text-5xl'>
          Welcome to {''}
          <span className='animate-gradient gradient-text font-bold tracking-wide'>
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
      <section className='mt-24 flex w-full flex-col items-center justify-center gap-4 md:w-2/3 md:items-start'>
        <h2 className='text-2xl text-white underline'>Latest Releases</h2>
      </section>
    </main>
  );
}
