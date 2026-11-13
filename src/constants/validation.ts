export enum ValidationVerdict {
  VALIDATED = "VALIDATED",
  REFUTED = "REFUTED",
  INCONCLUSIVE = "INCONCLUSIVE",
  AMBIGUOUS = "AMBIGUOUS"
}

export interface WikipediaArticleSummary {
  title: string;
  extract: string;
  pageUrl?: string;
  thumbnailUrl?: string;
  language: string;
  isDisambiguation?: boolean;
  categories?: string[];
}

export interface EvidenceItem {
  sourceTitle: string;
  sourceUrl?: string;

  factStatement: string;

  confidenceScore: number;

  validationStatus: ValidationVerdict;
}

export interface FactValidationReport {
  query: string;

  gemmaRawAnswer: string;

  validatedAnswer: string;

  verdict: ValidationVerdict;

  confidenceScore: number;

  evidences: EvidenceItem[];

  articleUsed?: WikipediaArticleSummary;

  createdAt: string;
}