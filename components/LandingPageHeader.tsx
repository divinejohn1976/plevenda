import Link from "next/link";
import Logo from "./Logo";

export default function LandingPageHeader() {
  return (
    <section className="flex px-1 md:px-3 text-xs justify-between items-center [&_li,&_a]:hover:scale-[115%] [&_li,&_a]:transition-all [&_li,&_a]:duration-300">
      <Logo />
      <nav>
        <ul className="flex gap-1 md:gap-4 []">
          <li>
            <Link href="#">HOME</Link>
          </li>
          <li>
            <Link href="#">ABOUT</Link>
          </li>
          <li>
            <Link href="#">EVENT</Link>
          </li>
          <li>
            <Link href="#">CONTACTS</Link>
          </li>
        </ul>
      </nav>
      <Link href="#">Sign Up as Vendor</Link>
    </section>
  );
}
