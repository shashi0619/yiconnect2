import React, { useState } from "react";

const YiWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#03071c] text-white font-source-sans-pro">
      {/* Header */}
      <header className="fixed w-full z-50 bg-[#03071c] shadow-lg py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <img
              src="./assets/jpeg/logo.svg"
              alt="Logo"
              className="w-12 h-12 rounded-full"
            />
            <span className="ml-2 text-2xl font-bold">YiConnect Technologies</span>
          </div>

          {/* Desktop Menu */}
          <div className="bg-gray-500 border border-gray-500 hidden md:flex rounded-lg p-2">
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-300 hover:text-white">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-white">
                About Us
              </a>
              <a href="#Our-Services" className="text-gray-300 hover:text-white">
                Projects
              </a>
              <a href="#Contact-Us" className="text-gray-300 hover:text-white">
                Contact Us
              </a>
            </nav>
          </div>


          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={toggleMenu}>
            <img
              src={isMenuOpen ? "./assets/svg/ham-menu-close.svg" : "./assets/svg/ham-menu.svg"}
              alt="Menu"
              className="w-8 h-8"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#03071c] mt-4">
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <a href="/" className="block text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="block text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#Our-Services" className="block text-gray-300 hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#Contact-Us" className="block text-gray-300 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="h-screen bg-[#03071c] flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-urbanist text-center font-bold mb-8">
          Elevate Your Business with Next-Gen AI,<br className="hidden md:block" />
          Web & Mobile Apps
        </h1>
        <img
          className="absolute -z-9 left-[1rem] sm:left-[20rem] md:left-[30rem] w-32 sm:w-48 md:w-56 lg:w-[61rem]
"
          src="./assets/svg/Ellipse 2.svg"
          alt="Background Ellipse"
        />

        <p className="text-xl text-gray-300 max-w-2xl mb-8">
          Boost your business with smart tech. Automate tasks, improve customer experience, and gain an edge with AI, web, and mobile apps. Our experts build innovative solutions to transform your business.
        </p>
        <button
          type="button"
          className="flex items-center gap-2 px-6 py-3.5 text-base font-medium text-white bg-[#885EFE] hover:bg-[#774DDE] focus:ring-4 focus:outline-none focus:ring-[#BB9BFF] rounded-lg text-center"
        >
          Get Started
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>


      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <img
              src="./assets/png/63b0a64b5f4ae600b85ed4151030e9e93280b0ca-2160x2160.webp"
              alt="About Us"
              className="w-full md:w-1/2 rounded-lg"
            />
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-6 text-[#885EFE]">
                About Us
              </h2>
              <p className="text-white font-bold text-3xl mb-8">
                Driven by a relentless passion for technology, at YiConnect,
              </p>
              <ul className="list-disc list-inside text-[#885EFE] mb-8 space-y-2">
                <li>Your success is our obsession.</li>
                <li>We are transforming businesses with next-gen technology.</li>
                <li>And Beyond development, we craft journeys.</li>
              </ul>
              <p className="text-gray-300 text-2xl mb-8">We empower businesses to spearhead digital innovation, leveraging the transformative potential of AI to gain a competitive edge and scale effectively

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="Our-Services" className="py-20 bg-[#03071c]">
        <div className="container mx-auto  px-4">
          <div className="flex flex-col md:flex-row items-center md:gap-40  justify-between">
            {/* Left Side - Text */}
            <div className="md:w-1/2 text-left">
              <h2 className="text-2xl font-bold text-[#885EFE] mb-6">Our Services</h2>
              <h2 className="text-4xl mb-5  font-bold">Redefine the way you do business with YiConnect</h2>
            </div>

            {/* Right Side - SVGs */}
            <div className="md:w-1/2 flex justify-end gap-2">
              <img src="./assets/svg/ai solution svg.svg" alt="AI Solutions" className="w-24 md:w-56 h-auto md:h-72" />
              <img src="./assets/svg/new product development svg.svg" alt="Product Development" className="w-24 md:w-56 h-auto md:h-72" />
              <img src="./assets/svg/it consulting svg.svg" alt="IT Consulting" className="w-24 md:w-56 h-auto md:mb-8 md:h-72" />
            </div>
          </div>
        </div>
      </section>



      {/* AIcards */}



      <div className="flex flex-col items-center justify-start min-h-screen px-8">
        <h2 className="text-2xl font-bold text-[#885EFE] mb-12">Our Expertise</h2>
        <img
          className="absolute -z-9 left-[1rem] sm:left-[20rem] md:left-[50rem] w-32 sm:w-48 md:w-56 lg:w-[61rem]
"
          src="./assets/svg/Ellipse 2.svg"
          alt="Background Ellipse"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-36 md:gap-y-16 gap-6">
          {[
            { src: "./assets/png/ai.png", title: "AI Solutions" },
            { src: "./assets/png/web-and-mobile.jpg", title: "Web & Mobile Apps" },
            { src: "./assets/png/qa (1).jpg", title: "QA" },
            { src: "./assets/png/devops.png", title: "DevOps" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-80"
            >
              <div className="relative h-48 m-2.5 overflow-hidden text-white rounded-md">
                <img src={item.src} alt="card-image" className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <h6 className="mb-2 text-slate-800 text-xl text-center font-semibold">{item.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* contact form  */}


      <section id="Contact-Us" className="bg-[#03071c] dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-2xl  text-[#885EFE] tracking-tight font-extrabold text-center  ">Contact Us</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-400 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
          </form>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-[#03071c] py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="./assets/jpeg/logo.svg" alt="Logo" className="w-12 h-12" />
            <div className="ml-4">
              <span className="text-2xl font-bold">YiConnect</span>
              <span className="block font-bold text-sm text-white">Technologies</span>
            </div>
          </div>
          <div className="text-left">
            <h4 className="text-lg font-bold">Reach Us</h4>
            <p className="text-gray-400 flex items-center">
              <img src="./assets/jpeg/mail.svg" alt="Mail" className="w-4 h-4 mr-2" />
              hello@yiconnect.io
            </p>
            <p className="text-gray-400 flex items-center">
              <img src="./assets/jpeg/locationl.svg" alt="Location" className="w-4 h-4 mr-2" />
              Hyderabad -86
            </p>
          </div>
        </div>
      </footer>
    </div >
  );
};

export default YiWebsite;