import NavbarHome from "./components/NavbarHome"
import PageHeader from "./components/PageHeader"
import MainCarousel from "./components/MainCarousel"
import FadeCarousel from "./components/FadeCarousel"
import About from "./components/About"
import PageFooter from "./components/PageFooter"

export default function Home() {
  return (
    <main className='overscroll-contain bg-gray-900'>
      <PageHeader></PageHeader>
      <NavbarHome></NavbarHome>
      <About></About>
      <PageFooter></PageFooter>
      
    </main>
  )
}
