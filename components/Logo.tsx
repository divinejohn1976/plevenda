import Image, { ImageProps } from "next/image";
import logo from "@/assets/logo_no_bg.png";
export default function Logo({
  className,
  ...Props
}: {
  className?: string;
  Props: ImageProps;
}) {
  return (
    <Image
      src={logo}
      className={"rounded-md " + className}
      height={48}
      width={48}
      alt="Logo"
      unoptimized
      {...Props}
    />
  );
}
