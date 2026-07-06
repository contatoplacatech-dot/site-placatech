/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Cpu, Zap, Activity, Info, Sparkles, CheckCircle2 } from 'lucide-react';

interface PCBComponent {
  id: string;
  name: string;
  type: string;
  x: number; // percentage from left
  y: number; // percentage from top
  voltage: string;
  waveform: 'sine' | 'square' | 'flat' | 'noise' | 'pulse';
  status: 'OK' | 'DEGRADADO' | 'EM CURTO' | 'ABERTO';
  color: string;
  description: string;
  repairMethod: string;
}

const PCB_COMPONENTS: PCBComponent[] = [
  {
    id: 'mosfet-input',
    name: 'MOSFET de Entrada (Power Stage)',
    type: 'Transistor de Chaveamento',
    x: 18,
    y: 28,
    voltage: '19.2V -> 0.0V',
    waveform: 'flat',
    status: 'EM CURTO',
    color: 'bg-red-500',
    description: 'Responsável pelo chaveamento principal de energia. Apresenta impedância nula em relação ao terra (curto-circuito clássico).',
    repairMethod: 'Substituição térmica por peça original de baixo RDS-on e limpeza de pistas circundantes.'
  },
  {
    id: 'capacitor-filter',
    name: 'Banco de Capacitores de Altura',
    type: 'Capacitor Eletrolítico / Tântalo',
    x: 48,
    y: 32,
    voltage: '1.2V Ruidoso',
    waveform: 'noise',
    status: 'DEGRADADO',
    color: 'bg-amber-500',
    description: 'Filtro de ripple pós-chaveamento. Capacitância reduzida a 35% do valor nominal devido ao desgaste térmico.',
    repairMethod: 'Substituição preventiva de todos os eletrolíticos integrados por modelos japoneses de alta durabilidade.'
  },
  {
    id: 'mcu-controller',
    name: 'Microcontrolador Principal (MCU)',
    type: 'Circuito Integrado QFP',
    x: 75,
    y: 50,
    voltage: '3.3V Estável',
    waveform: 'square',
    status: 'OK',
    color: 'bg-emerald-500',
    description: 'Armazena o firmware de controle e gerencia o barramento de automação. Funcionamento lógico intacto.',
    repairMethod: 'Sem intervenção direta necessária. Verificado barramento de clock e integridade de barramentos lógicos.'
  },
  {
    id: 'optocoupler-iso',
    name: 'Optoacoplador de Separação Rápida',
    type: 'Opto-isolador',
    x: 35,
    y: 72,
    voltage: '0.0V Contínuo',
    waveform: 'flat',
    status: 'ABERTO',
    color: 'bg-red-500',
    description: 'Isolador galvânico que protege a área lógica de alta tensão. Emissor interno queimado por transiente indutivo.',
    repairMethod: 'Troca técnica de barramento opto-acoplado duplo para reestabelecimento da comunicação do comando.'
  },
  {
    id: 'pwm-controller',
    name: 'Controlador PWM (Modulação)',
    type: 'CI Controlador SMD',
    x: 55,
    y: 65,
    voltage: '5.0V Limpo',
    waveform: 'sine',
    status: 'OK',
    color: 'bg-emerald-500',
    description: 'Regula os ciclos de trabalho de chaveamento energético. Frequência portadora estável e oscilação em 250kHz.',
    repairMethod: 'Nenhuma ação necessária. Sinais de gate funcionando conforme especificações do fabricante.'
  }
];

