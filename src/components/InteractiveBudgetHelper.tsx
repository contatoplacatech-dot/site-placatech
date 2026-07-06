/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SERVICES, SYMPTOMS_MAP } from '../data';
import { 
  Wrench, 
  Clock, 
  HelpCircle, 
  Send, 
  MessageSquare, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle, 
  Thermometer, 
  ShieldCheck 
} from 'lucide-react';

export const InteractiveBudgetHelper: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);
  const [customSymptomText, setCustomSymptomText] = useState<string>('');
  const [selectedPredefinedSymptomId, setSelectedPredefinedSymptomId] = useState<string>('custom');
  
  // User info
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');

  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const predefinedSymptoms = SYMPTOMS_MAP[selectedServiceId] || [];

  const handleServiceSelect = (id: string) => {
    setSelectedServiceId(id);
    const symptoms = SYMPTOMS_MAP[id] || [];
    if (symptoms.length > 0) {
      setSelectedPredefinedSymptomId(symptoms[0].id);
    } else {
      setSelectedPredefinedSymptomId('custom');
    }
  };

  const getSymptomDetails = () => {
    if (selectedPredefinedSymptomId === 'custom') {
      return {
        symptom: customSymptomText || 'Sintomática geral relatada',
        likelyCause: 'Necessário análise de isolamento reversivo e mapeamento termo-esquemático presencial.',
        repairComplexity: 'Média' as const,
        estimatedDuration: '2 a 4 dias úteis',
        processRequired: ['Avaliação sob microscópio triocular', 'Varredura por curto-circuito em fonte regulada', 'Relatório de diagnóstico preventivo']
      };
    }
    const match = predefinedSymptoms.find((sym) => sym.id === selectedPredefinedSymptomId);
    return match || {
      symptom: 'Sintomática geral',
      likelyCause: 'Análise de integridade de circuito requerida.',
      repairComplexity: 'Média' as const,
      estimatedDuration: '2 a 4 dias úteis',
      processRequired: ['Varredura por curto-circuito']
    };
  };

  const currentSymptomDetails = getSymptomDetails();

  // Create prefilled WhatsApp text link
  const buildWhatsAppLink = () => {
    const phoneNumber = '5561982032920'; // Real Placatech WhatsApp Contact Number
    const greeting = `Olá Placatech! Solicitei uma simulação de diagnóstico pelo site.`;
    const details = `\n\n*Detalhes do Orçamento:*
• *Cliente:* ${clientName || 'Não informado'}
• *Empresa:* ${companyName || 'Não informada'}
• *Equipamento:* ${currentService.name}
• *Sintoma relatado:* ${selectedPredefinedSymptomId === 'custom' ? customSymptomText : currentSymptomDetails.symptom}
• *Diagnóstico provável:* ${currentSymptomDetails.likelyCause}
• *Complexidade esperada:* ${currentSymptomDetails.repairComplexity}
• *Prazo preliminar:* ${currentSymptomDetails.estimatedDuration}`;
    
    const finalMsg = `${greeting}${details}\n\nGostaria de prosseguir com o envio do equipamento para avaliação laboratorial física!`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMsg)}`;
  };

  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm" id="interactive-budget-helper-widget">
      {/* Tracker bar */}
      <div className="flex items-center justify-between mb-8 max-w-md mx-auto">
        <div className="flex items-center gap-2">
          <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-all duration-350 ${
            step >= 1 ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-200 text-slate-500'
          }`}>1</span>
          <span className="text-xs font-medium text-slate-600">Equipamento</span>
        </div>
        <div className="h-[1px] bg-slate-350 grow mx-2"></div>
        <div className="flex items-center gap-2">
          <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-all duration-350 ${
            step >= 2 ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-200 text-slate-500'
          }`}>2</span>
          <span className="text-xs font-medium text-slate-600">Sintoma</span>
        </div>
        <div className="h-[1px] bg-slate-350 grow mx-2"></div>
        <div className="flex items-center gap-2">
          <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-all duration-350 ${
            step >= 3 ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-200 text-slate-500'
          }`}>3</span>
          <span className="text-xs font-medium text-slate-600">Resultado</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Step inputs (Col 7) */}
        <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
          
          {/* STEP 1: SELECT DEVICE CLASS */}
          {step === 1 && (
            <div className="space-y-6" id="wizard-step-1">
              <div>
                <span className="text-[10px] font-bold font-mono tracking-wider text-blue-600 uppercase">
                  Passo 1 de 3
                </span>
                <h3 className="font-display font-bold text-slate-900 text-2xl mt-1">
                  Qual é o tipo de placa ou equipamento eletrônico?
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Selecione a categoria correspondente para calibrar nossos algoritmos de diagnóstico de bancada.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleServiceSelect(s.id)}
                    className={`flex items-center justify-between text-left p-4 rounded-xl border transition-all duration-200 focus:outline-none ${
                      selectedServiceId === s.id 
                        ? 'border-blue-600 bg-blue-50/50 text-slate-900 ring-2 ring-blue-600/10' 
                        : 'border-slate-200 hover:border-slate-350 bg-white text-slate-600'
                    }`}
                    id={`btn-wizard-equip-${s.id}`}
                  >
                    <div className="w-full">
                      <span className="font-display font-semibold text-sm block truncate pr-2">
                        {s.name}
                      </span>
                      <span className="text-[10px] text-slate-400 capitalize block mt-0.5">
                        {s.category === 'industrial' ? 'Uso Industrial' : s.category === 'heating' ? 'Climatização' : 'Eletrônica Geral'}
                      </span>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                      selectedServiceId === s.id ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300'
                    }`}>
                      {selectedServiceId === s.id && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-100">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg flex items-center gap-2 text-sm font-semibold transition-colors focus:outline-none cursor-pointer"
                  id="btn-wizard-next-step-1"
                >
                  Continuar
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: CHOOSE SYMPTOM */}
          {step === 2 && (
            <div className="space-y-6" id="wizard-step-2">
              <div>
                <span className="text-[10px] font-bold font-mono tracking-wider text-blue-600 uppercase">
                  Passo 2 de 3
                </span>
                <h3 className="font-display font-bold text-slate-900 text-2xl mt-1">
                  Qual é o comportamento anômalo observado?
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Selecione um dos parâmetros mapeados por nosso laboratório de reparos ou digite o sintoma manualmente.
                </p>
              </div>

              <div className="space-y-4">
                {/* Predefined options */}
                <div className="space-y-2.5">
                  <span className="text-[10px] font-mono tracking-wide text-slate-400 uppercase font-bold block mb-1">
                    Sintomas Comuns Encontrados:
                  </span>
                  {predefinedSymptoms.map((sym) => (
                    <label
                      key={sym.id}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        selectedPredefinedSymptomId === sym.id 
                          ? 'border-blue-600 bg-blue-50/20 ring-1 ring-blue-600/10' 
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="symptom-radio"
                        checked={selectedPredefinedSymptomId === sym.id}
                        onChange={() => setSelectedPredefinedSymptomId(sym.id)}
                        className="mt-1 accent-blue-600 focus:outline-none"
                      />
                      <div className="text-xs">
                        <span className="font-semibold text-slate-850 block">
                          {sym.symptom}
                        </span>
                        <span className="text-slate-500 text-[11px] block mt-1">
                          Causa mais provável: {sym.likelyCause}
                        </span>
                      </div>
                    </label>
                  ))}

                  {/* Manual description fallback option */}
                  <label
                    className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      selectedPredefinedSymptomId === 'custom' 
                        ? 'border-blue-600 bg-blue-50/20 ring-1 ring-blue-600/10' 
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="symptom-radio"
                      checked={selectedPredefinedSymptomId === 'custom'}
                      onChange={() => setSelectedPredefinedSymptomId('custom')}
                      className="mt-1 accent-blue-600 focus:outline-none"
                    />
                    <div className="w-full text-xs">
                      <span className="font-semibold text-slate-850 block">
                        Outro sintoma / Descrever problema manualmente
                      </span>
                    </div>
                  </label>
                </div>

                {/* Conditional Textarea for manual description */}
                {selectedPredefinedSymptomId === 'custom' && (
                  <div className="space-y-1.5 animate-fadeIn">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Descreva detalhadamente o comportamento do equipamento:
                    </label>
                    <textarea
                      value={customSymptomText}
                      onChange={(e) => setCustomSymptomText(e.target.value)}
                      placeholder="Ex: Teve um curto após queda de energia no galpão, a luz pisca azul mas a ventoinha principal de refrigeração não dá partida..."
                      rows={3}
                      className="w-full p-3 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all bg-slate-50/50"
                      id="txt-custom-symptom"
                    />
                  </div>
                )}

                {/* Quick lead capture inputs to make the message complete */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-5 mt-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Seu Nome:
                    </label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Ex: Carlos Albuquerque"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
                      id="txt-client-name"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Empresa (Opcional):
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Ex: Metalúrgica Alfa"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
                      id="txt-company-name"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg flex items-center gap-2 text-xs font-medium transition-colors focus:outline-none"
                  id="btn-wizard-back-step-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Voltar
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={selectedPredefinedSymptomId === 'custom' && !customSymptomText.trim()}
                  className={`px-6 py-2.5 rounded-lg flex items-center gap-2 text-sm font-semibold transition-all focus:outline-none cursor-pointer ${
                    selectedPredefinedSymptomId === 'custom' && !customSymptomText.trim()
                      ? 'bg-slate-150 text-slate-400 cursor-not-allowed'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                  id="btn-wizard-next-step-2"
                >
                  Ver Diagnóstico Completo
                  <Wrench className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SUMMARY AND OUTCOME */}
          {step === 3 && (
            <div className="space-y-6" id="wizard-step-3">
              <div>
                <span className="text-[10px] font-bold font-mono tracking-wider text-emerald-600 uppercase bg-emerald-50 py-1 px-2.5 rounded-full border border-emerald-100">
                  Simulação Concluída
                </span>
                <h3 className="font-display font-bold text-slate-900 text-2xl mt-2">
                  Diagnóstico Preliminar Gerado!
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Nossos técnicos especialistas de 30 anos já realizaram reparos similares a este. Confira o protocolo de execução em laboratório abaixo.
                </p>
              </div>

              {/* Technical blueprint card */}
              <div className="p-5 rounded-xl border border-blue-100 bg-blue-50/20 space-y-4">
                <div className="flex flex-wrap justify-between items-start gap-2 border-b border-blue-100/60 pb-3">
                  <div>
                    <span className="text-[9px] font-mono tracking-wider text-slate-400 block uppercase">
                      Equipamento
                    </span>
                    <span className="text-sm font-semibold text-slate-850">
                      {currentService.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-mono tracking-wider text-slate-400 block uppercase">
                      Complexidade Estimada
                    </span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                      currentSymptomDetails.repairComplexity === 'Baixa'
                        ? 'bg-emerald-100 text-emerald-800'
                        : currentSymptomDetails.repairComplexity === 'Média'
                          ? 'bg-blue-100 text-blue-850'
                          : 'bg-red-100 text-red-800'
                    }`}>
                      {currentSymptomDetails.repairComplexity}
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-700">
                  <div>
                    <span className="font-semibold text-slate-900 block">Sintonização do Sintoma:</span>
                    <p className="italic text-slate-600 mt-0.5">"{
                      selectedPredefinedSymptomId === 'custom' ? customSymptomText : currentSymptomDetails.symptom
                    }"</p>
                  </div>
                  
                  <div>
                    <span className="font-semibold text-slate-900 block">Mapeamento de Causa Crítica:</span>
                    <p className="text-slate-600 mt-0.5">{currentSymptomDetails.likelyCause}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="font-semibold text-slate-900 block mb-2">Protocolo Técnico Laboratorial Necessário:</span>
                    <ul className="space-y-1.5 font-sans">
                      {currentSymptomDetails.processRequired.map((proc, index) => (
                        <li key={index} className="flex gap-2 text-slate-600 font-medium">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{proc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Call-to-action details */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 pt-3">
                <button
                  onClick={() => setStep(2)}
                  className="px-4 py-2 bg-slate-105 hover:bg-slate-200 text-slate-700 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold transition-colors focus:outline-none"
                  id="btn-wizard-back-step-3"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Mudar Sintoma
                </button>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2.5 text-sm font-bold shadow-sm transition-all text-center focus:outline-none cursor-pointer hover:shadow"
                  id="btn-wizard-send-whatsapp"
                >
                  <MessageSquare className="w-5 h-5 shrink-0" />
                  Falar no WhatsApp com Laudo
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Informative Side Card (Col 5) */}
        <div className="lg:col-span-5 bg-slate-900 text-slate-100 p-6 md:p-8 rounded-2xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-white">Garantia Placatech</h4>
              <p className="text-[11px] text-slate-400">Processo ágil e assegurado por normas regulamentadas</p>
            </div>
          </div>

          <div className="space-y-4 text-xs font-sans text-slate-300">
            <div className="flex gap-3">
              <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">Previsão Realista:</span>
                <p className="mt-0.5 leading-relaxed text-slate-400">
                  {currentSymptomDetails.estimatedDuration} para o ciclo total de testes e substituições críticas.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Thermometer className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">Estressamento Térmico Total:</span>
                <p className="mt-0.5 leading-relaxed text-slate-400">
                  Cada componente substituído passa por ciclo de estresse contínuo de 12 horas em estufa climatizada para monitorar estabilidade térmica.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Wrench className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">Suporte Direto do Titular:</span>
                <p className="mt-0.5 leading-relaxed text-slate-400">
                  Você não conversa com um robô ou recepcionista genérico. Nossos técnicos de bancada seniores com 30 anos de laboratório detalham a resolução.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-5 mt-5">
            <div className="p-3.5 bg-slate-800/60 border border-slate-800 rounded-lg">
              <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase font-bold block mb-1">
                Contatos de Plantão Alternativo
              </span>
              <p className="text-[11px] text-slate-200">
                Email: <span className="text-blue-400 font-mono">contatoplacatech@gmail.com</span>
              </p>
              <p className="text-[11px] text-slate-200 mt-0.5">
                Suporte Técnico: Ao lado da praça ou via modal eletrônico de envio nacional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
