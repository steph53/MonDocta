import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import local from "next/font/local"

const myFont = local({src: "../fonts/Articulat/ArticulatCF-Normal.otf", display: "swap"})

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className={myFont.className}> 
      <Nav />
      {children}
      <Footer />
    </main>
  )
}
