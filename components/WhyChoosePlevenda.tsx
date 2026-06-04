import { CalendarHeart, CircleCheck, Users } from "lucide-react";

export default function WhyChoosePlevenda() {
  const whatWeOffer = [
    {
      title: "Comprehensive Planning",
      description:
        "From initial concept to final execution, we manage every detail with precision and care.",
      icon: <CalendarHeart strokeWidth={1} />,
    },
    {
      title: "Trusted Network",
      description:
        "Access to vetted, reliable vendors who share our commitment to excellence.",
      icon: <Users strokeWidth={1} />,
    },
    {
      title: "Stress-Free Experience",
      description:
        "No last-minute chaos. Just beautifully executed events that exceed expectations.",
      icon: <CircleCheck strokeWidth={1} />,
    },
  ];
  return (
    <section className="my-30 mx-auto text-[10px]">
      <section className="w-[80%] mx-auto">
        <h2 className="font-extrabold text-2xl capitalize text-center mb-5">
          why Choose Plevenda?
        </h2>
        <p className="text-center font-extralight uppercase leading-8">
          Planning an event shouldn&apos;t feel overwhelming, but for many
          people, it does. That&apos;s where Plevenda comes in.
        </p>
        <p className="text-center font-extralight uppercase">
          We simplify the entire process, connect you with trusted vendors, and
          manage every detail, so your event runs smoothly from start to finish
        </p>
      </section>
      <section className="mt-30 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mx-auto flex-wrap md:w-[95%] gap-y-15">
        {whatWeOffer.map((offer, index) => (
          <div
            key={index}
            className="flex flex-col justify-between gap-2 md:gap-5 w-[50%] md:w-[30%]"
          >
            {offer.icon}
            <h3 className="font-bold text-base">{offer.title}</h3>
            <p className="text-base font-thin text-black/60">
              {offer.description}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
}
