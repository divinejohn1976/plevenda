import { Facebook, Instagram, YouTube } from "@deemlol/next-icons";
import Logo from "./Logo";
import Link from "next/link";

export default function LandingPageFooter() {
  const currYear = new Date().getFullYear();
  return (
    <footer className="text-black/70">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 gap-y-20 place-items-start md:place-items-center mt-10 mb-5 px-5 text-xs md:items-start [&_div]:w-[30%] [&_div]:md:w-full">
        <div className="flex flex-col gap-2">
          <Logo />
          <p>
            Redefining event planning in the UK with clarity, structure, and
            excellence.
          </p>
          <div className="flex justify-between w-[50%] text-3xl">
            <span className="rounded-md text-white bg-linear-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5]">
              <Instagram />
            </span>
            <span className="text-blue-500">
              <Facebook />
            </span>
            <span className="text-red-500">
              <YouTube />
            </span>
          </div>
        </div>
        <div>
          <p className="mb-4 font-bold">Services</p>
          <ul className="flex flex-col gap-4 text-black/70">
            <li>
              <Link href="#">Wedding Planning</Link>
            </li>
            <li>
              <Link href="#">Corporate Events</Link>
            </li>
            <li>
              <Link href="#">Celebrations</Link>
            </li>
            <li>
              <Link href="#">Vendor Network</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4 font-bold">Company</p>
          <ul className="flex flex-col gap-4 text-black/70">
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Our Team</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4 font-bold">Legal</p>
          <ul className="flex flex-col gap-4 text-black/70">
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms of Service</Link>
            </li>
            <li>
              <Link href="#">Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-30 text-center mb-10 text-xs ">
        {currYear} Plavenda. All Rights Reserved.
      </p>
    </footer>
  );
}
