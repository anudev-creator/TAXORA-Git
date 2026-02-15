import MouseTracker from "./Components/Commen/MouseTracker";
import ClickWave from "./Components/Commen/ClickWave";
import Menubar from "./Components/Commen/Menubar";
import Image, { StaticImageData } from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { Imageslist } from "./Components/Commen/Images";
import { styleSheets } from "./Components/Commen/StyleSheet";

export default function Home() {
  return (
    <div>
      <MouseTracker />
      <ClickWave />
      <main>
        <div className="relative ">
          <Menubar />
          <Image src={Imageslist.TOpBGImage} alt="Background" width={850} height={400} className="opacity-10 absolute top-0 left-0 z-[-1]" />
        </div>
        <section>
          <div>
            <Section01 />
          </div>
          <div className="mt-30">
            <Section02 />
          </div>
          <div className="mt-30">
            <Section03 />
          </div>
          <div className="mt-30">
            <Section04 />
          </div>
          <div className="mt-50">
            <Section05 />
          </div>
          <div className="mt-30">
            <Section06 />
          </div>
        </section>
      </main>
    </div>
  );
}


function Section06() {
  return (
    <div>
      <div>

      </div>
    </div>
  )
}

function Section05() {
  return (
    <div className="flex justify-center">
      <div className="w-[80%] gap-20 grid grid-cols-2">
        <section>
          <h1 className="text-4xl font-bold">Effective Service Requires an Expert Team</h1>
        </section>
        <section>
          <h1 className="font-bold text-2xl mb-2">Expert Team</h1>
          <p>We have professional expert cleaning staff ensuring top-notch cleanliness and hygiene for your space.</p>
        </section>
      </div>
    </div>
  )
}

function Section04() {
  return (
    <div className="flex justify-center">
      <div className="w-[80%] grid grid-cols-12">
        <section className="col-span-7">
          <p className="text-xl mt-20">Affordable  solutions</p>
          <h1 className="text-6xl font-bold mt-5">High-Quality Services at Fair Prices</h1>
          <p className="text-xl w-[60%] mt-5">We provide comprehensive  services tailored to your needs. </p>
          <button className={`${styleSheets.BlueBTNStyle} mt-5`}>Get a quote</button>
        </section>
        <section className="flex justify-end col-span-5">
          <div className="relative">
            <div>
              <Image src={Imageslist.SideIMG1} alt="Background" width={400} height={400} className="rounded-2xl" />
            </div>
            <div className="absolute bottom-[-20%] left-[-20%]">
              <Image src={Imageslist.SideIMG1} alt="Background" width={280} height={150} className="h-[280px] border-8 border-white rounded-2xl" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}




// Section 03 start here
type S3CardProps = {
  title: string;
  description: string;
  image: string | StaticImageData;
};

function S3_card({ title, description, image }: S3CardProps) {
  return (
    <div>
      <div>
        <div>
          <Image src={image} alt="Background" width={200} height={200} className="rounded-2xl w-full h-[230px]" />
        </div>
        <div className="mt-4">
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="text-md mt-3">{description}</p>
          <button className={`${styleSheets.TransBTNStyle} mt-8 `}>
            <div className="flex justify-center items-center gap-3 ">
              <p>Book Now</p>
              <FiArrowUpRight size={20} />
            </div>
          </button>
        </div>

      </div>
    </div>
  )
}

const cards = [
  { title: "Accounting", description: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:", image: Imageslist.FullwidthImg },
  { title: "ITR Filing", description: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:", image: Imageslist.SideIMG1 },
  { title: "Gst Registration", description: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:", image: Imageslist.FullwidthImg },
  { title: "Company Registration", description: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:", image: Imageslist.SideIMG1 },
  { title: "DSC", description: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:", image: Imageslist.FullwidthImg },
  { title: "Project reports", description: "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:", image: Imageslist.SideIMG1 },
];


function Section03() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-3 gr gap-20 w-[80%]">
        {cards.map((c, i) => (
          <S3_card key={i} title={c.title} description={c.description} image={c.image} />
        ))}

      </div>
    </div>
  );
}

// Section 03 end here


function Section02() {
  return (
    <div>
      <div className="relative">
        <Image src={Imageslist.FullwidthImg} alt="Building image" width={700} height={600} className=" w-full h-auto" />
        <div className="absolute bottom-[-30px] left-5 w-[55%]">
          <div className="relative h-[400px] rounded-2xl bg-[#1E376D] p-8">
            <Image src={Imageslist.BgLines} alt="Building image" width={700} height={600} className="absolute w-full opacity-40 left-0 top-1/4 h-auto" />
            <div className="flex flex-col justify-between items-start h-full">
              <div className={styleSheets.TopHighlights}>OUR SERVICES</div>
              <div className="text-4xl leading-relaxed w-[80%] font-semibold text-[#F9F9F9]">We Provide a Wide Range Of Services That Help Businesses</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



function Section01() {
  return (
    <div>
      <div className="flex justify-between gap-4">
        <section className="flex justify-end items-center w-[50%]">
          <div className="w-[80%]">
            <p className="text-xl">Quality at a fair price.</p>
            <p className="text-6xl font-bold">Expert Financial & <br />Compliance Services <br />Simplified.</p>
            <div className="mt-10">
              <p className="w-[90%] text-[#666666] text-xl">Reliable accounting, seamless tax filing, and end-to-end business registrations. Professional solutions for every stage of your business journey.</p>
            </div>
            <div className="mt-10">
              <div className="w-[60%] flex justify-between items-center">
                <button className={styleSheets.BlueBTNStyle}>Get  Start Now</button>
                <button className={styleSheets.TransBTNStyle}>View all Services</button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[50%] flex justify-end" >
          <Image src={Imageslist.SideIMG1} alt="Building image" width={700} height={600} className="rounded-bl-2xl rounded-tl-2xl w-full h-[600px]" />
        </section>
      </div>
    </div>
  );
}

