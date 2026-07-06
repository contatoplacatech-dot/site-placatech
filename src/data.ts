/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, SymptomItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'placa-mae-pc',
    name: 'Placas-Mãe de Computadores',
    category: 'personal',
    icon: 'Cpu',
    shortDescription: 'Reparo avançado em placas desktop de todas as gerações, chipsets e fabricantes.',
    fullDescription: 'Recuperamos placas-mãe condenadas por outras assistências através de análise esquemática profunda, medições de oscilação osciloscópica e microssoldagem eletrônica de alta precisão.',
    commonProblems: [
      'Não liga ou não dá sinal de energia (Curto-circuito nas linhas de entrada de 12V/5V/3.3V)',
      'Ausência de vídeo, mesmo com coolers girando (Falha na sequência de boot / Power Sequence)',
      'Loop infinito de reinicialização ou travamentos persistentes',
      'Corrupção de BIOS / Firmware UEFI (Necessário regravação física com programadora)',
      'Danos físicos em pinos do soquete do processador (LGA) ou trilhas rompidas'
    ],
    diagnosticProcess: [
      'Inspeção térmica via câmera termográfica infravermelha para localização de calor anômalo.',
      'Varredura de curto com fonte de bancada em trilhas críticas e filtragens de fase (VRM).',
      'Regravação do chip de BIOS em programador externo de alta velocidade.',
      'Substituição de mosfets, capacitores sólidos de tântalo de baixo ESR ou controladores de PWM.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=400&q=80'
  },
  {
    id: 'placa-notebook',
    name: 'Placas de Notebooks',
    category: 'personal',
    icon: 'Laptop',
    shortDescription: 'Soluções cirúrgicas para notebooks de alta performance, MacBooks e ultrabooks.',
    fullDescription: 'Reparo de placas com alto nível de miniaturização. Realizamos retrabalho de solda BGA de processadores e chips gráficos integrados, além de troca de componentes SMD de escala milimétrica.',
    commonProblems: [
      'Curto na linha de entrada principal de 19V (Comum após uso de fontes genéricas)',
      'Derramamento de líquidos (Oxidação em andamento e trilhas corroídas)',
      'Não carrega a bateria ou não reconhece o carregador (Falha no circuito integrado de Charge)',
      'Solda fria ou trinca abaixo do chip de vídeo (GPU) ou do processador (Requer BGA Reballing)'
    ],
    diagnosticProcess: [
      'Banho químico em cuba ultrassônica para descontaminação de resíduos e oxidação.',
      'Análise de barramentos de dados SMBus/I2C sob osciloscópio.',
      'Retrabalho ou Reballing de integrados BGA utilizando perfil térmico controlado por infravermelho.',
      'Substituição de conectores DC Jack, portas USB-C Thunderbolt e controladores térmicos.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&h=400&q=80'
  },
  {
    id: 'placa-inverter',
    name: 'Placas Inverter',
    category: 'heating',
    icon: 'Wind',
    shortDescription: 'Diagnóstico e reparo em placas de ar-condicionado, lavadoras e refrigeração inverter.',
    fullDescription: 'As placas de tecnologia Inverter gerenciam o ciclo de compressores de forma dinâmica. Focamos no conserto dos módulos de potência inteligentes e acopladores ópticos de comunicação.',
    commonProblems: [
      'Erro de comunicação entre a unidade interna e externa (Unidades Evaporadora e Condensadora)',
      'Estouro físico de pontes retificadoras de diodo ou capacitores de barramento de alta tensão (DC Link)',
      'Queima do módulo IGBT / IPM (Falha na partida e gerenciamento do compressor)',
      'Interrupção por surto elétrico ou descargas atmosféricas bruscas'
    ],
    diagnosticProcess: [
      'Teste estático e dinâmico de chaves eletrônicas IGBT utilizando multímetro com modo diodo.',
      'Simulação de carga ativa no compressor em bancada isolada para medir a corrente de saída.',
      'Inspeção óptica microscópica de resistores shunt de amostragem de corrente.',
      'Troca técnica de drivers de gate e optoacopladores de sinal duplo.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=600&h=400&q=80'
  },
  {
    id: 'fonte-eletronica',
    name: 'Fontes Eletrônicas',
    category: 'general',
    icon: 'Zap',
    shortDescription: 'Reparo de fontes chaveadas, automotivas, carregadores industriais e ATX.',
    fullDescription: 'Revisão completa das etapas primária (alta tensão) e secundária (baixa tensão) de fontes chaveadas nacionais e importadas de alta capacidade energética.',
    commonProblems: [
      'Ruídos agudos contínuos sem fornecimento de energia (Falha no oscilador PWM ou realimentação)',
      'Sobretensão na saída ou variações de voltagem que danificam periféricos conectados',
      'Fusíveis estourados acompanhados de pontes de diodos e varistores queimados pós-pico de luz',
      'Perda de capacidade de filtragem de capacitores eletrolíticos (Estufamento interno)'
    ],
    diagnosticProcess: [
      'Análise em transformador de isolamento para segurança nos testes do primário.',
      'Verificação da malha metálica reguladora de feedback via acoplador e referência TL431.',
      'Restauração de trilhas de alta corrente com barramento de cobre reforçado.',
      'Substituição seletiva por capacitores originais japoneses de alta durabilidade (105°C).'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=600&h=400&q=80'
  },
  {
    id: 'placa-industrial',
    name: 'Placas Industriais',
    category: 'industrial',
    icon: 'Layers',
    shortDescription: 'Manutenção especializado em CLPs, IHMs e Inversores de Frequência.',
    fullDescription: 'Atendimento crítico para reduzir o shutdown de indústrias. Reparamos processadores centrais de automação, barramentos de comunicação industrial (Profibus, Modbus) e telas industriais.',
    commonProblems: [
      'Perda repentina da memória de parâmetros (Eprom corrompida ou bateria interna vazada)',
      'Telas de IHM apagadas com backlight inativo ou sensibilidade ao toque corrompida',
      'Saídas digitais (Relés ou Transistores) travadas abertas ou em curto-circuito interno',
      'Módulos de comunicação de rede queimados por transientes em cabos blindados'
    ],
    diagnosticProcess: [
      'Diagnóstico functional usando barramentos simulados em bancada automatizada.',
      'Substituição preventiva de capacitores eletrolíticos para evitar danos futuros no chão de fábrica.',
      'Troca de chips e transceptores RS-485 / CAN bus danificados por descargas indutivas.',
      'Ressolda completa ou substituição de placas controladoras de displays IHM.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&h=400&q=80'
  },
  {
    id: 'maquina-automacao',
    name: 'Máquinas de Automação',
    category: 'industrial',
    icon: 'Network',
    shortDescription: 'Reparo eletrônico de placas de esteiras, esteiras ergométricas e CNCs.',
    fullDescription: 'Consertamos os drivers eletrônicos e interfaces analógicas que comandam motores de passo, servo-motores e eixos automatizados de maquinários comercias e científicos.',
    commonProblems: [
      'Eixos de movimentação travados ou pulando passos por curto no driver de potência',
      'Leitura incorreta de sensores ópticos, capacitivos ou de encoders de posicionamento',
      'Erro persistente de fim de curso ou travamento total de motores industriais',
      'Ruídos espúrios induzidos por aterramento ineficiente afetando placas lógicas'
    ],
    diagnosticProcess: [
      'Mapeamento dos sinais de clock e direção do circuito oscilador das esteiras/fresas.',
      'Testes elétricos dinâmicos com geradores de ondas para mimetizar encoders.',
      'Troca de optoacopladores de barramento rápido de dados para imunidade a ruídos.',
      'Recuperação metálica de invólucros condutivos para blindagem eletromagnética.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&h=400&q=80'
  }  ,
  {
    id: 'maquina-solda',
    name: 'Máquinas de Solda',
    category: 'industrial',
    icon: 'Flame',
    shortDescription: 'Recuperação de placas de inversores de solda TIG, MIG e eletrodo.',
    fullDescription: 'Os inversores de solda atual operam sob condições severas de poeira metálica e vibração mecânica. Fazemos desoxidação, aplicação de verniz isolador e substituição estrutural de potência.',
    commonProblems: [
      'Display liga, porém não abre o arco de solda nem gera corrente na saída física',
      'Lâmpada amarela de superaquecimento/alarme acesa continuamente mesmo fria',
      'Queima simultânea do banco de transistores IGBT de comutação rápida',
      'Curto-circuito interno severo provocado por infiltração de fuligem metálica condutora'
    ],
    diagnosticProcess: [
      'Limpeza química técnica profunda para remoção da fuligem metálica impregnada.',
      'Revisão milimétrica dos circuitos ressonantes secundários e retificação rápida.',
      'Aplicação de camada dupla de verniz dielétrico (Conformal Coating) protetivo de grau militar.',
      'Fixação robusta e substituição de isoladores de mica e pasta térmica estrutural de alta condutividade.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&h=400&q=80'
  },
  {
    id: 'equipamento-geral',
    name: 'Equipamentos Eletrônicos em Geral',
    category: 'general',
    icon: 'Gauge',
    shortDescription: 'Conserto especializado de instrumentos industriais, áudio profissional e controles.',
    fullDescription: 'Atendemos equipamentos específicos sob análise sob demanda, desde eletrônica analógica pura de áudio, osciloscópios, fontes de laboratórios até sensores agrários de alto valor.',
    commonProblems: [
      'Interrupção por surto elétrico atmosférico (raios) em redes elétricas rurais ou urbanas',
      'Teclados capacitivos e membranas de controle rompidas ou inoperantes',
      'Perda de calibração eletrônica com leituras analógicas flutuantes ou ruidosas',
      'Intermitências causadas por soldas frias quebradas por vibração mecânica constante'
    ],
    diagnosticProcess: [
      'Inspeção pino a pino sob microscópio estereoscópico triocular de alta definição.',
      'Mapeamento térmico em tempo real de reguladores de tensão lineares e LDOs.',
      'Restauração de membranas de controle flexíveis com tinta condutiva à base de prata pura.',
      'Recalibração estática do circuito analógico referenciado com padrões de laboratório.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1597423498219-04118211d215?auto=format&fit=crop&w=600&h=400&q=80'
  }
];

export const SYMPTOMS_MAP: Record<string, SymptomItem[]> = {
  'placa-mae-pc': [
    {
      id: 'pc1',
      symptom: 'Totalmente morto (não liga nenhuma luz/cooler)',
      likelyCause: 'Mosfets de entrada em curto ou curto-circuito na linha principal de 12V do processador.',
      repairComplexity: 'Média',
      estimatedDuration: '2 a 3 dias úteis',
      processRequired: ['Injeção de tensão controlada em bancada', 'Remoção e troca de componentes SMD', 'Análise de condução reversa nas linhas USB']
    },
    {
      id: 'pc2',
      symptom: 'Liga e em seguida desliga / Loop infinito',
      likelyCause: 'Falha de comunicação entre chip super I/O e processador ou corrupção no arquivo binário da BIOS.',
      repairComplexity: 'Alta',
      estimatedDuration: '3 a 5 dias úteis',
      processRequired: ['Regravação física de BIOS em eprom flash de 1.8V/3.3V', 'Análise das fontes de memória RAM (VDDQ)', 'Substituição de CI regulador de fases']
    },
    {
      id: 'pc3',
      symptom: 'Sem vídeo na tela, mas liga todos os coolers',
      likelyCause: 'Processamento ausente gerado por solda fria no chipset norte/sul PCH ou falha de clock interno.',
      repairComplexity: 'Alta',
      estimatedDuration: '3 a 5 dias úteis',
      processRequired: ['Ressoldagem infravermelha de Chipset', 'Análise lógica do barramento de clock com osciloscópio (25MHz)', 'Revisão do circuito de Reset principal']
    }
  ],
  'placa-notebook': [
    {
      id: 'nb1',
      symptom: 'Líquido derramado sobre o teclado / Não liga',
      likelyCause: 'Curtos variados causados por resíduos químicos corrosivos ativos.',
      repairComplexity: 'Alta',
      estimatedDuration: '3 a 5 dias úteis',
      processRequired: ['Banho químico ultrassônico instantâneo', 'Reconstrução de trilhas micro-eletrônicas rompidas', 'Inspeção microscópica minuciosa de componentes corroídos']
    },
    {
      id: 'nb2',
      symptom: 'Conecta o carregador e a luz do carregador apaga',
      likelyCause: 'Curto na linha de alta impedância (19V principal - VIN).',
      repairComplexity: 'Média',
      estimatedDuration: '1 a 2 dias úteis',
      processRequired: ['Análise térmica com câmera infravermelha', 'Substituição de capacitor cerâmico (MLCC) trincado', 'Substituição do circuito integrado Mosfet Dual de Entrada']
    },
    {
      id: 'nb3',
      symptom: 'Não carrega bateria ou não detecta rede elétrica',
      likelyCause: 'Circuito lógico de Charger inoperante devido a descarga ou surto elétrico no conector Jack.',
      repairComplexity: 'Média',
      estimatedDuration: '2 a 3 dias úteis',
      processRequired: ['Teste do circuito oscilador PWM de charge', 'Troca de resistor shunt sensor de corrente', 'Troca física do circuito integrado multiplexador de carga']
    }
  ],
  'placa-inverter': [
    {
      id: 'inv1',
      symptom: 'Erro de comunicação / LED Piscando',
      likelyCause: 'Acopladores ópticos inoperantes ou fonte stand-by secundária inativa por pico de tensão.',
      repairComplexity: 'Média',
      estimatedDuration: '2 a 4 dias úteis',
      processRequired: ['Análise diferencial dos optoacopladores', 'Troca técnica de diodos zener de barramento e regulador linear', 'Teste físico sequencial de dados rx/tx de barramento']
    },
    {
      id: 'inv2',
      symptom: 'Queima o fusível principal assim que liga',
      likelyCause: 'Retificador de alta voltagem em curto direto ou ponte IPM/IGBT rompida internamente.',
      repairComplexity: 'Alta',
      estimatedDuration: '3 a 5 dias úteis',
      processRequired: ['Ressoldagem estrutural e aplicação de adesivo térmico elastômero', 'Substituição da ponte de diodos e do módulo IPM principal', 'Verificação estrita das linhas de filtragem DC Link']
    }
  ],
  'fonte-eletronica': [
    {
      id: 'fnt1',
      symptom: 'Fusível rompido acompanhado de forte odor de queimado',
      likelyCause: 'Estouro térmico dos mosfets de chaveamento primário e ponte retificadora de entrada.',
      repairComplexity: 'Baixa',
      estimatedDuration: '1 a 2 dias úteis',
      processRequired: ['Substituição de fusível cerâmico, varistor de proteção e termistor NTC', 'Substituição por transistores de silício MOSFET de alto dV/dt', 'Teste de estresse em carga eletrônica programável']
    },
    {
      id: 'fnt2',
      symptom: 'Tensão de saída oscilando / Desliga sob carga',
      likelyCause: 'Perda significativa de capacitância ou falha no circuito regulador optoacoplado de feedback TL431.',
      repairComplexity: 'Média',
      estimatedDuration: '1 a 2 dias úteis',
      processRequired: ['Substituição completa do banco de capacitores por modelos Low ESR', 'Rejuvenescimento das soldas de potência', 'Ajuste fino da realimentação com resistores de precisão']
    }
  ],
  'placa-industrial': [
    {
      id: 'ind1',
      symptom: 'Inversor de Frequência não aciona motor / Erros no display',
      likelyCause: 'Disparo errático por sensores internos danificados ou falha no conversor analógico-digital.',
      repairComplexity: 'Alta',
      estimatedDuration: '4 a 6 dias úteis',
      processRequired: ['Análise de ruído de alta frequência com pontes diferenciais isoladas', 'Troca de transceptores lógicos e drivers isolados magnéticos', 'Calibração em malha de loop com sinal padrão (4-20mA)']
    },
    {
      id: 'ind2',
      symptom: 'IHM não dá imagem ou tela está sensível apenas em partes',
      likelyCause: 'Ruptura das trilhas condutoras resistivas no vidro da tela de toque ou falha na alimentação do inversor CCFL/LED.',
      repairComplexity: 'Média',
      estimatedDuration: '2 a 3 dias úteis',
      processRequired: ['Substituição da película digitalizadora touchscreen', 'Conserto do conversor step-up do backlight de iluminação de fundo', 'Ressoldagem ultrafina de contatos flexíveis ribbon FPC']
    }
  ],
  'maquina-automacao': [
    {
      id: 'aut1',
      symptom: 'Perda de torque ou motor pulando passos com ruído elétrico',
      likelyCause: 'Estágio integrado excitador de fases de motor em curto-circuito térmico parcial.',
      repairComplexity: 'Média',
      estimatedDuration: '3 a 5 dias úteis',
      processRequired: ['Troca do chip driver dedicado de potência ou transistores de potência adjacentes', 'Mapeamento de oscilações indutivas nas bobinas em bancada', 'Instalação de diodos de supressão flyback de proteção adicional']
    }
  ],
  'maquina-solda': [
    {
      id: 'sld1',
      symptom: 'Liga normal porém não gera faísca / Sem arco elétrico',
      likelyCause: 'Falha no transformador de alta frequência interno ou nos diodos retificadores rápidos de saída.',
      repairComplexity: 'Alta',
      estimatedDuration: '3 a 5 dias úteis',
      processRequired: ['Substituição seletiva dos diodos retificadores Schottky rápidos de alta amperagem', 'Inspeção térmica do transformador toroidal principal', 'Revisão das linhas auxiliares de gatilho mecânico de acionamento']
    }
  ],
  'equipamento-geral': [
    {
      id: 'ger1',
      symptom: 'Equipamento inoperante após descarga atmosférica (raio)',
      likelyCause: 'Falha encadeada de proteção varistores, trilhas de potência vaporizadas e microcontroladores secundários queimados.',
      repairComplexity: 'Altíssima',
      estimatedDuration: '4 a 7 dias úteis',
      processRequired: ['Trabalho intensivo de reconstrução estrutural de trilhas multilayers', 'Substituição preventiva de todas as proteções galvânicas e filtros EMI', 'Substituição de reguladores lógicos e verificação térmica sob estresse contínuo']
    }
  ]
};
