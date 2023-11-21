import MainComponent from "@modules/home/components/MainComponent"
import FeaturedProducts from "@modules/home/components/featured-products"
import { Metadata } from "next"
import localFont from "next/font/local"

const myFont = localFont({src: "../fonts/Articulat/ArticulatCF-Normal.otf", display: "swap"})

export const metadata: Metadata = {
  title: "Mondocta - Professional Healthcare services",
  description:
    "Shop all available models only at the ACME. Worldwide Shipping. Secure Payment.",
}

const Home = () => {
  return (
    <main className={myFont.className}>
      <MainComponent />
    </main>
  )
}

export default Home
