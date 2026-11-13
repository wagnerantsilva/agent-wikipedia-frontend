import React, { useState } from 'react';
import { styles } from '../styles/screems/SettingsScreen.styles';
import {
  View,
  Text,
  Switch,
  StyleSheet,
} from 'react-native';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] =
    useState(true);

  const [portuguese, setPortuguese] =
    useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Configurações
      </Text>

      <View style={styles.row}>
        <Text style={styles.label}>
          Tema Escuro
        </Text>

        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Idioma Português
        </Text>

        <Switch
          value={portuguese}
          onValueChange={
            setPortuguese
          }
        />
      </View>
    </View>
  );
}
