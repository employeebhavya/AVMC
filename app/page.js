import Accreditations from "@/components/Accreditations";
import Chancellor from "@/components/Chancellor";
import { CounterSection } from "@/components/CounterSection";
import DiveDeeper from "@/components/DiveDeeper";
import Events from "@/components/Events";
import { Hero } from "@/components/Hero";
import HomeCTA from "@/components/HomeCTA";
import HospitalService from "@/components/HospitalService";
import Innovation from "@/components/Innovation";
import Leaders from "@/components/Leaders";
import MobileTestimonial from "@/components/MobileTestimonial";
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
      <Accreditations />
      <Innovation />
      <Chancellor />
      <Leaders />
      <HospitalService />
      <div className="hidden md:block">
        <Testimonial />
      </div>
      <div className="md:hidden">
        <MobileTestimonial />
      </div>
      <HomeCTA />
    </div>
  );
}
