export type ValidationVerdict =
  | 'VALIDATED'
  | 'REFUTED'
  | 'INCONCLUSIVE'
  | 'AMBIGUOUS';

export interface WikipediaArticleSummary {
  title: string;
  extract: string;
  page_url?: string;
  thumbnail_url?: string;
  language: string;
  is_disambiguation: boolean;
  categories: string[];
}

export interface EvidenceItem {
  source_title: string;
  source_url?: string;
  fact_statement: string;
  confidence_score: number;
  validation_status: ValidationVerdict;
}

export interface FactValidationReport {
  query: string;
  gemma_raw_answer: string;
  validated_answer: string;
  verdict: ValidationVerdict;
  confidence_score: number;
  evidences: EvidenceItem[];
  article_used?: WikipediaArticleSummary;
  created_at: string;
}