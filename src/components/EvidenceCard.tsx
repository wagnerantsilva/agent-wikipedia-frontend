import React from 'react';
import { styles } from '../styles/components/EvidenceCard.styles';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

import { MaterialTheme } from '../constants/Theme';
import { VerdictBadge } from './VerdictBadge';

interface EvidenceCardProps {
  articleTitle: string;
  extract: string;
  thumbnailUrl?: string;
  pageUrl?: string;
  verdict:
    | 'VALIDATED'
    | 'REFUTED'
    | 'INCONCLUSIVE'
    | 'AMBIGUOUS';
  confidenceScore: number;
}

export const EvidenceCard: React.FC<
  EvidenceCardProps
> = ({
  articleTitle,
  extract,
  thumbnailUrl,
  pageUrl,
  verdict,
  confidenceScore,
}) => {
  const handleOpenSource = () => {
    if (pageUrl) {
      Linking.openURL(pageUrl);
    }
  };

  return (
    <View style={styles.card}>
      <VerdictBadge
        verdict={verdict}
        score={confidenceScore}
      />

      <View style={styles.header}>
        {thumbnailUrl && (
          <Image
            source={{ uri: thumbnailUrl }}
            style={styles.thumbnail}
          />
        )}

        <View style={styles.titleArea}>
          <Text style={styles.sourceLabel}>
            Fonte de Validação:
          </Text>

          <Text style={styles.title}>
            {articleTitle}
          </Text>
        </View>
      </View>

      <Text
        style={styles.extract}
        numberOfLines={4}
      >
        "{extract}"
      </Text>

      {pageUrl && (
        <TouchableOpacity
          style={styles.linkButton}
          onPress={handleOpenSource}
        >
          <Text style={styles.linkText}>
            Ver Artigo Completo na
            Wikipedia →
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
