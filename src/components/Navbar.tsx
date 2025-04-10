import { useState } from "react";

const YiWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const expertiseCards = [
    { src: "./assets/png/ai.png", title: "AI Solutions" },
    { src: "./assets/png/web-and-mobile.jpg", title: "Web & Mobile Apps" },
    { src: "./assets/png/qa (1).jpg", title: "QA" },
    { src: "./assets/png/devops.png", title: "DevOps" },
  ];

  return (
    <div className="font-source-sans-pro bg-[#03071c] text-white">
      {/* Header */}
      <header className="fixed z-50 w-full bg-[#03071c] py-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <div
            className="flex cursor-pointer items-center"
            onClick={() => (window.location.href = "/")}
          >
            <img
              src="./assets/jpeg/logo.svg"
              alt="Logo"
              className="h-12 w-12 rounded-full"
            />
            <span className="ml-2 text-2xl font-bold">
              YiConnect Technologies
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden rounded-lg border border-gray-500 bg-gray-500 p-2 md:flex">
            <nav className="hidden space-x-8 md:flex">
              <a href="/" className="text-gray-300 hover:text-white">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-white">
                About Us
              </a>
              <a
                href="#Our-Services"
                className="text-gray-300 hover:text-white"
              >
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
              src={
                isMenuOpen
                  ? "./assets/svg/ham-menu-close.svg"
                  : "./assets/svg/ham-menu.svg"
              }
              alt="Menu"
              className="h-8 w-8"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 bg-[#03071c] md:hidden">
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <a href="/" className="block text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block text-gray-300 hover:text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#Our-Services"
                  className="block text-gray-300 hover:text-white"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#Contact-Us"
                  className="block text-gray-300 hover:text-white"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="flex h-screen flex-col items-center justify-center bg-[#03071c] text-center">
        <h1 className="font-urbanist mb-8 text-center text-4xl font-bold md:text-6xl">
          Elevate Your Business with Next-Gen AI,
          <br className="hidden md:block" />
          Web & Mobile Apps
        </h1>
        <img
          className="-z-9 absolute left-[1rem] w-32 sm:left-[20rem] sm:w-48 md:left-[30rem] md:w-56 lg:w-[61rem]
"
          src="./assets/svg/Ellipse 2.svg"
          alt="Background Ellipse"
        />

        <p className="mb-8 max-w-2xl text-xl text-gray-300">
          Boost your business with smart tech. Automate tasks, improve customer
          experience, and gain an edge with AI, web, and mobile apps. Our
          experts build innovative solutions to transform your business.
        </p>
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg bg-[#885EFE] px-6 py-3.5 text-center text-base font-medium text-white hover:bg-[#774DDE] focus:outline-none focus:ring-4 focus:ring-[#BB9BFF]"
        >
          Get Started
          <svg
            className="h-5 w-5"
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
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <img
              src="./assets/png/63b0a64b5f4ae600b85ed4151030e9e93280b0ca-2160x2160.webp"
              alt="About Us"
              className="w-full rounded-lg md:w-1/2"
            />
            <div className="w-full md:w-1/2">
              <h2 className="mb-6 text-2xl font-bold text-[#885EFE]">
                About Us
              </h2>
              <p className="mb-8 text-3xl font-bold text-white">
                Driven by a relentless passion for technology, at YiConnect,
              </p>
              <ul className="mb-8 list-inside list-disc space-y-2 text-[#885EFE]">
                <li>Your success is our obsession.</li>
                <li>
                  We are transforming businesses with next-gen technology.
                </li>
                <li>And Beyond development, we craft journeys.</li>
              </ul>
              <p className="mb-8 text-2xl text-gray-300">
                We empower businesses to spearhead digital innovation,
                leveraging the transformative potential of AI to gain a
                competitive edge and scale effectively
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="Our-Services" className="bg-[#03071c] py-20">
        <div className="container mx-auto  px-4">
          <div className="flex flex-col items-center justify-between md:flex-row  md:gap-40">
            {/* Left Side - Text */}
            <div className="text-left md:w-1/2">
              <h2 className="mb-6 text-2xl font-bold text-[#885EFE]">
                Our Services
              </h2>
              <h2 className="mb-5 text-4xl  font-bold">
                Redefine the way you do business with YiConnect
              </h2>
            </div>

            {/* Right Side - SVGs */}
            <div className="flex justify-end gap-2 md:w-1/2">
              <img
                src="./assets/svg/ai solution svg.svg"
                alt="AI Solutions"
                className="h-auto w-24 md:h-72 md:w-56"
              />
              <img
                src="./assets/svg/new product development svg.svg"
                alt="Product Development"
                className="h-auto w-24 md:h-72 md:w-56"
              />
              <img
                src="./assets/svg/it consulting svg.svg"
                alt="IT Consulting"
                className="h-auto w-24 md:mb-8 md:h-72 md:w-56"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AIcards */}

      <div className="flex min-h-screen flex-col items-center justify-start bg-[#03071c] to-gray-50 px-8 py-16">
        <h2 className="mb-12 text-2xl font-bold text-[#885EFE]">
          Our Expertise
        </h2>

        <div className="relative w-full max-w-6xl">
          {/* Background decorative element */}
          <div className="absolute right-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-purple-100 opacity-60 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 -z-10 h-80 w-80 rounded-full bg-blue-50 opacity-50 blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-16 lg:gap-x-24">
            {expertiseCards.map((item, index) => (
              <div
                key={index}
                className="group relative mx-auto flex w-full max-w-sm flex-col rounded-lg border border-slate-200 bg-white
                         transition-all duration-300 ease-in-out
                         hover:scale-[1.02]
                         hover:border-purple-200
                         hover:shadow-[0_0_30px_rgba(136,94,254,0.15)]"
              >
                <div className="relative m-3 h-56 overflow-hidden rounded-md">
                  <img
                    src={item.src}
                    alt={`${item.title} illustration`}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  {/* Glow overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#885EFE]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>

                <div className="p-5">
                  <h3 className="mb-2 text-center text-xl font-semibold text-slate-800 transition-colors duration-300 group-hover:text-[#885EFE]">
                    {item.title}
                  </h3>

                  {/* Hover indicator line */}
                  <div className="mx-auto h-0.5 w-0 bg-[#885EFE] transition-all duration-300 group-hover:w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* contact form  */}

      <section id="Contact-Us" className="bg-[#03071c] dark:bg-gray-900">
        <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
          <h2 className="mb-4 text-center  text-2xl font-extrabold tracking-tight text-[#885EFE]  ">
            Contact Us
          </h2>
          <p className="mb-8 text-center font-light text-gray-500 sm:text-xl  lg:mb-16">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="text"
                id="subject"
                className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm "
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm "
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="hover:bg-primary-800 focus:ring-primary-300 rounded-lg bg-blue-400 px-5 py-3 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-fit "
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-[#03071c] py-8">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center">
            <img
              src="./assets/jpeg/logo.svg"
              alt="Logo"
              className="h-12 w-12"
            />
            <div className="ml-4">
              <span className="text-2xl font-bold">YiConnect</span>
              <span className="block text-sm font-bold text-white">
                Technologies
              </span>
            </div>
          </div>
          <div className="text-left">
            <h4 className="text-lg font-bold">Reach Us</h4>
            <p className="flex items-center text-gray-400">
              <img
                src="./assets/jpeg/mail.svg"
                alt="Mail"
                className="mr-2 h-4 w-4"
              />
              hello@yiconnect.io
            </p>
            <p className="flex items-center text-gray-400">
              <img
                src="./assets/jpeg/locationl.svg"
                alt="Location"
                className="mr-2 h-4 w-4"
              />
              Hyderabad -86
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default YiWebsite;
