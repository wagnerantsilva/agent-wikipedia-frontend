import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialTheme } from '../constants/Theme';
import { styles } from '../styles/components/VerdictBadge.styles';

interface VerdictBadgeProps {
  verdict: 'VALIDATED' | 'REFUTED' | 'INCONCLUSIVE' | 'AMBIGUOUS';
  score: number;
}

export const VerdictBadge: React.FC<VerdictBadgeProps> = ({
  verdict,
  score,
}) => {
  const getBadgeStyle = () => {
    switch (verdict) {
      case 'VALIDATED':
        return {
          bg: MaterialTheme.COLORS.VERDICT_VALIDATED,
          label: 'VALIDADO PELA WIKIPEDIA',
        };

      case 'REFUTED':
        return {
          bg: MaterialTheme.COLORS.VERDICT_REFUTED,
          label: 'REFUTADO PELA WIKIPEDIA',
        };

      case 'INCONCLUSIVE':
        return {
          bg: MaterialTheme.COLORS.VERDICT_INCONCLUSIVE,
          label: 'INCONCLUSIVO',
        };

      default:
        return {
          bg: MaterialTheme.COLORS.VERDICT_AMBIGUOUS,
          label: 'AMBÍGUO',
        };
    }
  };

  const { bg, label } = getBadgeStyle();

  return (
    <View
      style={[
        styles.badgeContainer,
        { backgroundColor: bg },
      ]}
    >
      <Text style={styles.badgeText}>
        {label}
      </Text>

      <Text style={styles.scoreText}>
        {`${(score * 100).toFixed(0)}% confiança`}
      </Text>
    </View>
  );
};
