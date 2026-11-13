import React from 'react';

import { styles } from '../styles/screems/HomeScreen.styles';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function HomeScreen({
  navigation,
}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>WAS.DEV</Text>

      <Text style={styles.title}>
        Wikipedia Validation Assistant
      </Text>

      <Text style={styles.description}>
        Sistema de validação factual baseado
        em Wikipedia para respostas do
        Gemma 3:4B.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate(
            'ChatValidationScreen',
          )
        }
      >
        <Text style={styles.buttonText}>
          Iniciar Consulta
        </Text>
      </TouchableOpacity>
    </View>
  );
}
