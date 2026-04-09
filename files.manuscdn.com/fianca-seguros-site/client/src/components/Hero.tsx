import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { useRef, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Garantir que o vídeo inicie a reprodução
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay bloqueado ou erro ao reproduzir vídeo:', error);
      });
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background fallback */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663422865694/P4yhR63nBsA3qRTjJ6jkJr/hero-insurance-UhWvpGWHpGUhmxSFaur9i2.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      {/* Vídeo em Loop - Técnica Pottencial */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectFit: 'cover' }}
      >
        <source src="https://d2xsxph8kpxj0f.cloudfront.net/310519663422865694/P4yhR63nBsA3qRTjJ6jkJr/video-hero_7fae717b.mp4" type="video/mp4" />
      </video>

      {/* Overlay para melhor legibilidade do texto */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Conteúdo sobreposto */}
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="divider-gold"></div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-white">Mais segurança. Menos burocracia. Muito mais </span>
                <span className="text-primary">conFIANÇA</span>
              </h1>
              <p className="text-xl text-white leading-relaxed">
                Soluções em Seguro Fiança com rapidez, agilidade e eficiência.
              </p>
              <p className="text-xl text-white leading-relaxed">
                Um atendimento personalizado, feito sob medida pra você!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5511915410799"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 group"
              >
                <MessageCircle size={20} />
                Chama a Gente
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+551123662440"
                className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-black font-semibold group"
              >
                <Phone size={20} />
                Pode Ligar
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
              <div>
                <p className="text-lg font-bold">
                  <span className="text-primary">Humanizado</span>
                </p>
                <p className="text-sm text-white">Atendimento</p>
              </div>
              <div>
                <p className="text-lg font-bold">
                  <span className="text-primary">Expertise</span>
                </p>
                <p className="text-sm text-white">Locação</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">+10</p>
                <p className="text-sm text-white">Anos</p>
              </div>
            </div>
          </div>

          {/* Right Logo */}
          <div className="relative hidden md:flex items-start justify-center -mt-20">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663422865694/P4yhR63nBsA3qRTjJ6jkJr/FotodePerfilWhatsapp(3)_1eceed22.png"
              alt="Logo Fiança"
              className="w-64 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
