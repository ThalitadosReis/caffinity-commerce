import About from "../components/AboutSection";
import Banner from "../components/Banner";
import Features from "../components/FeaturesSection";
import NewArrivals from "../components/Popular";

export default function Homepage() {
  return (
    <div aria-label="Website Homepage" className="space-y-5">
      <Banner />
      <Features />
      <About />
      <NewArrivals />
    </div>
  );
}
