import React from 'react';
import { styles } from '../styles/components/ChatBubble.styles';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

interface Props {
  message: string;
  isUser?: boolean;
}

export function ChatBubble({
  message,
  isUser = false,
}: Props) {
  return (
    <View
      style={[
        styles.container,
        isUser
          ? styles.user
          : styles.assistant,
      ]}
    >
      <Text style={styles.text}>
        {message}
      </Text>
    </View>
  );
}
