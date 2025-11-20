import { BookOpen, BrainCircuit, Clapperboard, Home, Printer, ShieldCheck, Sparkles, Users, Award, Calendar, Gift, BookHeart, FileText, Music } from "lucide-react";
import type { Icon } from 'lucide-react';

export const gamesList = [
  "Alfabeto em Versículos",
  "Dominó Bíblico",
  "Spot It Bíblico",
  "Jogo da Memória de Versículos",
  "Jogo da Velha Bíblico",
  "Jogo das Emoções Bíblicas",
  "Jogo das 3 Pistas",
  "Mico Bíblico",
  "Memória para Casais",
  "Passatempos Bíblicos",
  "Trilha Bíblica",
  "Bingo dos Personagens",
  "Quebra-Cabeça de Histórias",
  "Caça ao Tesouro Bíblico",
  "Cartas de Oração",
  "Dado das Bênçãos",
  "Roleta das Histórias",
  "Quem sou eu? Bíblico",
  "Labirintos de Fé",
  "Criptogramas de Versículos",
  "Desenhos para conectar os pontos",
  "Stop Bíblico",
  "Jogo dos 7 Erros Bíblicos",
  "Adivinhe a Parábola",
  "Palavras Cruzadas Cristãs",
  "Quiz dos Milagres",
];

export const benefits = [
  {
    icon: BookOpen,
    title: "Aprende a Bíblia brincando",
    description: "A criança absorve histórias e versículos de forma natural e divertida."
  },
  {
    icon: BrainCircuit,
    title: "Melhora atenção e memória",
    description: "Jogos que estimulam o foco e a retenção de informações importantes."
  },
  {
    icon: Sparkles,
    title: "Ensinamentos cristãos",
    description: "Valores como amor, perdão e fé são ensinados de maneira prática."
  },
  {
    icon: ShieldCheck,
    title: "Pais têm paz, crianças diversão",
    description: "Conteúdo seguro e edificante que você pode confiar."
  },
  {
    icon: Clapperboard,
    title: "Zero telas, zero riscos",
    description: "Uma alternativa saudável e interativa ao tempo de tela excessivo."
  },
  {
    icon: Users,
    title: "Uso ilimitado",
    description: "Ideal para casa, EBD, células, cultos infantis e escolas."
  }
];

export const forWhom = [
  "Pais cristãos",
  "Professores da EBD",
  "Líderes de crianças",
  "Ministérios infantis",
  "Igrejas com atividades prontas",
  "Quem quer tirar a criança do celular",
  "Quem quer fortalecer o ensino bíblico"
];

export const bonuses: { icon: Icon; title: string; description: string }[] = [
    {
      icon: Gift,
      title: "30 Desafios Bíblicos em Família",
      description: "Transforme qualquer noite em um momento espiritual com desafios rápidos e divertidos."
    },
    {
      icon: BookHeart,
      title: "20 Desenhos Bíblicos para Colorir",
      description: "Heróis e cenas icônicas para a criança colorir enquanto aprende e se inspira."
    },
    {
      icon: Calendar,
      title: "Planner Devocional Infantil",
      description: "Uma ferramenta visual para ajudar os pais a manterem uma rotina devocional com a criança."
    },
    {
      icon: FileText,
      title: "Ebook: Ensinar a Bíblia Sem Ser Chato",
      description: "Mini-guia com técnicas leves e eficazes para pais e líderes ensinarem com mais leveza."
    },
    {
      icon: Award,
      title: "Certificado Herói da Fé",
      description: "As crianças amam! Crie um momento épico de celebração ao final de cada ciclo."
    },
    {
      icon: Music,
      title: "Playlist de Louvor Infantil",
      description: "Uma seleção de músicas animadas para ouvir enquanto brincam e aprendem."
    }
  ];

export const testimonials = [
  {
    id: "testimonial-1",
    name: "Juliana M.",
    city: "Curitiba",
    state: "PR",
    avatar: "testimonial-1",
    comment: "Usei no aniversário da minha filha e virou febre! As crianças amaram e os pais pediram o link. Uma forma incrível de unir diversão e fé.",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Carlos S.",
    city: "Recife",
    state: "PE",
    avatar: "testimonial-2",
    comment: "Na EBD, usamos toda semana. Economiza meu tempo de preparo e mantém todas as crianças atentas e engajadas. O material é de altíssima qualidade.",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Rafael S.",
    city: "São Paulo",
    state: "SP",
    avatar: "testimonial-3",
    comment: "Meu filho aprendeu mais versículos brincando do que em meses de tentativa. Nunca vi ele tão animado para falar sobre as histórias da Bíblia. Recomendo demais!",
    rating: 5
  }
];

// For sales notification
export const firstNames = ["Carla", "Gabriel", "Juliana", "Marcos", "Fernanda", "Lucas", "Beatriz", "Thiago", "Ana", "Pedro"];
export const lastNames = ["Rodrigues", "Moreira", "Silva", "Santos", "Oliveira", "Souza", "Pereira", "Costa", "Lima", "Ferreira"];
export const cities = [
  { city: "Curitiba", state: "PR" },
  { city: "Recife", state: "PE" },
  { city: "São Paulo", state: "SP" },
  { city: "Belo Horizonte", state: "MG" },
  { city: "Fortaleza", state: "CE" },
  { city: "Salvador", state: "BA" },
  { city: "Manaus", state: "AM" },
  { city: "Porto Alegre", state: "RS" },
  { city: "Goiânia", state: "GO" },
  { city: "Brasília", state: "DF" }
];

export const faq = [
  {
    question: "Como vou receber os jogos?",
    answer: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com um link para baixar todos os jogos em formato PDF, prontos para imprimir em qualquer impressora caseira."
  },
  {
    question: "Posso usar na minha igreja ou escola?",
    answer: "Sim! Seu acesso permite o uso ilimitado dos jogos em casa, na igreja, em células, na Escola Bíblica Dominical (EBD), em eventos e até mesmo em escolas. O material é um ótimo recurso ministerial."
  },
  {
    question: "Preciso de algum material especial para imprimir?",
    answer: "Não. Você pode imprimir em folhas de sulfite comuns (A4). Para maior durabilidade, recomendamos um papel de gramatura maior (como 180g), mas não é obrigatório."
  },
  {
    question: "Os jogos são adequados para qual idade?",
    answer: "Os jogos foram projetados para uma ampla faixa etária, geralmente entre 4 a 12 anos. Muitos jogos podem ser adaptados para crianças mais novas ou mais velhas, tornando-os flexíveis para diferentes grupos."
  },
  {
    question: "O pagamento é seguro?",
    answer: "Sim, 100% seguro. O pagamento é processado através de uma das maiores plataformas de pagamentos digitais do Brasil, utilizando criptografia de ponta para proteger seus dados."
  },
  {
    question: "E se eu não gostar?",
    answer: "O risco é zero. Você tem uma garantia incondicional de 7 dias. Se por qualquer motivo não ficar satisfeito, basta enviar um e-mail e nós devolveremos 100% do seu dinheiro, sem perguntas."
  }
];
