/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Cpu, 
  Sun, 
  Activity, 
  Flame, 
  Snowflake, 
  Wind, 
  Laptop, 
  Shield, 
  Monitor, 
  Navigation, 
  Compass, 
  Power, 
  BatteryCharging, 
  RefreshCw,
  MessageSquare, 
  Sparkles,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { PlacatechLogo } from './components/PlacatechLogo';

// Define specialized services lists with high-quality real images requested by the user
const INVERTER_SERVICES = [
  {
    name: 'Inversores Solares',
    icon: Sun,
    desc: 'Reparo avançado em inversores de sistemas de geração de energia fotovoltaica.',
    image: 'https://www.energiasolarphb.com.br/wp-content/uploads/2024/02/depto_manutencao.jpg'
  },
  {
    name: 'Inversores de Frequência',
    icon: Activity,
    desc: 'Manutenção corretiva e preventiva de módulos de controle industrial e conversores.',
    image: 'https://www.aceletron.com/imagens/informacoes/inversor-frequencia-conserto-01.webp'
  },
  {
    name: 'Inversores de Solda',
    icon: Flame,
    desc: 'Restauração de circuitos de potência e controle de fontes de soldagem inverter.',
    image: 'https://www.aceletron.com/imagens/informacoes/conserto-inversor-tensao-02.webp'
  },
  {
    name: 'Placa de Geladeira',
    icon: Snowflake,
    desc: 'Conserto de módulos inteligentes e de comando de refrigeradores inverter.',
    image: 'https://i.ytimg.com/vi/CPokMn8ct3g/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLBgfT2ruiw9dvdyzaRT7GzCBk_KIQ'
  },
  {
    name: 'Placa de Ar Condicionado',
    icon: Wind,
    desc: 'Solução em placas de unidades condensadoras e evaporadoras de climatização inverter.',
    image: 'https://images.tcdn.com.br/img/editor/up/417495/placa_de_ar_condicionado_5.jpg'
  },
  {
    name: 'Placa de Lava e Seca',
    icon: RefreshCw,
    desc: 'Recuperação de placas eletrônicas de controle de motores Direct Drive e painéis.',
    image: 'https://i.ytimg.com/vi/OvJTtTvyf78/maxresdefault.jpg'
  }
];

const CONVENCIONAL_SERVICES = [
  {
    name: 'Placa de Notebooks',
    icon: Laptop,
    desc: 'Microssoldagem de placas-mãe, reparo de curto-circuito, BIOS e recondicionamento.',
    image: 'https://fourtech.com.br/wp-content/uploads/2010/11/conserto-de-notebook-1.jpg'
  },
  {
    name: 'Nobreaks',
    icon: Shield,
    desc: 'Manutenção em sistemas ininterruptos de energia e circuitos de proteção.',
    image: 'https://3ainfo.com.br/wp-content/uploads/2025/10/cropped-hand-repairing-cpu_1048944-27344801-1024x683.jpg'
  },
  {
    name: 'Monitor',
    icon: Monitor,
    desc: 'Reparo em placas de vídeo, fontes internas e placas lógicas de telas.',
    image: 'https://www.disktvconserto.com.br/wp-content/uploads/2016/09/7.jpg'
  },
  {
    name: 'Hoverboard',
    icon: Navigation,
    desc: 'Conserto de placas de giroscópio e controle de potência de patinetes elétricos.',
    image: 'https://consertecerto.com/img/hoverboard1.jpg'
  },
  {
    name: 'Drones',
    icon: Compass,
    desc: 'Manutenção de controladoras de voo, ESCs e receptores de sinal.',
    image: 'https://static.wixstatic.com/media/d0bd2e_b61b102e15df4446a535d3541cf40f00~mv2.png/v1/fill/w_700,h_522,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/d0bd2e_b61b102e15df4446a535d3541cf40f00~mv2.png'
  },
  {
    name: 'Fontes Chaveadas',
    icon: Power,
    desc: 'Reparos de estágios primários e secundários de fontes industriais e comerciais.',
    image: 'https://www.aceletron.com/imagens/informacoes/conserto-fontes-chaveadas-03.webp'
  },
  {
    name: 'Carregadores de Baterias',
    icon: BatteryCharging,
    desc: 'Conserto de carregadores de ferramentas, veículos elétricos e equipamentos em geral.',
    image: 'https://i.ytimg.com/vi/7Efn_r0ntBg/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGHIgTShAMA8=&rs=AOn4CLCghYRCUadH6G0EDH0BanocodBrbA'
  },
  {
    name: 'Placas de esteira ergométrica',
    icon: Activity,
    desc: 'Reparo e calibração de placas de controle de velocidade, potência e inclinação de esteiras.',
    image: 'https://i.ibb.co/JFkCLjLk/hq720.jpg'
  }
];

