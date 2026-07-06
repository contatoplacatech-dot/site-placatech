/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  name: string;
  category: 'personal' | 'industrial' | 'heating' | 'general';
  icon: string;
  shortDescription: string;
  fullDescription: string;
  commonProblems: string[];
  diagnosticProcess: string[];
  imageUrl?: string;
}

export interface SymptomItem {
  id: string;
  symptom: string;
  likelyCause: string;
  repairComplexity: 'Baixa' | 'Média' | 'Alta' | 'Altíssima';
  estimatedDuration: string;
  processRequired: string[];
}

export interface DiagnosticSimulationResult {
  deviceType: string;
  symptom: string;
  cause: string;
  complexity: 'Baixa' | 'Média' | 'Alta' | 'Altíssima';
  repairSteps: string[];
  whatsappMessage: string;
}
