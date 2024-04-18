import Banner from "../components/Banner";
import Features from "../components/FeaturesSection";
import About from "../components/AboutSection";
import Popular from "../components/PopularSection";

export default function Homepage() {
  return (
    <div aria-label="Website Homepage" className="space-y-5">
      <Banner />
      <Features />
      <About />
      <Popular />
    </div>
  );
}
