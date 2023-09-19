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
        <div className='row'>
          <div className='col-one flex min-h-screen flex-col items-center justify-center gap-4'>
            <Image
              src={GameExplorerIcon}
              width={150}
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
            <p className='px-4 text-center text-gray-300'>
              An interactive video game archive to explore and review video
              games!
            </p>
            <ScrollLink
              to='games'
              smooth={true}
              duration={500}
              ignoreCancelEvents={true}
              className='cursor-pointer'
            >
              <p className='text-md hover-transition border-2 border-white px-4 py-2 md:mb-48 lg:mb-0'>
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
      {/* <section id='games' className='main-container gap-4'>
        <h2 className='text-3xl text-white'>Collection</h2>
        <select name='release-date' id='release-date'>
          <option value=''></option>
        </select>
        <form className='flex gap-4'>
          <input type='search' className='rounded p-2' placeholder='Search' />
          <button type='button'>
            <BsSearch className='text-white' size={25} />
          </button>
        </form>
      </section> */}
    </main>
  );
}
