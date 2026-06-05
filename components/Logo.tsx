import Image from "next/image";
import logo from "@/assets/plevenda_logo.png";
export default function Logo() {
  return (
    <Image
      src={logo}
      className="rounded-md "
      height={48}
      width={48}
      alt="Logo"
      unoptimized
    />
  );
}
