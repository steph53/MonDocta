import FeatureCarousel from "@modules/home/components/FeatureCarousel"
import FeaturesContainer from "@modules/home/components/FeaturesContainer"
import JoinUs from "@modules/home/components/JoinUs"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import WhyUs from "@modules/home/components/why-us"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop all available models only at the ACME. Worldwide Shipping. Secure Payment.",
}

const Home = () => {
  return (
    <>
      <Hero />
      <WhyUs />
      <FeaturesContainer/>
      <FeatureCarousel />
      <JoinUs />
    </>
  )
}

export default Home
