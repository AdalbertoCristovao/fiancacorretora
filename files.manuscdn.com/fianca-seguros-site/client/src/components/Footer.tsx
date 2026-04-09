import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <p className="text-background/70 text-sm leading-relaxed">
              Corretora de Seguros especializada em Seguro Fiança Locatícia com atendimento personalizado.
            </p>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663422865694/P4yhR63nBsA3qRTjJ6jkJr/FotodePerfilWhatsapp(3)_1eceed22.png"
              alt="Logo Fiança"
              className="w-40 h-auto object-contain"
            />
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-background/70 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-background/70 hover:text-primary transition-colors cursor-pointer">
                Seguro Fiança
              </li>
              <li className="text-background/70 hover:text-primary transition-colors cursor-pointer">
                Consultoria
              </li>
              <li className="text-background/70 hover:text-primary transition-colors cursor-pointer">
                Suporte 24/7
              </li>
              <li className="text-background/70 hover:text-primary transition-colors cursor-pointer">
                Documentação
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-background/70">
                <Phone size={18} />
                <a href="tel:+551123662440" className="hover:text-primary transition-colors">
                  (11) 2366-2440
                </a>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <Mail size={18} />
                <a href="mailto:fiancacorretoradeseguros@gmail.com" className="hover:text-primary transition-colors break-all">
                  fiancacorretoradeseguros@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <MapPin size={18} />
                <span>São Paulo, SP</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.facebook.com/share/1KWhcjqbQc/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary text-foreground rounded-lg hover:bg-secondary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/fiancacorretoradeseguros"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary text-foreground rounded-lg hover:bg-secondary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/5511915410799"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary text-foreground rounded-lg hover:bg-secondary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          {/* Bottom Info */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <p className="text-background/70 text-sm">
              © {currentYear} Fiança Corretora de Seguros. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 md:justify-end text-sm">
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>

          {/* Credit */}
          <p className="text-background/50 text-xs text-center">
            Desenvolvido com ❤️ para sua confiança
          </p>
        </div>
      </div>
    </footer>
  );
}
