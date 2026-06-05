import Image from "next/image";
import LandingPageHeader from "./LandingPageHeader";
import heroBG from "@/assets/hero_bg.png";
import Link from "next/link";
import heroImg1 from "@/assets/hero_img1.png";
import heroImg2 from "@/assets/hero_img2.png";
import heroImg3 from "@/assets/hero_img3.png";

export default function LandingPageHero() {
  const images = [
    { imgSrc: heroImg1, text: "Event Design" },
    { imgSrc: heroImg2, text: "Event Planning" },
    { imgSrc: heroImg3, text: "Weddings" },
  ];
  return (
    <section className="relative w-full p-2 pb-0 text-white flex flex-col justify-between gap-15">
      <Image
        alt="Background"
        src={heroBG}
        width={100}
        height={100}
        className="absolute inset-0 w-full h-full object-fit opacity-90 -z-10 brightness-30"
        unoptimized
        priority
      />
      <LandingPageHeader />
      <section className="w-[70%] md:w-[60%] mx-auto">
        <p className="my-6 uppercase text-center font-bold mx-auto">
          Plan your event without the stress, confusion, or last-minute chaos.
        </p>
        <p className="mb-6 text-center text-sm mx-auto capitalize">
          At Plevenda, we handle everything from trusted vendors to full
          coordination so you can actually enjoy your day!!!
        </p>
        <Link
          href="#"
          className="mt-15 block w-fit mx-auto rounded-xl text-black bg-lime-400/90 hover:scale-[105%] transition-all duration-500 text-sm uppercase px-2 py-2"
        >
          Start Planning Your Event
        </Link>
      </section>
      <section className="flex flex-row items-center justify-center gap-3">
        {images.map((item, index) => (
          <figure
            key={index}
            className="relative w-45 h-37.5 rounded-md overflow-hidden"
          >
            <Image
              src={item.imgSrc}
              fill
              alt={item.text}
              className="object-fill size-full"
              unoptimized
              priority
            />
            <figcaption className="absolute bottom-5 left-0 right-0 text-center text-xs font-extralight">
              {item.text}
            </figcaption>
          </figure>
        ))}
      </section>
    </section>
  );
}