export default function App() {
  const handleWhatsApp = () => {
    const message = 'Olá! Acessei o site da PLACATECH e gostaria de solicitar um orçamento para o reparo de uma placa eletrônica.';
    window.open(`https://wa.me/5561982032920?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-[#000940] font-sans antialiased selection:bg-[#0035F5]/20 selection:text-[#000940]" id="placatech-landing">
      
      {/* 1. CABEÇALHO (Header) */}
      <header className="bg-white border-b border-slate-100 shadow-sm w-full" id="header-section">
        <div className="w-full flex items-center justify-center p-0">
          <a href="#inicio" className="w-full flex items-center justify-center focus:outline-none" id="logo-link">
            <PlacatechLogo />
          </a>
        </div>
      </header>

      {/* 2. SEÇÃO PRINCIPAL (Hero Section) */}
      <section id="inicio" className="relative pt-1 pb-3 sm:pt-2 sm:pb-4 overflow-hidden bg-slate-50/70 circuit-grid border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-1.5">
            
            {/* Título Principal */}
            <h1 className="font-sans font-extrabold tracking-tight text-base sm:text-lg md:text-xl text-[#0015A0] leading-snug" id="hero-title">
              Especializada em recuperação de placas eletrônicas de diversos segmentos
            </h1>

            {/* Subtítulo */}
            <p className="text-[11px] sm:text-xs text-[#000940]/80 leading-relaxed max-w-3xl mx-auto font-medium" id="hero-subtitle">
              Oferecendo diagnósticos precisos que podem gerar uma economia de até 70% em comparação com a substituição da placa.
            </p>

            {/* Destaque */}
            <div className="p-2 bg-white border border-slate-150 rounded-xl max-w-2xl mx-auto text-[#0035F5] font-bold text-[11px] sm:text-xs tracking-wide shadow-sm" id="hero-highlight">
              Com laboratório completo e tecnologia de ponta para melhor assertividade no sucesso do conserto.
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DE SERVIÇOS (Duas Colunas Simétricas) */}
      <section id="servicos" className="pt-2 pb-6 sm:pt-3 sm:pb-8 bg-[#F8F9FA] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-4 space-y-2">
            <h2 className="font-sans font-extrabold text-base sm:text-lg md:text-xl text-[#0015A0] tracking-tight">
              Especialidades e Equipamentos Atendidos
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#0035F5] to-[#0015A0] mx-auto rounded-full"></div>
          </div>

          {/* Symmetrical Columns Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">
            
            {/* Coluna 1: EQUIPAMENTOS COM TECNOLOGIA INVERTER */}
            <div className="space-y-4 bg-white p-4 sm:p-6 rounded-2xl border border-slate-100 shadow-sm" id="col-inverter">
              <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3 mb-1">
                <div className="p-2 bg-[#0035F5]/5 text-[#0035F5] rounded-xl border border-[#0035F5]/10">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm sm:text-base text-[#000940] tracking-tight">
                    EQUIPAMENTOS COM TECNOLOGIA INVERTER
                  </h3>
                  <p className="text-[9px] font-mono text-[#0035F5] tracking-wider uppercase font-semibold">Módulos Inteligentes de Frequência & Potência</p>
                </div>
              </div>

              {/* Grid of Inverter Services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {INVERTER_SERVICES.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div 
                      key={idx} 
                      className="bg-[#F8F9FA] border border-slate-150 rounded-2xl overflow-hidden group hover:border-[#0035F5]/30 transition-all flex flex-col h-full shadow-sm"
                    >
                      <div className="w-full h-28 overflow-hidden relative">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FA] via-transparent to-transparent"></div>
                        <div className="absolute bottom-2 left-2 p-1.5 bg-gradient-to-r from-[#0035F5] to-[#0015A0] text-white rounded-lg">
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <h4 className="font-sans font-bold text-xs sm:text-sm text-[#000940] group-hover:text-[#0035F5] transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-[10px] text-slate-500 mt-1 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Callout para preencher o espaço em branco no desktop */}
              <div className="mt-4 p-4 bg-gradient-to-r from-blue-50/50 to-[#0035F5]/5 border border-[#0035F5]/10 rounded-2xl flex items-center gap-4 hover:border-[#0035F5]/25 transition-all shadow-sm" id="callout-entre-outras">
                <div className="p-2.5 bg-white text-[#0035F5] rounded-xl shadow-sm border border-slate-100 shrink-0">
                  <Cpu className="w-5 h-5 text-[#0035F5]" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-[#000940]">
                    Entre outras placas eletrônicas.
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed font-medium">
                    Consertamos diversos outros tipos de circuitos sob consulta. Fale com nossa equipe para uma avaliação rápida.
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna 2: EQUIPAMENTOS CONVENCIONAIS */}
            <div className="space-y-4 bg-white p-4 sm:p-6 rounded-2xl border border-slate-100 shadow-sm" id="col-convencional">
              <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3 mb-1">
                <div className="p-2 bg-[#0035F5]/5 text-[#0035F5] rounded-xl border border-[#0035F5]/10">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm sm:text-base text-[#000940] tracking-tight">
                    EQUIPAMENTOS CONVENCIONAIS
                  </h3>
                  <p className="text-[9px] font-mono text-[#0035F5] tracking-wider uppercase font-semibold">Circuitos Eletrônicos Tradicionais & Digitais</p>
                </div>
              </div>

              {/* Grid of Conventional Services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CONVENCIONAL_SERVICES.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div 
                      key={idx} 
                      className="bg-[#F8F9FA] border border-slate-150 rounded-2xl overflow-hidden group hover:border-[#0035F5]/30 transition-all flex flex-col h-full shadow-sm"
                    >
                      <div className="w-full h-28 overflow-hidden relative">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FA] via-transparent to-transparent"></div>
                        <div className="absolute bottom-2 left-2 p-1.5 bg-gradient-to-r from-[#0035F5] to-[#0015A0] text-white rounded-lg">
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <h4 className="font-sans font-bold text-xs sm:text-sm text-[#000940] group-hover:text-[#0035F5] transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-[10px] text-slate-500 mt-1 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SEÇÃO DE APRESENTAÇÃO (Sobre / Liderança e Tecnologia em Bancada) */}
      <section id="sobre" className="py-14 bg-white relative z-10 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Texto de Apresentação */}
          <div className="space-y-6">
            <span className="text-[10px] font-mono tracking-widest text-[#0035F5] uppercase font-bold bg-[#0035F5]/5 py-1.5 px-4 rounded-full border border-[#0035F5]/10 inline-block">
              Sobre a PLACATECH
            </span>
            <h2 className="font-sans font-bold text-2xl sm:text-3.5xl text-[#0015A0] tracking-tight">
              Liderança e Tecnologia em Bancada
            </h2>
            <p className="text-sm sm:text-base text-[#000940]/80 leading-relaxed font-sans font-medium max-w-3xl mx-auto">
              Uma empresa especializada no reparo de placas eletrônicas e tecnologia inverter desempenha um papel crucial hoje em dia, especially na manutenção de eletrodomésticos modernos, sistemas de climatização (como ar-condicionado), geladeiras, lava e seca e automação industrial. Combinamos conhecimento em eletrônica tradicional com especialização em controle de potência.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Trust indicators */}
      <section className="py-12 bg-white border-y border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="p-4 space-y-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#0035F5]">Até 70%</span>
              <p className="text-xs text-slate-600 font-semibold uppercase tracking-wider">De economia real</p>
              <p className="text-xs text-slate-400">Se comparado à substituição por uma placa nova de fábrica</p>
            </div>
            <div className="p-4 space-y-2 border-t sm:border-t-0 sm:border-x border-slate-100">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#0035F5]">100% Completo</span>
              <p className="text-xs text-slate-600 font-semibold uppercase tracking-wider">Laboratório Próprio</p>
              <p className="text-xs text-slate-400">Equipado com osciloscópios, medidores ESR e estações infravermelhas</p>
            </div>
            <div className="p-4 space-y-2 border-t sm:border-t-0">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#0035F5]">Garantia Real</span>
              <p className="text-xs text-slate-600 font-semibold uppercase tracking-wider">Segurança Técnica</p>
              <p className="text-xs text-slate-400">Todos os reparos contam com garantia técnica expressa homologada</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 SEÇÃO DE LOCALIZAÇÃO (Google Maps) */}
      <section className="py-12 bg-slate-50 border-b border-slate-100 relative z-10" id="localizacao">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#0035F5] uppercase font-bold bg-[#0035F5]/5 py-1.5 px-4 rounded-full border border-[#0035F5]/10 inline-block">
              Onde Estamos
            </span>
            <h2 className="font-sans font-extrabold text-xl sm:text-2xl text-[#0015A0] tracking-tight">
              Nossa Localização
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#0035F5] to-[#0015A0] mx-auto rounded-full"></div>
            <p className="text-xs sm:text-sm text-[#000940]/80 font-medium">
              Venha nos visitar ou envie seu equipamento para o nosso laboratório em Formosa - GO.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Informações de Endereço */}
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#0035F5]/5 text-[#0035F5] rounded-lg border border-[#0035F5]/10 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-[#000940]">Endereço</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Placa Tech<br />
                      Formosa - GO
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#0035F5]/5 text-[#0035F5] rounded-lg border border-[#0035F5]/10 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-[#000940]">Contato</h4>
                    <p className="text-xs text-slate-600 mt-1 font-mono">
                      (61) 98203-2920
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href="https://www.google.com/maps/place/Placa+Tech/@-15.5501737,-47.3328012,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-[#0035F5] to-[#0015A0] hover:from-[#0015A0] hover:to-[#0035F5] text-white rounded-lg flex items-center justify-center gap-2 text-xs font-bold transition-all shadow-md shadow-blue-500/10 text-center"
                >
                  Abrir no Google Maps
                </a>
              </div>
            </div>

            {/* Mapa Interativo */}
            <div className="lg:col-span-8 bg-white p-2 rounded-2xl border border-slate-100 shadow-sm overflow-hidden h-[300px] sm:h-[350px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.7554904535497!2d-47.33501712423377!3d-15.550173685417088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9350a372761565dd%3A0x41a9b43555bd72e7!2sPlaca%20Tech!5e0!3m2!1spt-BR!2sbr!4v1719800000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl w-full h-full"
                title="Placa Tech no Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RODAPÉ & CONTATO (Footer) com degradê do azul marinho escuro (#000940) para o azul real (#0015A0) */}
      <footer id="contato" className="bg-gradient-to-b from-[#000940] to-[#000420] text-slate-300 text-xs relative z-10 border-t border-blue-900/40">
        
        {/* Main Footer / Contact Info Block */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Branding Column (Col 5) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <PlacatechLogo className="!max-w-[200px]" />
              <p className="text-slate-200 text-sm leading-relaxed max-w-sm">
                Sua parceira ideal no reparo especializado de placas eletrônicas convencionais e de tecnologia inverter. Garantindo diagnósticos de alta assertividade.
              </p>
              
              {/* Quick Info contacts */}
              <div className="space-y-3 font-sans text-xs text-slate-200">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#0035F5]" />
                  <span>WhatsApp: (61) 98203-2920</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#0035F5]" />
                  <span>contatoplacatech@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#0035F5]" />
                  <span>Formosa - GO e Região</span>
                </div>
              </div>
            </div>

            {/* Direct Contact CTA (Col 7) */}
            <div className="lg:col-span-7 bg-white/5 p-6 sm:p-10 rounded-3xl border border-white/10 space-y-6 text-center lg:text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#0035F5] uppercase font-bold block">
                Solicite uma Avaliação
              </span>
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-white tracking-tight">
                Fale diretamente com nossa equipe técnica de bancada
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans max-w-xl">
                Tem uma placa precisando de conserto? Fale conosco agora mesmo no WhatsApp. Enviando fotos e relatos do problema, realizamos uma triagem inicial rápida.
              </p>
              
              {/* HIGHLY VISIBLE WHATSAPP BUTTON (Mandated in Prompt) */}
              <div className="pt-2">
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0035F5] to-[#0015A0] hover:from-[#0015A0] hover:to-[#0035F5] text-white rounded-xl text-sm sm:text-base font-extrabold transition-all transform hover:scale-[1.02] shadow-xl shadow-blue-600/30 cursor-pointer w-full sm:w-auto"
                  id="btn-footer-cta-whatsapp"
                >
                  <MessageSquare className="w-5 h-5 text-white animate-bounce" />
                  Falar no WhatsApp: 61 9 8203-2920
                </button>
              </div>
            </div>

          </div>

          {/* Symmetrical footer bottom links */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} PLACATECH - Reparo de Placas Eletrônicas. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 font-semibold text-slate-300">
              <a href="#inicio" className="hover:text-white transition-colors">Voltar ao topo</a>
              <span>|</span>
              <a href="#servicos" className="hover:text-white transition-colors">Especialidades</a>
            </div>
          </div>
        </div>

      </footer>

    </div>
  );
}
