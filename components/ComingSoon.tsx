import Link from "next/link";

export default function ComingSoon() {
  return (
    <section className="mt-1 mb-10 bg-black text-white flex flex-col justify-center items-center py-25">
      <div className=" text-center">
        <h3 className="capitalize font-bold text-2xl">Coming soon to the UK</h3>
        <div className="my-7 w-[70%] mx-auto text-xs">
          <p className="">
            We&apos;re preparing to launch a platform that will make event
            planning more seamless, reliable, and stress-free across the UK.
          </p>
          <br />
          <p className="">
            Until then, we continue to work closely with clients and trusted
            vendors to deliver beautifully executed events.
          </p>
          <br />
          <p className="">Be part of what&apos;s coming.</p>
        </div>
      </div>
      <div className="mt-6 flex w-full items-center justify-center gap-4 [&_a]:uppercase [&_a]:text-[8px] [&_a]:px-2 [&_a]:py-2 [&_a]:transition-all [&_a]:duration-300 [&_a]:rounded-lg [&_a]:hover:scale-[110%]">
        <Link href="#" className="text-black bg-white">
          Join the waitlist
        </Link>
        <Link href="#" className="border hover:bg-white hover:text-black">
          Speak with us
        </Link>
      </div>
    </section>
  );
}
