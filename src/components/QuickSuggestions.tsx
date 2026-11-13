import React from 'react';
import { styles } from '../styles/components/QuickSuggestions.styles';

import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const suggestions = [
  'Quem foi Albert Einstein?',
  'O que é IA?',
  'Quando começou a Segunda Guerra Mundial?',
  'O que é computação quântica?',
];

export function QuickSuggestions({
  onSelect,
}: {
  onSelect: (value: string) => void;
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {suggestions.map((item) => (
        <TouchableOpacity
          key={item}
          style={styles.chip}
          onPress={() => onSelect(item)}
        >
          <Text style={styles.chipText}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
