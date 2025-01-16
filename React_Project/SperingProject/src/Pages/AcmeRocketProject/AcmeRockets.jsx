import React from 'react'
import rocketImage from '../../assets/img/rocketdab.png'
import rocketMan from '../../assets/img/rocketman.png'
import rocketride from '../../assets/img/rocketride.png'
import rocketlaunch from '../../assets/img/rocketlaunch.png'

const AcmeRockets = () => {
  return (
    <>
    <section className='min-h-screen bg-slate-50 dark:bg-black dark:text-white'>
        <header className='bg-teal-500 text-white sticky top-0 z-10'>
            <section className='max-w-4xl mx-auto p-4 flex justify-between items-center'>
                <h1 className=' font-medium text-3xl'>
                    <a href="#hero">Acme Rockets</a>
                </h1>
                <div>
                    <button id="mobile-open-button" className="text-3xx sm:hidden focus:outline-none">
                        &#9776;
                    </button>
                    <nav className="hidden sm:block space-x-8 text-xl" aria-label='main'>
                        <a href="#rockets" className='hover:opacity-50'>Our Rockets</a>
                        <a href="#testimonials" className='hover:opacity-50'>Testimonials</a>
                        <a href="#contact" className='hover:opacity-50'>Contact Us</a>
                    </nav>
                </div>

            </section>

        </header>
        <main className='max-w-4xl mx-auto'>
            <section id='hero' className='flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12'>
                <article className='sm:w-1/2'>
                <h2 className='max-w-md text-3xl font-bold text-center sm:text-4xl sm:text-left text-slate-900 dark:text-white'>We Boldy Go <span className="text-indigo-700 dark:text-indigo-300"> Where No Rocket</span> Has Gone Before ...</h2>
                <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                   We' re building rockets for the next century today. From the moon the Mars, Jupiter and beyound... 
                </p>
                <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                    Think Acme Rockets.
                </p>
                </article>
                <img className='w-1/2 ' src={rocketImage} alt="Rocket Dab" />

            </section>

    <hr className='mx-auto bg-white dark:bg-white w-1/2 h-[2px] ' />
    <section id="rockets" className='p-6 my-12'>
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-600 dark:text-white"
        >
        Our Rockets 
        </h2>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row  items-center gap-8">
            <li className=" w-2/3 sm:w-5/6 flex flex-col items-center border-solid border border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            <img className='w-1/2 mb-6' src={rocketMan} alt="" />
            <h3 className='text-3xl text-center text-slate-900 dark:text-white'>
                Explore 
            </h3>
            <p className='hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-500'>
                $ 
            </p>
            <p className='sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400'>
                Affordable Exploration 
            </p>
            </li>
            <li className=" w-2/3 sm:w-5/6 flex flex-col items-center border-solid border border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            <img className='w-1/2 mb-6' src={rocketride} alt="" />
            <h3 className='text-3xl text-center text-slate-900 dark:text-white'>
                Adventure  
            </h3>
            <p className='hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-500'>
                $$
            </p>
            <p className='sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400'>
                Best Selling Rocket!
            </p>
            </li>
            <li className=" w-2/3 sm:w-5/6 flex flex-col items-center border-solid border border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            <img className='w-1/2 mb-6' src={rocketlaunch} alt="" />
            <h3 className='text-3xl text-center text-slate-900 dark:text-white'>
                    Infinity 
            </h3>
            <p className='hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-500'>
                $$$
            </p>
            <p className='sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400'>
                Luxury Starship  
            </p>
            </li>
        </ul>
    </section>
    <hr className='mx-auto bg-white dark:bg-white w-1/2 h-[2px] ' />
    <section id="testimonials" className='p-6 my-12'>
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-600 dark:text-white"
        >
        Our Testimonials 
        </h2>
    </section>
    <hr className='mx-auto bg-white dark:bg-white w-1/2 h-[2px] ' />
    <section id="contact" className='p-6 my-12'>
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-600 dark:text-white"
        >
        Contact  Us        </h2>
    </section>
    
        </main>
    </section>
      
    </>
  )
}

export default AcmeRockets