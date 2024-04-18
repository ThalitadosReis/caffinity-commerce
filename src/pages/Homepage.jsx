import Banner from "../components/Banner";
import Features from "../components/FeaturesSection";
import About from "../components/AboutSection";
import Popular from "../components/Popular";

export default function Homepage({ products, handleLikeClick, isProductLiked }) {
  return (
    <div aria-label="Website Homepage" className="space-y-5">
      <Banner />
      <Features />
      <About />
      <Popular
        products={products}
        handleLikeClick={handleLikeClick}
        isProductLiked={isProductLiked}
      />
    </div>
  );
}
