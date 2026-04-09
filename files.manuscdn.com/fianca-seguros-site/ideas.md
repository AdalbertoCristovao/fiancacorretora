# Ideias de Design - Fiança Corretora de Seguros

## Análise do Site de Referência (Compagno)

O site Compagno utiliza:
- **Cores**: Azul escuro (#001f5c), laranja (#ff6b35), branco
- **Layout**: Hero com CTA destacado, seções com cards de funcionalidades, formulário de cadastro
- **Tipografia**: Sans-serif moderna, hierarquia clara
- **Elementos**: Ícones, cards com sombra, gradientes, animações sutis

---

## Abordagem Escolhida: Premium & Confiança

### Design Movement
**Modernismo Corporativo Elevado** - Combinação de elegância minimalista com elementos de confiança e segurança, inspirado em instituições financeiras de alto padrão.

### Core Principles
1. **Confiança através da Clareza**: Informações bem organizadas, hierarquia visual clara, sem poluição visual
2. **Sofisticação Discreta**: Uso estratégico de cores corporativas (amarelo ouro + preto), sem excessos
3. **Acessibilidade Prioritária**: Contraste adequado, tipografia legível, espaçamento generoso
4. **Movimento Propositivo**: Animações suaves que guiam o usuário, não distraem

### Color Philosophy

| Cor | Código | Uso | Razão |
|-----|--------|-----|-------|
| **Amarelo Ouro** | #ffcc01 | Primária, CTAs, destaques | Transmite confiança, otimismo, prosperidade |
| **Dourado Escuro** | #e7aa01 | Secundária, hover states | Sofisticação, profundidade, elegância |
| **Preto** | #000000 | Texto, estrutura | Autoridade, clareza, formalidade |
| **Branco** | #ffffff | Background, espaço negativo | Limpeza, profissionalismo, legibilidade |

**Paleta Estendida**: Cinzas neutros (#f5f5f5, #e0e0e0, #999999) para suporte visual.

### Layout Paradigm

- **Hero Section**: Assimétrico - imagem/ilustração à direita, texto + CTA à esquerda
- **Seções de Serviços**: Grid 3 colunas com cards elegantes, sem bordas visíveis (apenas sombra suave)
- **Testimonials/Trust**: Timeline vertical com estatísticas, alternando esquerda/direita
- **Footer**: Estrutura clara em colunas, sem clutter

### Signature Elements

1. **Linha Dourada Decorativa**: Separadores horizontais em ouro (#e7aa01) entre seções
2. **Ícones Geométricos**: Formas simples e limpas (círculos, quadrados, linhas) em ouro
3. **Cards com Sombra Suave**: Elevação visual sem excessos (shadow: 0 4px 12px rgba(0,0,0,0.1))

### Interaction Philosophy

- **Hover States**: Botões mudam de amarelo (#ffcc01) para dourado (#e7aa01), com transição suave (0.3s)
- **Focus States**: Outline em ouro para acessibilidade
- **Scroll Animations**: Fade-in suave para elementos ao entrar na viewport
- **Feedback Visual**: Toasts/notificações em tons de ouro para ações bem-sucedidas

### Animation Guidelines

- **Transições**: 0.3s ease-in-out para hover/focus
- **Scroll**: Fade-in com delay escalonado para listas de items (50ms entre cada)
- **Entrance**: Slide-up suave (0.5s) para seções ao carregar
- **Micro-interactions**: Pulse suave em CTAs para chamar atenção sem ser agressivo

### Typography System

| Elemento | Font | Peso | Tamanho | Uso |
|----------|------|------|---------|-----|
| **Display** | Playfair Display | 700 | 48-56px | Títulos principais, hero |
| **Heading** | Playfair Display | 600 | 32-40px | Títulos de seção |
| **Subheading** | Inter | 600 | 18-24px | Subtítulos, destaques |
| **Body** | Inter | 400 | 16px | Texto principal |
| **Small** | Inter | 400 | 14px | Labels, captions |
| **Button** | Inter | 600 | 16px | CTAs |

---

## Estrutura do Site

### Páginas Principais

1. **Home** (Landing Page)
   - Hero com logomarca e proposta de valor
   - Seção de Serviços (Seguro Fiança, etc.)
   - CTA de Contato
   - Sobre a Empresa
   - Redes Sociais

2. **Sobre Nós**
   - História, missão, visão
   - Diferenciais

3. **Contato**
   - Formulário
   - Informações de contato
   - Mapa/localização

---

## Próximas Etapas

1. Gerar imagens de alta qualidade para hero e seções
2. Implementar componentes em React + Tailwind
3. Integrar logomarca e paleta de cores
4. Adicionar animações e micro-interações
5. Testar responsividade e acessibilidade