export const TechTestBench: React.FC = () => {
  const [selectedComp, setSelectedComp] = useState<PCBComponent>(PCB_COMPONENTS[0]);
  const [oscialloOffset, setOscilloOffset] = useState<number>(0);
  const [measurementMode, setMeasurementMode] = useState<'voltage' | 'waveform'>('voltage');

  // Wave tracker animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setOscilloOffset((prev) => (prev + 4) % 360);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  // Generate oscilloscope path string
  const getOscilloscopePath = (type: string) => {
    const width = 300;
    const height = 110;
    const midY = height / 2;
    let points = [];

    for (let x = 0; x <= width; x += 3) {
      let y = midY;
      const angle = (x + oscialloOffset) * (Math.PI / 180) * 1.8;

      if (type === 'sine') {
        y = midY + Math.sin(angle) * 35;
      } else if (type === 'square') {
        y = midY + (Math.sin(angle) >= 0 ? 30 : -30);
      } else if (type === 'noise') {
        y = midY + Math.sin(angle) * 15 + (Math.random() - 0.5) * 18;
      } else if (type === 'pulse') {
        y = midY + (x % 60 === 0 ? -45 : x % 60 === 5 ? 45 : 0);
      } else if (type === 'flat') {
        y = midY + (Math.random() - 0.5) * 1.5; // subtle ripple
      }

      points.push(`${x},${y}`);
    }

    return `M ${points.join(' L ')}`;
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm" id="tech-test-bench-section">
      {/* Top Banner / Tab */}
      <div className="bg-slate-900 text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Activity className="w-5 h-5 text-blue-400 animate-pulse" />
          <span className="font-display font-medium text-sm tracking-wide uppercase">
            Placataest Diagnostic Sandbox v2.8
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono py-1 px-2.5 rounded bg-blue-950 text-blue-400 border border-blue-900/50 uppercase font-bold">
            Simulador de Teste de Osciloscópio
          </span>
          <span className="text-[10px] font-mono py-1 px-2 rounded bg-emerald-950 text-emerald-400 border border-emerald-900/30 uppercase">
            CALIBRADO
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* PCB Interactive Layout (Left/Middle) */}
        <div className="p-6 lg:p-8 lg:col-span-7 bg-slate-50 flex flex-col justify-between border-r border-slate-150">
          <div className="mb-4">
            <h3 className="font-display font-semibold text-slate-900 text-lg flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Sonda de Diagnóstico Interativo
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-lg">
              Clique em qualquer componente destacado no circuito esquemático abaixo para conectar a ponta de prova do osciloscópio e diagnosticar o sintoma elétrico.
            </p>
          </div>

          {/* Simulated PCB Layout Container */}
          <div className="relative w-full aspect-[16/10] bg-slate-900 rounded-xl border border-slate-800 p-4 shadow-inner overflow-hidden flex items-center justify-center">
            {/* Grid network */}
            <div className="absolute inset-0 circuit-grid opacity-15"></div>

            {/* Simulated wiring traces (copper) */}
            <svg className="absolute inset-0 w-full h-full opacity-35" pointerEvents="none">
              <path d="M 50,50 L 150,50 L 150,150 L 350,150 L 350,250" stroke="#3b82f6" strokeWidth="2" fill="none"/>
              <path d="M 200,80 L 200,200 L 450,200 L 450,100" stroke="#0033cc" strokeWidth="1.5" fill="none"/>
              <path d="M 120,220 L 280,220 L 280,320" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
              <circle cx="150" cy="50" r="3" fill="#3b82f6"/>
              <circle cx="350" cy="150" r="3" fill="#3b82f6"/>
              <circle cx="200" cy="200" r="3" fill="#0033cc"/>
              <circle cx="450" cy="100" r="3" fill="#0033cc"/>
            </svg>

            {/* Custom styled board texture */}
            <div className="w-[92%] h-[88%] rounded bg-emerald-950/70 border-4 border-emerald-900 relative shadow-2xl flex flex-col justify-between p-3 overflow-hidden">
              {/* Copper pour accents */}
              <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full border border-emerald-800/60 opacity-30"></div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full border border-emerald-800/60 opacity-30"></div>

              {/* Silicon text branding */}
              <div className="flex justify-between items-center opacity-40 select-none">
                <span className="font-mono text-[9px] text-emerald-400 tracking-widest uppercase">PLACATECH_PCB_REV2</span>
                <span className="font-mono text-[9px] text-emerald-400 font-bold">30Y_EXPERTISE</span>
              </div>

              {/* Central BGA processor schematic square */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border border-emerald-700/80 rounded bg-emerald-900/40 flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-dashed border-emerald-800 rounded-full animate-spin [animation-duration:40s] opacity-40"></div>
              </div>

              {/* Component Buttons mapped on top */}
              {PCB_COMPONENTS.map((comp) => {
                const isSelected = selectedComp.id === comp.id;
                return (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedComp(comp)}
                    style={{ left: `${comp.x}%`, top: `${comp.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                    id={`btn-pcb-${comp.id}`}
                  >
                    {/* Pulsing selection effect */}
                    {isSelected && (
                      <span className="absolute -inset-4 rounded-full bg-blue-500/20 animate-ping [animation-duration:1.5s]"></span>
                    )}
                    
                    {/* Outer hover boundary */}
                    <span className={`block p-2.5 rounded-lg border transition-all duration-300 ${
                      isSelected 
                        ? 'bg-slate-900/95 border-blue-500 text-white shadow-lg scale-110' 
                        : 'bg-emerald-900/90 hover:bg-slate-900 border-emerald-700 hover:border-slate-300 text-emerald-300 hover:text-white'
                    }`}>
                      <div className="flex items-center gap-1.5">
                        {comp.id === 'mcu-controller' ? (
                          <Cpu className={`w-4 h-4 ${isSelected ? 'text-blue-400' : ''}`} />
                        ) : (
                          <Zap className={`w-4 h-4 ${isSelected ? 'text-amber-400' : ''}`} />
                        )}
                        <span className="text-[10px] font-semibold tracking-wider uppercase font-mono max-w-[80px] truncate">
                          {comp.id.replace('-',' ').toUpperCase()}
                        </span>
                      </div>
                    </span>

                    {/* Status Dot Pin */}
                    <span className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border border-slate-900 ${
                      comp.status === 'OK' 
                        ? 'bg-emerald-500' 
                        : comp.status === 'DEGRADADO' 
                          ? 'bg-amber-500' 
                          : 'bg-red-500 animate-pulse'
                    }`}></span>
                  </button>
                );
              })}

              {/* Virtual Probe Head representation line pointing to selected */}
              <div className="absolute bottom-2 left-4 px-2.5 py-1 rounded bg-slate-950/80 border border-slate-800 text-slate-400 font-mono text-[9px] tracking-wide">
                PONTA DE PROVA CONECTADA EM: <span className="text-blue-400 font-bold">{selectedComp.name.toUpperCase()}</span>
              </div>
            </div>
          </div>

          {/* Quick feedback indicator row */}
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 justify-between items-center text-xs text-slate-500 font-mono border-t border-slate-200/60 pt-4">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span>Sinal Nominal (OK)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span>Degradação Térmica</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
              <span>Curto-Circuito / Aberto</span>
            </div>
          </div>
        </div>

        {/* Oscilloscope Panel (Right Display Panel) */}
        <div className="p-6 lg:p-8 lg:col-span-5 flex flex-col justify-between bg-slate-900 text-slate-100">
          <div>
            {/* Header section with instrument branding */}
            <div className="border-b border-slate-800 pb-4 mb-4 flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase leading-none block mb-1">
                  Módulo de Medição Ativo
                </span>
                <h4 className="font-display font-medium text-white text-base">
                  Osciloscópio Digital CRO-99X
                </h4>
              </div>
              <div className="flex gap-1.5">
                <button 
                  onClick={() => setMeasurementMode('voltage')}
                  className={`px-2.5 py-1 text-[10px] font-mono rounded. ${
                    measurementMode === 'voltage' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                  id="btn-mode-voltage"
                >
                  VOLTS
                </button>
                <button 
                  onClick={() => setMeasurementMode('waveform')}
                  className={`px-2.5 py-1 text-[10px] font-mono rounded. ${
                    measurementMode === 'waveform' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                  id="btn-mode-wave"
                >
                  SINAL
                </button>
              </div>
            </div>

            {/* Oscilloscope Screen Wrapper */}
            <div className="relative w-full aspect-[2/1] sm:aspect-[2.5/1] lg:aspect-[1.8/1] bg-black rounded-xl border border-slate-800 p-2 overflow-hidden flex flex-col justify-between">
              {/* Screen grid lines */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none" 
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #10b981 1px, transparent 1px),
                    linear-gradient(to bottom, #10b981 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 25px'
                }}
              ></div>

              {/* Status Header Overlay inside CRT */}
              <div className="relative z-10 flex justify-between font-mono text-[9px] text-emerald-400/90 font-bold">
                <span>CH1  DC  10:1</span>
                <span>Vpp: {selectedComp.id === 'mosfet-input' ? '0.02V' : selectedComp.id === 'optocoupler-iso' ? '0.00V' : '4.98V'}</span>
                <span>Fq: {selectedComp.waveform === 'square' ? '250.0kHz' : selectedComp.waveform === 'noise' ? 'Fluido' : '0.0Hz'}</span>
              </div>

              {/* Wave SVG */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 110" preserveAspectRatio="none">
                <path
                  d={getOscilloscopePath(selectedComp.waveform)}
                  fill="none"
                  stroke={selectedComp.status === 'OK' ? '#10b981' : selectedComp.status === 'DEGRADADO' ? '#f59e0b' : '#ef4444'}
                  strokeWidth="2.5"
                  className="drop-shadow-[0_0_4px_rgba(16,185,129,0.5)] transition-all duration-350"
                />
              </svg>

              {/* Bottom values Overlay */}
              <div className="relative z-10 flex justify-between font-mono text-[10px] text-emerald-400/90 font-bold bg-black/60 px-1 py-0.5 rounded">
                <span>VOLTAGEM: {selectedComp.voltage}</span>
                <span className="animate-pulse">● SAMPLING</span>
              </div>
            </div>

            {/* Component Detail Section */}
            <div className="mt-5 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h5 className="font-display font-semibold text-white text-sm">
                    {selectedComp.name}
                  </h5>
                  <p className="text-xs text-slate-400 italic">
                    {selectedComp.type}
                  </p>
                </div>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold ${
                  selectedComp.status === 'OK' 
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-900' 
                    : selectedComp.status === 'DEGRADADO' 
                      ? 'bg-amber-950 text-amber-300 border border-amber-900' 
                      : 'bg-red-950 text-red-300 border border-red-900 animate-pulse'
                }`}>
                  {selectedComp.status}
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans">
                <div className="flex gap-2 mb-2 font-semibold text-slate-200">
                  <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Sintoma e Efeito Clínico</span>
                </div>
                <p>{selectedComp.description}</p>
              </div>
            </div>
          </div>

          {/* Action / Proposed Fix Summary which gives high professional validation */}
          <div className="mt-5 pt-4 border-t border-slate-800/80">
            <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase block mb-1.5">
              Protocolo de Intervenção Placatech
            </span>
            <div className="p-3 bg-blue-950/40 border border-blue-900/50 rounded-lg">
              <div className="flex gap-2 text-xs text-slate-200 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-blue-200">Ação Recomendada: </span>
                  {selectedComp.repairMethod}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
