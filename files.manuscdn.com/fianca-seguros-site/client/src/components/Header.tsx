import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Fixed Menu */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md">
        <div className="container mx-auto px-4 py-8 flex items-center justify-between">
          {/* Logo Desktop */}
          <div className="hidden md:flex items-center">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663422865694/P4yhR63nBsA3qRTjJ6jkJr/Capturadetela2026-04-09085650_b250c222.png"
              alt="Logo Fiança Corretora de Seguros"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Logo Mobile */}
          <div className="md:hidden flex items-center">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663422865694/P4yhR63nBsA3qRTjJ6jkJr/Capturadetela2026-04-09085650_b250c222.png"
              alt="Logo Fiança Corretora de Seguros"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-black hover:text-primary transition-colors font-semibold">
              Home
            </a>
            <a href="#services" className="text-black hover:text-primary transition-colors font-semibold">
              Serviços
            </a>
            <a href="#about" className="text-black hover:text-primary transition-colors font-semibold">
              Sobre
            </a>
            <a href="#contact" className="text-black hover:text-primary transition-colors font-semibold">
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-card border-t border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50 bg-primary px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg">
        <a
          href="https://wa.me/5511915410799"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black font-semibold flex items-center gap-2"
        >
          <MessageCircle size={20} />
          WhatsApp
        </a>
      </div>

      {/* Spacer para evitar que o conteúdo fique sob o menu fixo */}
      <div className="h-28"></div>
    </>
  );
}
