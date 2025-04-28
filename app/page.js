import Chancellor from "@/components/Chancellor";
import { CounterSection } from "@/components/CounterSection";
import DiveDeeper from "@/components/DiveDeeper";
import Events from "@/components/Events";
import { Hero } from "@/components/Hero";
import HomeCTA from "@/components/HomeCTA";
import HospitalService from "@/components/HospitalService";
import Innovation from "@/components/Innovation";
import Leaders from "@/components/Leaders";
import NewsTicker from "@/components/NewsTicker";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <NewsTicker />
      <CounterSection />
      <DiveDeeper />
      <Events />
      <Innovation />
      <Chancellor />
      <Leaders />
      <HospitalService />
      <Testimonial />
      <HomeCTA />
    </div>
  );
}
