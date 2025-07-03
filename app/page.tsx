import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import BuiltToLast from './components/BuiltToLast/BuiltToLast';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Testimonials from './components/Testimonials/Testimonials';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BuyNowButton from './components/BuyNowButton/BuyNowButton';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center">
        <div id="hero">
          <Hero />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="durability">
          <BuiltToLast />
        </div>
        <div id="howitworks">
          <HowItWorks />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
      </main>
      <BuyNowButton />
      <Footer />
    </div>
  );
}
