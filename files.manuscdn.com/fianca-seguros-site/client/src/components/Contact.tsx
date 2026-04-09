import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Enviar para WhatsApp
    const message = `Olá! Meu nome é ${formData.name}. Email: ${formData.email}. Telefone: ${formData.phone}. Mensagem: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511915410799?text=${encodedMessage}`, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center">
            <div className="divider-gold"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para ajudar você. Escolha a melhor forma de nos contatar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="card-premium space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Telefone</h3>
              </div>
              <p className="text-muted-foreground">
                Ligue para nossa equipe de atendimento.
              </p>
              <a
                href="tel:+551123662440"
                className="text-primary font-semibold hover:text-secondary transition-colors"
              >
                (11) 2366-2440
              </a>
            </div>

            {/* WhatsApp */}
            <div className="card-premium space-y-3">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">WhatsApp</h3>
              </div>
              <p className="text-muted-foreground">
                Envie uma mensagem para conversarmos.
              </p>
              <a
                href="https://wa.me/5511915410799"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:text-secondary transition-colors"
              >
                (11) 9.1541-0799
              </a>
            </div>

            {/* Email */}
            <div className="card-premium space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">E-mail</h3>
              </div>
              <p className="text-muted-foreground">
                Envie seus dados e dúvidas por e-mail.
              </p>
              <a
                href="mailto:fiancacorretoradeseguros@gmail.com"
                className="text-primary font-semibold hover:text-secondary transition-colors break-all"
              >
                fiancacorretoradeseguros@gmail.com
              </a>
            </div>

            {/* Address */}
            <div className="card-premium space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Endereço</h3>
              </div>
              <p className="text-muted-foreground">
                Av Rio das Pedras, 245<br />
                Jd Aricanduva - São Paulo, SP
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-premium">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="(11) 9.0000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Conte-nos como podemos ajudar..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
