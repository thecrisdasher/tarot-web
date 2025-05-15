import SmokeBackground from "./components/elements/SmokeBackground";
import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/AboutUs";
import { WhatsappContact } from "./components/sections/WhatsappContact";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";

function App() {
  return (
    <Layout title="EdgeAI">
      <Hero />
      <WhatsappContact />
      <Services />
      <AboutUs />
      <Pricing />
      <CTA />
      <SmokeBackground />
    </Layout>
  );
}

export default App;
