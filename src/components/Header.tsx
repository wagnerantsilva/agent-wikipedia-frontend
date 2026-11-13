import React from 'react';
import { styles } from '../styles/components/Header.styles';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export function Header({
  title,
  onSettingsPress,
}: {
  title: string;
  onSettingsPress?: () => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>WAS.DEV</Text>

      <Text style={styles.title}>
        {title}
      </Text>

      <TouchableOpacity
        onPress={onSettingsPress}
      >
        <Text style={styles.settings}>
          ⚙️
        </Text>
      </TouchableOpacity>
    </View>
  );
}
