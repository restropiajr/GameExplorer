'use client';
import { BsSearch } from 'react-icons/bs';
import { Link as ScrollLink } from 'react-scroll';
import GameExplorerIcon from '../public/game-explorer-icon.png';
import Image from 'next/image';
import AnimatedWave from '@/components/AnimatedWave';

export default function Home() {
  return (
    <main>
      <section className='main-container'>
        <div className='row-one'>
          <div className='col-one flex min-h-screen flex-col items-center justify-center gap-4'>
            <Image
              src={GameExplorerIcon}
              width={150}
              priority={true}
              height={150}
              alt='GameExplorer-Icon'
              className='md:mt-32 lg:mt-0'
            />
            <h1 className='text-center text-4xl text-white md:text-6xl'>
              Welcome to {''}
              <span className='font-bold tracking-wide text-white'>
                GameExplorer
              </span>
            </h1>
            <p className='px-4 text-center text-lg text-white md:text-xl'>
              An interactive video game archive to explore and review video
              games!
            </p>
            <ScrollLink
              to='games'
              smooth={true}
              duration={750}
              ignoreCancelEvents={true}
              className='cursor-pointer'
            >
              <p className='hover-transition border-2 border-white px-4 py-2 text-lg md:mb-48 md:text-xl lg:mb-0'>
                See Collection
              </p>
            </ScrollLink>
          </div>
          <div className='relative'>
            <AnimatedWave
              color={'#FFEEF2'}
              animationDuration='4s'
              opacity={'0.8'}
            />
            <AnimatedWave
              color={'#FFEEF2'}
              animationDuration='12s'
              opacity={'0.5'}
            />
            <AnimatedWave
              color={'#FFEEF2'}
              animationDirection='reverse'
              animationDuration='10s'
              opacity={'0.2'}
            />
          </div>
        </div>
      </section>
      <section id='games' className='main-container'>
        <div className='row-one'>
          <div className='col-one mx-auto flex w-full flex-col items-center justify-center gap-4 lg:w-2/3'>
            <h2 className='mt-32 text-3xl text-white md:text-5xl'>
              Collection
            </h2>
            <p className='text-white md:text-lg'>
              Take a dive into our large selection!
            </p>
            <form className='flex gap-4'>
              <input
                type='search'
                className='rounded p-2'
                placeholder='Search'
              />
              <button type='button'>
                <BsSearch className='text-white' size={25} />
              </button>
            </form>
          </div>
        </div>
        <div className='row-two'>
          <div className='col-one flex-start mx-auto mt-16 flex w-full flex-col gap-4 px-4 lg:w-2/3'>
            <h3 className='text-2xl text-white md:text-4xl'>Recent</h3>
            {/* need to include fetch request with map for recent games */}
          </div>
        </div>
      </section>
    </main>
  );
}
