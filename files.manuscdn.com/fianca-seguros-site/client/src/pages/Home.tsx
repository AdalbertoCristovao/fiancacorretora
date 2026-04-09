import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Home Page - Landing page for Fiança Corretora de Seguros
 * 
 * Design Philosophy: Premium & Confiança
 * - Color Palette: Gold (#ffcc01), Dark Gold (#e7aa01), Black (#000000), White (#ffffff)
 * - Typography: Playfair Display (headings), Inter (body)
 * - Layout: Asymmetric, elegant, professional
 * - Animations: Smooth transitions, subtle scroll effects
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
