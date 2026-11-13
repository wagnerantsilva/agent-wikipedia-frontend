import { api } from './client';

import {
  FactValidationReport,
} from '../types/validation';

export interface QueryRequest {
  question: string;
  language?: string;
}

/**
 * Envia uma pergunta para o backend
 * e retorna o relatório de validação factual.
 */
export async function validateQuestion(
  question: string,
  language: string = 'pt',
): Promise<FactValidationReport> {
  const response = await api.post<
    FactValidationReport
  >('/query', {
    question,
    language,
  });

  return response.data;
}

/**
 * Versão mais flexível para uso futuro.
 */
export async function validateQuery(
  payload: QueryRequest,
): Promise<FactValidationReport> {
  const response = await api.post<
    FactValidationReport
  >('/query', payload);

  return response.data;
}