import ComingSoon from "@/components/ComingSoon";
import EventsWeSpecializeIn from "@/components/EventsWeSpecializeIn";
import LandingPageHero from "@/components/LandingPageHero";
import LandingPageFooter from "@/components/LandinPageFooter";
import WhyChoosePlevenda from "@/components/WhyChoosePlevenda";

export default function Home() {
  return (
    <>
      <LandingPageHero />
      <WhyChoosePlevenda />
      <EventsWeSpecializeIn />
      <ComingSoon />
      <LandingPageFooter />
    </>
  );
}
