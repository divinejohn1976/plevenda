import eventsSP from "@/assets/eventsSP.png";
import { CircleCheck } from "lucide-react";
import Image from "next/image";

export default function EventsWeSpecializeIn() {
  const specialty = [
    { title: "Weddings", text: "Your perfect day, planned to perfection" },
    { title: "Celebrations", text: "Milestone moments made memorable" },
    {
      title: "Corporate Events",
      text: "Professional gatherings executed flawlessly",
    },
  ];
  return (
    <section className="mt-6 px-5 grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-10 place-items-center">
      <div className="h-full flex flex-col md:justify-center p-5  w-[80%] ">
        <h2 className="font-bold mb-10">Events We Specialize In</h2>
        {specialty.map((event, index) => (
          <div key={index} className="flex gap-2 mb-8 items-start">
            <CircleCheck className="inline-block" strokeWidth={1} size={16} />
            <div className="leading-none">
              <h3 className="font-semibold mb-2">{event.title}</h3>
              <p className="text-xs text-black/80 capitalize">{event.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[80%]">
        <Image
          src={eventsSP}
          alt="Events We Specialize In"
          className="w-full h-full md:h-125 rounded-lg object-cover"
          width={40}
          height={40}
          unoptimized
        />
      </div>
    </section>
  );
}
