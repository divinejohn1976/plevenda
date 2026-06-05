import Link from "next/link";
import Logo from "./Logo";

export default function LandingPageHeader() {
  return (
    <section className="flex px-1 md:px-3 text-xs justify-between items-center [&_li,&_a]:hover:scale-[115%] [&_li,&_a]:transition-all [&_li,&_a]:duration-300">
      <Logo />
      <nav>
        <ul className="flex gap-2 md:gap-6">
          <li>
            <Link href="#">HOME</Link>
          </li>
          <li>
            <Link href="#">ABOUT</Link>
          </li>
          <li>
            <Link href="#">EVENTS</Link>
          </li>
          <li>
            <Link href="#">CONTACT</Link>
          </li>
        </ul>
      </nav>
      <Link href="#">Sign Up as Vendor</Link>
    </section>
  );
}
