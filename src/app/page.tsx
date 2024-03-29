import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicTestimonialCard from "@/components/TestimonialCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";




export default function Home() {
  return (
    <main className="min-h-screen bg-black/(0.96) antialiased bg-grid-while (/0.02) ">
      {/* <h1 className="text-3xl mx-auto text-center mt-0">hello Fasih Welcome</h1> */}
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicTestimonialCard/>
      <UpcomingWebinars/>
    </main>


  );
}
