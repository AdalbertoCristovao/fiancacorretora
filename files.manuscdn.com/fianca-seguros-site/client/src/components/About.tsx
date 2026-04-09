import { CheckCircle } from 'lucide-react';

export default function About() {
  const highlights = [
    'Especialistas em Seguro Fiança Locatícia',
    'Atendimento personalizado e humanizado',
    'Processo ágil e sem burocracia',
    'Equipe experiente e certificada',
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="divider-gold"></div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground">
                Sobre a <span className="text-primary">Fiança</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos uma corretora de seguros dedicada a simplificar a vida de proprietários, 
                inquilinos e imobiliárias. Com mais de uma década de experiência, oferecemos 
                soluções inovadoras em seguro fiança locatícia.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="btn-primary inline-block"
            >
              Conheça Nossos Serviços
            </a>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="card-premium text-center space-y-2">
              <p className="text-4xl font-bold"><span className="text-primary">Personalizado</span></p>
              <p className="text-foreground font-semibold">Atendimento Humanizado</p>
              <p className="text-sm text-muted-foreground">Feito sob medida</p>
            </div>
            <div className="card-premium text-center space-y-2">
              <p className="text-4xl font-bold"><span className="text-primary">Ágil</span></p>
              <p className="text-foreground font-semibold">Processo</p>
              <p className="text-sm text-muted-foreground">Sem burocracia</p>
            </div>
            <div className="card-premium text-center space-y-2">
              <p className="text-4xl font-bold text-primary">+10</p>
              <p className="text-foreground font-semibold">Anos</p>
              <p className="text-sm text-muted-foreground">No mercado</p>
            </div>
            <div className="card-premium text-center space-y-2">
              <p className="text-4xl font-bold text-primary">∞</p>
              <p className="text-foreground font-semibold">Satisfação</p>
              <p className="text-sm text-muted-foreground">Clientes felizes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
