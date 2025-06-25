import Hero from "@/components/section/hero";
import About from "@/components/section/about";
import Amazing from "@/components/section/amazing";
import Cta1 from "@/components/section/cta-1";
import Received from "@/components/section/received";
import Cta2 from "@/components/section/cta-2";
import Footer from "@/components/shared/footer";
import Nav from "@/components/shared/nav";
import HeroSlider from "@/components/section/hero-slider";
import Gallery from "@/components/section/gallery";


export default function Home() {
  return (
    <>
      <Gallery />
      <Nav />
      <Hero />
      <HeroSlider />
      <About />
      <Amazing />
      <Cta1 />
      <Received />
      <Cta2 />
      <Footer />
    </>
  )
  
}
