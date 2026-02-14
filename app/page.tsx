import { FiSettings } from "react-icons/fi";
import Menu from "./Components/Commen/Menu";
import Image from "next/image";
import { MdArrowDropUp } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import MouseTracker from "./Components/Commen/MouseTracker";
import ClickWave from "./Components/Commen/ClickWave";
import { HiShieldCheck } from "react-icons/hi2";
import { FiArrowUpRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import Section7 from "./Components/Home/Section07";
import Footer from "./Components/Commen/Footer";

export default function Home() {
  return (
    <div>
      <MouseTracker />
      <ClickWave />
      <main>
        <Menu />
        <section className="mt-20">
          <Section1 />
        </section>
        <section className="mt-40">
          <Section2 />
        </section>
        <section className="mt-10">
          <Section3 />
        </section>
        <section className="mt-50">
          <Section4 />
        </section>
        <section className="flex justify-center mt-25">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center bg-[#D3DBF8] w-fit px-8 text-[#1E376D] py-2 rounded-3xl mb-4">TESTIMONIALS</div>
            <div className="text-center text-4xl font-semibold">Honest Review From Our<br />Happy Customers</div>
          </div>
        </section>
        <section className="mt-50">
          <Section5 />
        </section>
        <section className="mt-10">
          <Section6 />
        </section>
        <section className="mt-10">
          <Section7 />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
}



function Section6() {
  const packages = [
    {
      title: "Single Project",
      price: "95",
      description:
        "Lorem ipsum may be used as a placeholder before final copy is available.",
      isPopular: false,
    },
    {
      title: "Large Project",
      price: "256",
      description:
        "Lorem ipsum may be used as a placeholder before final copy is available.",
      isPopular: true,
      badge: "Best Deal",
    },
    {
      title: "Monthly Project",
      price: "456",
      description:
        "Lorem ipsum may be used as a placeholder before final copy is available.",
      isPopular: false,
    },
  ];

  return (
    <section className="w-full py-20 bg-white flex flex-col items-center">
      {/* Title Section */}
      <div className="text-center mb-16">
        <span className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
          Price & Packages
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B345F] mt-6">
          Get The Best Package For Your Business
        </h2>
      </div>

      {/* Pricing Cards Container */}
      <div className="w-[90%] max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-0 relative">
        {/* The background container for the outer two cards */}
        <div className="absolute inset-0 bg-gray-300 rounded-xl shadow-md h-full top-6 md:top-0 z-0 mx-4 md:mx-0"></div>

        {packages.map((pkg, index) => {
          // Conditional styles for the popular card
          const cardClasses = pkg.isPopular
            ? "bg-[#1B345F] text-white z-20 md:-my-6 shadow-xl"
            : "bg-transparent text-gray-800 z-10 mt-6 md:mt-0";

          const buttonClasses = pkg.isPopular
            ? "bg-gray-300 text-[#1B345F] hover:bg-white"
            : "bg-[#1B345F] text-white hover:bg-blue-900";

          const textMutedClasses = pkg.isPopular
            ? "text-gray-300"
            : "text-gray-600";

          return (
            <div
              key={index}
              className={`flex flex-col p-10 rounded-xl relative transition-all duration-300 ${cardClasses}`}
            >
              {/* Best Deal Badge */}
              {pkg.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-400 text-[#1B345F] text-sm font-bold px-6 py-2 rounded-full flex items-center gap-2 shadow-sm">
                  <FaThumbsUp />
                  {pkg.badge}
                </div>
              )}

              {/* Card Content */}
              <div className="grow">
                <h3 className="text-2xl font-bold">{pkg.title}</h3>
                <p className={`text-sm mt-2 ${textMutedClasses}`}>Start From</p>
                <div className="text-5xl font-bold mt-4 mb-6">${pkg.price}</div>
                <p className={`leading-relaxed mb-8 ${textMutedClasses}`}>
                  {pkg.description}
                </p>
              </div>

              {/* Order Now Button */}
              <button
                className={`w-full py-4 rounded-md font-bold text-sm tracking-wider transition-colors ${buttonClasses}`}
              >
                ORDER NOW
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}




function Section5() {
  // Stats Data Array
  const stats = [
    { count: "29189", label: "Happy Clients", icon: false },
    { count: "2981", label: "Managed Projects", icon: true },
    { count: "27", label: "Years EXP.", icon: false },
    { count: "350", label: "Experienced Staffs", icon: true },
  ];

  // Testimonials Data Array
  const testimonials = [
    {
      quote: "They provide a high-quality service that is always reliable.",
      name: "Jeffery Barrett",
      role: "Finance Manager",
    },
    {
      quote: "They provide a high-quality service that is always reliable.",
      name: "Caisa Larsson",
      role: "Project Manager",
    },
    {
      quote: "They provide a high-quality service that is always reliable.",
      name: "Sanako Onodera",
      role: "Entrepreneur",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-[#F9FAFB] pb-32">

      {/* Background Image Container (Fixed height to allow overlapping) */}
      <div className="w-full h-[500px] relative">
        <Image
          src="/Sections/S5/image0.png"
          alt="Background Image"
          fill
          className="object-cover object-top"
        />
        {/* Optional subtle overlay to make the image match the reference exactly */}
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      {/* Main Container Wrapper (Pulled up using negative margin) */}
      <div className="w-[90%] md:w-[85%] max-w-[1100px] relative -mt-40 z-10">

        {/* Floating Overlapping Double Quotes Icon */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#12213D] rounded-full flex items-center justify-center shadow-2xl z-20">
          <FaQuoteLeft size={30} className="text-white" />
        </div>

        {/* Main Blue Card */}
        {/* bg-[#223A6D] matches the slightly lighter navy blue in your image */}
        <div className="bg-[#223A6D] text-white rounded-xl p-10 md:p-14 flex flex-col md:flex-row gap-12 lg:gap-16 shadow-2xl relative">

          {/* --- LEFT COLUMN --- */}
          <div className="w-full md:w-1/2 flex flex-col">

            {/* Tim Cook Quote */}
            <h3 className="text-xl md:text-2xl font-semibold leading-snug mb-6">
              They provide a high-quality <br className="hidden md:block" /> service that is always reliable.
            </h3>

            <div className="flex items-center gap-4 mb-8">
              {/* Alphabet Avatar - Tim Cook */}
              <div className="w-[55px] h-[55px] rounded-full bg-white text-[#223A6D] flex items-center justify-center text-xl font-bold shrink-0">
                T
              </div>
              <div>
                <h4 className="font-bold text-base md:text-lg">Tim Cook</h4>
                <p className="text-xs md:text-sm text-blue-200">CEO, APPLE INC.</p>
              </div>
            </div>

            {/* Horizontal Divider */}
            <hr className="border-[#385387] mb-8" />

            {/* Dark Inner Stats Box (mb-[-80px] forces it to stick out the bottom) */}
            {/* bg-[#12213D] matches the darker inner box color */}
            <div className="bg-[#12213D] rounded-xl py-10 px-6 flex flex-col shadow-xl -mb-24 relative z-10">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  {/* Stat Item Content */}
                  <div className="relative flex flex-col items-center">

                    {/* Conditionally Rendered Icon positioned absolute to the left */}
                    {stat.icon && (
                      <div className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 bg-[#B0B5BF] rounded-full p-2 shrink-0">
                        <HiShieldCheck size={20} className="text-[#12213D]" />
                      </div>
                    )}

                    {/* Numbers and Labels Centered */}
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{stat.count}</h3>
                    <p className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</p>
                  </div>

                  {/* Inner dividers (skipped on the last item) */}
                  {index !== stats.length - 1 && (
                    <hr className="border-[#1E376D] my-6 w-[80%] mx-auto" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
            <div className="flex flex-col">
              {testimonials.map((item, index) => (
                <div key={index} className="flex flex-col mb-6 last:mb-0">
                  <h3 className="text-lg md:text-xl font-semibold leading-snug mb-4">
                    {item.quote}
                  </h3>
                  <div className="flex items-center gap-4 mb-6">
                    {/* Dynamic Alphabet Avatar */}
                    <div className="w-[45px] h-[45px] rounded-full bg-white text-[#223A6D] flex items-center justify-center text-lg font-bold shrink-0">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg">{item.name}</h4>
                      <p className="text-xs md:text-sm text-blue-200">{item.role}</p>
                    </div>
                  </div>

                  {/* Dividers between testimonials spanning full width of right column */}
                  {index !== testimonials.length - 1 && (
                    <hr className="border-[#385387]" />
                  )}
                </div>
              ))}
            </div>

            {/* More Testimonials Button */}
            <button className="bg-[#B0B5BF] text-[#12213D] font-bold py-3 px-6 rounded-sm w-fit mt-8 hover:bg-white transition-colors uppercase tracking-wider text-xs md:text-sm shadow-md">
              More Testimonials
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}


function Section4() {
  // Array holding the content for the 8 cards (removed the static isFilled property)
  const services = [
    {
      title: "Accounting",
      desc: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
      imgSrc: "/Sections/SideIMG1.png",
    },
    {
      title: "ITR Filing",
      desc: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
      imgSrc: "/Sections/SideIMG1.png",
    },
    {
      title: "Gst Registration",
      desc: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
      imgSrc: "/Sections/SideIMG1.png",
    },
    {
      title: "Accounting",
      desc: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
      imgSrc: "/Sections/SideIMG1.png",
    },
    {
      title: "Accounting",
      desc: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
      imgSrc: "/Sections/SideIMG1.png",
    },
    {
      title: "ITR Filing",
      desc: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
      imgSrc: "/Sections/SideIMG1.png",
    },
    {
      title: "Gst Registration",
      desc: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
      imgSrc: "/Sections/SideIMG1.png",
    },
    {
      title: "Accounting",
      desc: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
      imgSrc: "/Sections/SideIMG1.png",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full py-10 bg-[#F9FAFB]">
      {/* 4-Column Grid Container */}
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {services.map((service, index) => (
          // Added 'group' and 'cursor-pointer' to the parent card container
          <div key={index} className="flex flex-col gap-4 group cursor-pointer">

            {/* Card Image */}
            <div className="w-full h-48 relative rounded-lg overflow-hidden shadow-sm">
              <Image
                src={service.imgSrc}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-[#1E376D] mt-2 transition-colors duration-300 group-hover:text-blue-500">
              {service.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {service.desc}
            </p>

            {/* Button with group-hover effects */}
            <button
              className="w-fit mt-auto px-4 py-2 border rounded-md flex items-center gap-2 text-sm font-medium transition-all duration-300 
              bg-transparent text-[#1E376D] border-gray-300 
              group-hover:bg-[#1E376D] group-hover:text-white group-hover:border-[#1E376D]"
            >
              Book Now <FiArrowUpRight size={16} />
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="w-full">
      <div className="relative w-full h-[600px]">
        <div className="bg-[#1E376D] absolute z-1  w-3xl h-[80%] bottom-[-20%]">
          <div className="w-full h-full relative flex justify-end items-center">
            <div className="w-[80%] h-[60%] z-20">
              <div className="bg-[#D3DBF8] w-fit px-8 text-[#1E376D] py-2 rounded-3xl">OUR SERVICES</div>
              <h2 className="text-white text-5xl mt-10 font-semibold leading-tight tracking-wide">
                We Provide a Wide <br />Range Of Services That <br />Help Businesses
              </h2>
            </div>
            <Image
              src="/Sections/ImgS3-2.JPG"
              alt="Menu Logo"
              fill
              className="object-contain absolute mt-20"
            />
          </div>
        </div>
        <Image
          src="/Sections/ImgS3-1.png"
          alt="Menu Logo"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}




function Section1() {
  const items = [
    {
      title: "Accounting",
      desc: "Streamline your financial records and ensure accurate bookkeeping with our expert team.",
    },
    {
      title: "Project Management",
      desc: "Keep your projects on track, on time, and within budget with our comprehensive management tools.",
    },
    {
      title: "ITR Filing",
      desc: "Hassle-free income tax return filing tailored to maximize your deductions and compliance.",
    },
  ];

  return (
    <div className="flex justify-end items-center ">
      <div className="flex w-[90%]">
        <div className="mt-10">
          <h1 className="text-5xl font-semibold tracking-wide ">
            Expert Financial & <br />
            Compliance Services <br />
            Simplified.
          </h1>
          <p className="w-[75%] mt-10 text-md">
            Reliable accounting, seamless tax filing, and end-to-end business
            registrations. Professional solutions for every stage of your business
            journey.
          </p>
          <div className="flex gap-5 mt-10">
            <button className="bg-[#1E376D] text-[#B0B5BF] px-5 py-2 font-semibold">
              CONTACT US
            </button>
            <button className="bg-[#B0B5BF] text-[#1E376D] px-5 py-2 font-semibold">
              SERVICES
            </button>
          </div>
          <p className="mt-10 text-md">
            Companies all over the world use our services to help manage their
            businesses.
          </p>
          <div className="flex gap-2 mt-10 ml-[-28px]">
            <Image
              src="/Sections/Google.png"
              alt="Menu Logo"
              width={125}
              height={40}
            />
            <Image
              src="/Sections/Google.png"
              alt="Menu Logo"
              width={120}
              height={40}
            />
            <Image
              src="/Sections/Google.png"
              alt="Menu Logo"
              width={120}
              height={40}
            />
          </div>
        </div>

        <div className="w-[55%] flex justify-end relative">
          <div className="flex flex-col gap-6 absolute bottom-15 left-0 z-20">
            {items.map((item) => (
              <div key={item.title} className="relative group">

                {/* Main Button */}
                <div className="bg-[#B0B5BF] duration-500 hover:bg-[#1E376D] hover:text-[#B0B5BF] text-[#1E376D] w-80 px-8 rounded-md h-16 gap-5 items-center flex cursor-pointer shadow-md">
                  <FiSettings size={20} />
                  {item.title}
                </div>

                {/* Left-Side Popup */}
                {/* right-full pushes it to the left edge, mr-4 adds a small gap */}
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 w-64 bg-white p-5 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none group-hover:pointer-events-auto border border-gray-200">

                  {/* Flipped triangle pointer: moved to -right-2 and updated borders */}
                  <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-t border-r border-gray-200" />

                  <h3 className="text-[#1E376D] font-bold text-lg mb-2 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 relative z-10">
                    {item.desc}
                  </p>
                  <button className="text-sm font-semibold text-[#1E376D] hover:text-blue-500 transition-colors flex items-center gap-1 relative z-10">
                    Read More <span>→</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
          <Image
            src="/Sections/SideIMG1.png"
            alt="Menu Logo"
            width={540}
            height={540}
            className="rounded-bl-xl rounded-tl-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}


function Section2() {
  return (
    <div className="flex justify-start items-center">
      <div className="flex gap-20">

        {/* Left Side: Image and Shield Check section */}
        <div className="w-[40%] h-180 flex justify-start relative">
          <Image
            src="/Sections/SideIMG1.png"
            alt="Menu Logo"
            width={700}
            height={700}
            className="h-[85%] rounded-br-xl rounded-tr-xl"
          />
          <div className="absolute bottom-[20%] right-[10%] ">
            <div className="relative flex flex-col justify-start items-center">
              <div className="absolute right-[-30px] bg-[#B0B5BF] p-2 rounded-full">
                <HiShieldCheck size={50} className="text-[#1E376D]" />
              </div>
              <div className="w-xs">
                <div className="mt-10 px-5 py-2 bg-[#1E376D] text-[#B0B5BF]">
                  100% Satisfied customers
                </div>
                <div className="mt-5 px-3 py-5 h-max bg-[#1E376D] w-full text-[#B0B5BF]">
                  <ul className="flex flex-col gap-5 h-30 overflow-y-scroll thin-scrollbar pr-2">
                    <li className="flex gap-5">
                      <div className="bg-white font-bold  text-[#1E376D] flex justify-center items-center w-9 h-9 rounded-full">
                        IF
                      </div>
                      <div>
                        <p>Rosanna W. Atkinson</p>
                        <p className="text-[10px]">ITR Filing</p>
                      </div>
                    </li>
                    <li className="flex gap-5">
                      <div className="bg-white font-bold text-[#1E376D] flex justify-center items-center w-9 h-9 rounded-full">
                        IF
                      </div>
                      <div>
                        <p>Rosanna W. Atkinson</p>
                        <p className="text-[10px]">ITR Filing</p>
                      </div>
                    </li>
                    <li className="flex gap-5">
                      <div className="bg-white font-bold text-[#1E376D] flex justify-center items-center w-9 h-9 rounded-full">
                        IF
                      </div>
                      <div>
                        <p>Rosanna W. Atkinson</p>
                        <p className="text-[10px]">ITR Filing</p>
                      </div>
                    </li>
                    <li className="flex gap-5">
                      <div className="bg-white font-bold text-[#1E376D] flex justify-center items-center w-9 h-9 rounded-full">
                        IF
                      </div>
                      <div>
                        <p>Rosanna W. Atkinson</p>
                        <p className="text-[10px]">ITR Filing</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Why Choose Our Services */}
        <div className="pl-10 w-[60%]">
          <div className="bg-[#D3DBF8] w-fit px-6 py-2 rounded-3xl">WHY US</div>
          <h1 className="text-5xl font-semibold tracking-wide mt-5">
            Why Choose Our Services
          </h1>
          <p className="w-[75%] mt-10 text-md">
            Lorem ipsum dolor sit amet consectetur. Auctor ultricies mauris
            euismod mattis lectus. Tempor nec tempor aenean dis dictumst aliquet
            nunc nulla sem. Eu sagittis id sit semper hendrerit sed venenatis.
          </p>

          <div className="gap-6 flex flex-col w-2xl mt-10">

            {/* Dropdown Item 1 */}
            <div className="group bg-[#B0B5BF] text-[#1E376D] flex flex-col px-8 py-5 rounded-md gap-0 hover:bg-[#1E376D] hover:text-[#B0B5BF] transition-colors duration-300 cursor-pointer">
              <div className="items-center flex justify-between w-full">
                <div className="flex gap-5 items-center text-xl font-semibold">
                  <FaAward size={20} />
                  Reliable Services
                </div>
                <div>
                  <MdArrowDropUp
                    size={30}
                    className="rotate-180 group-hover:rotate-0 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <p className="pt-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Auctor ultricies mauris
                  euismod mattis lectus. Tempor nec tempor aenean dis dictumst
                  aliquet nunc nulla sem. Eu sagittis id sit semper hendrerit
                  sed venenatis.
                </p>
              </div>
            </div>

            {/* Dropdown Item 2 */}
            <div className="group bg-[#B0B5BF] text-[#1E376D] flex flex-col px-8 py-5 rounded-md gap-0 hover:bg-[#1E376D] hover:text-[#B0B5BF] transition-colors duration-300 cursor-pointer">
              <div className="items-center flex justify-between w-full">
                <div className="flex gap-5 items-center text-xl font-semibold">
                  <FaAward size={20} />
                  High Level Professionals
                </div>
                <div>
                  <MdArrowDropUp
                    size={30}
                    className="rotate-180 group-hover:rotate-0 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <p className="pt-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Auctor ultricies mauris
                  euismod mattis lectus. Tempor nec tempor aenean dis dictumst
                  aliquet nunc nulla sem. Eu sagittis id sit semper hendrerit
                  sed venenatis.
                </p>
              </div>
            </div>

            {/* Dropdown Item 3 */}
            <div className="group bg-[#B0B5BF] text-[#1E376D] flex flex-col px-8 py-5 rounded-md gap-0 hover:bg-[#1E376D] hover:text-[#B0B5BF] transition-colors duration-300 cursor-pointer">
              <div className="items-center flex justify-between w-full">
                <div className="flex gap-5 items-center text-xl font-semibold">
                  <FaAward size={20} />
                  Adaptability
                </div>
                <div>
                  <MdArrowDropUp
                    size={30}
                    className="rotate-180 group-hover:rotate-0 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <p className="pt-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Auctor ultricies mauris
                  euismod mattis lectus. Tempor nec tempor aenean dis dictumst
                  aliquet nunc nulla sem. Eu sagittis id sit semper hendrerit
                  sed venenatis.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}