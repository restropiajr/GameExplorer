import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export function Footer() {
  return (
    <footer className='flex h-[120px] w-full items-center justify-center bg-[#151515]'>
      <div className='flex flex-col items-center justify-center gap-2 text-white'>
        <div className='flex flex-col items-center'>
          <p>Copyright &copy; 2023 Roland Estropia Jr.</p>
          <p>All Rights Reserved</p>
        </div>
        <div className='flex gap-2'>
          <a
            className='text-[white]'
            href='https://github.com/restropiajr'
            target='_blank'
          >
            <FaGithub size={25} />
          </a>
          <a
            className='text-[white]'
            href='https://www.linkedin.com/in/restropiajr/'
            target='_blank'
          >
            <FaLinkedin size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
}
