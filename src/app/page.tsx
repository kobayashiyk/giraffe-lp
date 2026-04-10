import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Problems from "@/components/Problems";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import Screenshots from "@/components/Screenshots";
import BeforeAfter from "@/components/BeforeAfter";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Steps from "@/components/Steps";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import TrustBadges from "@/components/TrustBadges";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Problems />
        <Features />
        <Comparison />
        <Screenshots />
        <BeforeAfter />
        <Results />
        <Testimonials />
        <Steps />
        <Pricing />
        <Faq />
        <TrustBadges />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
