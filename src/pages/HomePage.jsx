import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Overview from "../components/sections/Overview";
import HowItWorks from "../components/sections/HowItWorks";
import Challenges from "../components/sections/Challenges";
import Applications from "../components/sections/Applications";

function HomePage() {
  return (
    <main>
      <Hero />
      <Overview />
      <HowItWorks />
      <Applications />
      <Challenges />
      <Footer />
    </main>
  );
}

export default HomePage;
