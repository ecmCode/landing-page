import { BsSearch } from 'react-icons/bs';
import {RxHamburgerMenu} from "react-icons/rx";
import {ImHammer} from "react-icons/im";


const Main = () => {

  return(
    <main className='flex flex-col-reverse md:flex-row gap-4 md:gap-20 justify-start items-center w-full md:w-3/4 text-zinc-900 dark:text-purple-100 m-auto'>
      <div className='w-3/4 flex flex-col'>
        <h1 className='text-3xl flex flex-wrap justify-start items-baseline'>
          Make Something 
          <span className='text-purple-900 dark:text-fuchsia-400 text-4xl md:text-5xl mx-2'>
            Pretty 
          </span>
          and  
          <span className='text-purple-900 dark:text-fuchsia-400 text-4xl md:text-5xl mx-2'>
            Creative
          </span> 
          With Our Powerful 
          <span className='text-purple-900 dark:text-fuchsia-400 text-4xl md:text-5xl mx-2'>
            Javascript Library.
          </span>
        </h1>
        <p className='py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugit error fugiat, doloremque illum laboriosam repellendus, vel eum doloribus ut saepe vero iusto beatae necessitatibus est nihil consequatur esse ratione.</p>
      </div>
      <div>
        <ImHammer className='text-9xl scale-150 text-purple-900 dark:text-fuchsia-400 animate-bounce'/>
      </div>
    </main>
  )

}

const Header = () => {

  return( 
    <header className='w-full py-10 px-8 md:px-24 text-zinc-900 dark:text-purple-100 flex justify-between items-center select-none'>
      <div className='relative'>
        <h1 className='text-5xl relative top-0 left-0 text-purple-900  dark:text-purple-100 z-10'>Maker.js</h1>
        <h1 className='text-5xl absolute top-1 left-1 text-zinc-900 dark:text-purple-100 z-0 opacity-40'>Maker.js</h1>
        <ImHammer className='absolute -top-4 -left-4 z-0 text-7xl text-purple-900  dark:text-purple-100 opacity-30'/>
      </div>
      
      <div className='flex justify-end items-center w-2/3 gap-10'>
        <RxHamburgerMenu className='block lg:hidden text-3xl'/>

        <ul className='hidden lg:flex gap-10 text-2xl font-thin'>
          <li>Home</li>
          <li>Story</li>
          <li>News</li>
          <li>Photos</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <BsSearch className='text-3xl'/>
      </div>
    </header>
  )

}


const App = () => {

  return (
    <body className="h-screen overflow-auto flex flex-col justify-start items-center bg-gradient-to-br from-zinc-50 via-purple-100 to-purple-400 dark:bg-gradient-to-tl dark:from-zinc-700 dark:via-purple-700 dark:to-fuchsia-500">
      <Header/>
      <Main/>
    </body>
  )

}

export default App
