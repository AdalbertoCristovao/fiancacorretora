import { Shield, Users, FileCheck, Headphones } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Seguro Fiança Locatícia',
    description: 'Proteção completa para proprietários e inquilinos com aprovação rápida e sem complicações.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663422865694/P4yhR63nBsA3qRTjJ6jkJr/services-security-ScFmpfVqhfUud9uCPLrz82.webp',
  },
  {
    icon: Users,
    title: 'Consultoria Personalizada',
    description: 'Equipe especializada pronta para orientar você na melhor solução de seguros.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663422865694/P4yhR63nBsA3qRTjJ6jkJr/services-consultation-8EbeshzQX8uRDpEiNSLuE6.webp',
  },
  {
    icon: FileCheck,
    title: 'Documentação Simplificada',
    description: 'Equipe de analistas experientes, com rápido retorno das análise. Sem burocracia!',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663422865694/P4yhR63nBsA3qRTjJ6jkJr/services-support-3WJnCFxnUJAEgwHWnYxvuh.webp',
  },
  {
    icon: Headphones,
    title: 'Suporte ao Parceiro',
    description: 'Atendimento humanizado e multicanal sempre disponível para você.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663422865694/P4yhR63nBsA3qRTjJ6jkJr/services-support-3WJnCFxnUJAEgwHWnYxvuh.webp',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center">
            <div className="divider-gold"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em corretagem de seguros com foco em qualidade e atendimento.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card-premium group cursor-pointer overflow-hidden"
              >
                {/* Icon */}
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <div className="mt-4 pt-4 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#contact" className="text-primary font-semibold text-sm hover:text-secondary transition-colors">
                    Saiba mais →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
