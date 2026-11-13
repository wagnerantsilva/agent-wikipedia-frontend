import React, {
  useState,
} from 'react';

import { styles } from '../styles/components/QuestionInputBar.styles';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';

import {
  Input,
  Icon,
} from 'galio-framework';

import { MaterialTheme } from '../constants/Theme';

interface QuestionInputBarProps {
  onSubmitQuestion: (
    question: string,
  ) => void;

  isLoading: boolean;
}

const QUICK_PROMPTS = [
  'Quem foi Albert Einstein?',
  'Qual é a teoria da relatividade?',
  'Quando começou a Segunda Guerra Mundial?',
  'Quem descobriu o Brasil?',
];

export const QuestionInputBar: React.FC<
  QuestionInputBarProps
> = ({
  onSubmitQuestion,
  isLoading,
}) => {
  const [question, setQuestion] =
    useState('');

  const maxLength = 500;

  const handleSubmit = () => {
    const trimmed =
      question.trim();

    if (
      trimmed.length >= 3 &&
      !isLoading
    ) {
      onSubmitQuestion(trimmed);
      setQuestion('');
    }
  };

  const handleSelectQuickPrompt = (
    prompt: string,
  ) => {
    if (!isLoading) {
      setQuestion(prompt);
    }
  };

  const isSubmitDisabled =
    question.trim().length < 3 ||
    isLoading;

  return (
    <View style={styles.container}>
      <View
        style={
          styles.suggestionsContainer
        }
      >
        <Text
          style={
            styles.suggestionTitle
          }
        >
          Sugestões rápidas:
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={
            false
          }
          contentContainerStyle={
            styles.chipsScroll
          }
        >
          {QUICK_PROMPTS.map(
            (prompt, index) => (
              <TouchableOpacity
                key={index}
                style={styles.chip}
                onPress={() =>
                  handleSelectQuickPrompt(
                    prompt,
                  )
                }
              >
                <Text
                  style={
                    styles.chipText
                  }
                >
                  {prompt}
                </Text>
              </TouchableOpacity>
            ),
          )}
        </ScrollView>
      </View>

      <View style={styles.inputRow}>
        <View
          style={styles.inputWrapper}
        >
          <Input
            placeholder="Impute sua pergunta para o Gemma 3:4B..."
            value={question}
            onChangeText={setQuestion}
            editable={!isLoading}
            maxLength={maxLength}
            style={styles.input}
            placeholderTextColor={
              MaterialTheme.COLORS
                .PLACEHOLDER
            }
            iconContent={
              <Icon
                size={18}
                name="search"
                family="Feather"
                color={
                  MaterialTheme.COLORS
                    .MUTED
                }
              />
            }
          />
        </View>

        <TouchableOpacity
          style={[
            styles.sendButton,
            isSubmitDisabled &&
              styles.sendButtonDisabled,
          ]}
          onPress={handleSubmit}
          disabled={
            isSubmitDisabled
          }
        >
          {isLoading ? (
            <ActivityIndicator
              size="small"
              color="#FFF"
            />
          ) : (
            <Icon
              size={20}
              name="send"
              family="Feather"
              color="#FFF"
            />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.counterRow}>
        <Text
          style={styles.counterText}
        >
          {question.length}/500
          caracteres
        </Text>
      </View>
    </View>
  );
};
