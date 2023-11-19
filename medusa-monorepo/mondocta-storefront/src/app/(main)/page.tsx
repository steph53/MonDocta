import MainComponent from "@modules/home/components/MainComponent"
import FeaturedProducts from "@modules/home/components/featured-products"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mondocta - Professional Healthcare services",
  description:
    "Shop all available models only at the ACME. Worldwide Shipping. Secure Payment.",
}

const Home = () => {
  return (
    <MainComponent />
  )
}

export default Home
