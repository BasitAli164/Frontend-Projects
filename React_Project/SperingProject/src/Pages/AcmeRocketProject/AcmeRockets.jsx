import React, { useState } from "react";
import rocketImage from "../../assets/img/rocketdab.png";
import rocketMan from "../../assets/img/rocketman.png";
import rocketride from "../../assets/img/rocketride.png";
import rocketlaunch from "../../assets/img/rocketlaunch.png";

const AcmeRockets = () => {
  const [toggle,setToggel]=useState(false);
  const handleToggle=()=>{
    setToggel(!toggle)
  }
  return (
    <>
      <section className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
        <header className="bg-teal-500 text-white sticky top-0 z-10">
          <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
            <h1 className=" font-medium text-3xl">
              <a href="#hero">🚀 Acme Rockets</a>
            </h1>
            <div>
              <button
                id="hamburger-button"
                className="text-3xx md:hidden cursor-pointer"
              >
                &#9776;
              </button>
              <nav
                className="hidden md:block space-x-8 text-xl"
                aria-label="main"
              >
                <a href="#rockets" className="hover:opacity-50">
                  Our Rockets
                </a>
                <a href="#testimonials" className="hover:opacity-50">
                  Testimonials
                </a>
                <a href="#contact" className="hover:opacity-50">
                  Contact Us
                </a>
              </nav>
            </div>
          </section>
          <section id="mobile-menu" className="absolute top-0 bg-black w-full text-5xl  flex-col justify-center origin-top animate-open-menu hidden">
            <button className="text-8 xl self-end px-6">
              &times; 
            </button>
            <nav className="flex flex-col min-h-screen items-center py-8 " aria-label="mobile">
              <a href="#hero" className="w-full text-center py-6 hover:opacity-90">Home</a>
              <a href="#rokets" className="w-full text-center py-6 hover:opacity-90">Rockets</a>
              <a href="#testimonials" className="w-full text-center py-6 hover:opacity-90">Testimonial</a>
              <a href="#contact" className="w-full text-center py-6 hover:opacity-90">Contact</a>
              <a href="#footer" className="w-full text-center py-6 hover:opacity-90">Legal</a>

            </nav>
          </section>
        </header>
        <main className="max-w-4xl mx-auto">
          <section
            id="hero"
            className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
          >
            <article className="sm:w-1/2">
              <h2 className="max-w-md text-3xl font-bold text-center sm:text-4xl sm:text-left text-slate-900 dark:text-white">
                We Boldy Go{" "}
                <span className="text-indigo-700 dark:text-indigo-300">
                  {" "}
                  Where No Rocket
                </span>{" "}
                Has Gone Before ...
              </h2>
              <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                We' re building rockets for the next century today. From the
                moon the Mars, Jupiter and beyound...
              </p>
              <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                Think Acme Rockets.
              </p>
            </article>
            <img className="w-1/2 " src={rocketImage} alt="Rocket Dab" />
          </section>

          <hr className="mx-auto bg-white dark:bg-white w-1/2 h-[2px] " />
          <section id="rockets" className="p-6 my-12 widescreen:section-min-height tallscreen:section-min-height scroll-mt-16">
            <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-600 dark:text-white">
              Our Rockets
            </h2>
            <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row  items-center gap-8">
              <li className=" w-2/3 sm:w-5/6 flex flex-col items-center border-solid border border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
                <img className="w-1/2 mb-6" src={rocketMan} alt="" />
                <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                  Explore
                </h3>
                <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-500">
                  $
                </p>
                <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
                  Affordable Exploration
                </p>
              </li>
              <li className=" w-2/3 sm:w-5/6 flex flex-col items-center border-solid border border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
                <img className="w-1/2 mb-6" src={rocketride} alt="" />
                <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                  Adventure
                </h3>
                <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-500">
                  $$
                </p>
                <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
                  Best Selling Rocket!
                </p>
              </li>
              <li className=" w-2/3 sm:w-5/6 flex flex-col items-center border-solid border border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
                <img className="w-1/2 mb-6" src={rocketlaunch} alt="" />
                <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                  Infinity
                </h3>
                <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-500">
                  $$$
                </p>
                <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
                  Luxury Starship
                </p>
              </li>
            </ul>
          </section>
          <hr className="mx-auto bg-white dark:bg-white w-1/2 h-[2px] " />
          <section id="testimonials" className="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height">
            <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-600 dark:text-white">
              Our Testimonials
            </h2>
            <figure className="my-12 ">
              <blockquote className="bg-teal-400 border-teal-600 dark:bg-black pl-14 py-12 rounded-3xl relative">
                <p
                  className="text-2xl sm-sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201c'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2
                before:translate-y-2 after:content-['\201d'] after:font-serif after:absolute after:bottom-[-50px]  after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:translate-x-2
                after:translate-y-2"
                >
                  Acme has always been there for me. Their Explorer rocket
                  arrived in a wooden crate as expected. Lifelong customer! A++
                  shopping experience!
                </p>
              </blockquote>
              <figcaption className="italic text-xl sm:text-2xl text-right text-slate-500 dark:text-slate-400 ">
                &#8212;Wile E. Coyete, Genius
              </figcaption>
            </figure>
            <figure className="my-12 ">
              <blockquote className="bg-teal-400 border-teal-600 dark:bg-black pl-14 py-12 rounded-3xl relative">
                <p
                  className="text-2xl sm-sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201c'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2
                before:translate-y-2 after:content-['\201d'] after:font-serif after:absolute after:bottom-[-50px]  after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:translate-x-2
                after:translate-y-2"
                >
                  The Acme Adventurer Rocket has thwarted my Illudium Q-36
                  Explosive Space Modulator on several occassions. This makes me
                  very, very angry! Nevertheless, K-9 and I have awarded Acme
                  the Martian contract for space exploration rockets based on
                  Acme's quality and sturdy designs.
                </p>
              </blockquote>
              <figcaption className="italic text-xl sm:text-2xl text-right text-slate-500 dark:text-slate-400 ">
                &#8212;Marvin the Martian & K-9
              </figcaption>
            </figure>
            <figure className="my-12 ">
              <blockquote className="border-teal-600 dark:bg-black pl-14 py-12 rounded-3xl relative bg-teal-400 ">
                <p
                  className="text-2xl sm-sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201c'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2
                before:translate-y-2 after:content-['\201d'] after:font-serif after:absolute after:bottom-[-50px]  after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:translate-x-2
                after:translate-y-2"
                >
                  I knew I not only wanted —{" "}
                  <span className="italic">I needed </span> — Acme's Infinity
                  Rocket for my mission in space. Acme delievered in one day!
                  Nothing says Take me to your leader like Acme's Infinity
                  Rocket! 💯
                </p>
              </blockquote>
              <figcaption className="italic text-xl sm:text-2xl text-right text-slate-500 dark:text-slate-400 ">
                &#8212;Buzz Lightyear
              </figcaption>
            </figure>
          </section>
          <hr className="mx-auto bg-white dark:bg-white w-1/2 h-[2px] " />
          <section id="contact" className="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height">
            <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-600 dark:text-white">
              Contact Us
            </h2>
            <form
              action=""
              className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4"
            >
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                minLength={3}
                maxLength={60}
                placeholder="Your Subject"
                className="w-full text-black text-2xl  sm:text-3xl p-3  rounded-xl border border-solid border-slate-900 dark:border-none"
              />
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Your Message"
                className="w-full text-black text-2xl  sm:text-3xl p-3  rounded-xl border border-solid border-slate-900 dark:border-none"
              ></textarea>
              <button className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none">
                Submit
              </button>
            </form>
          </section>
        </main>
        <footer className="bg-teal-700 text-white text-xl " id="footer">
          <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
            <address>
              <h2>Acme Rocket-Power Products, Inc.</h2>
              555 Astro Way <br />
              Email: <a href="#">Inquires@acemerockets.com</a>
              Phone: <a href="#"> (555) 555-5555</a>
            </address>
            <nav className="hidden md:flex flex-col gap-2 " aria-label="footer">
              <a href="#rocket" className="hover:opacity-90 ">
                Our Rockets
              </a>
              <a href="#testimonials" className="hover:opacity-90 ">
                Testimonials
              </a>
              <a href="#contact" className="hover:opacity-90 ">
                Contact
              </a>
            </nav>
            <div className="flex flex-col sm:gap-2">
              <p className="text-right">
                Copyright &copy; <span id="year"> 2024</span>
              </p>
              <p className="text-right">All Rigths Reservered</p>
            </div>
          </section>
        </footer>
      </section>
    </>
  );
};

export default AcmeRockets;
