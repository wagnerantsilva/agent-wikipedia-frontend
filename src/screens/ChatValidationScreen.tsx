import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';

import { QuestionInputBar } from '../components/QuestionInputBar';
import { ChatBubble } from '../components/ChatBubble';
import { EvidenceCard } from '../components/EvidenceCard';

import { validateQuestion } from '../api/validationApi';
import { styles } from '../styles/screems/ChatValidationScreen.styles';

import {
  FactValidationReport,
} from '../types/validation';

type ChatMessage =
  | {
      id: string;
      type: 'question';
      text: string;
    }
  | {
      id: string;
      type: 'answer';
      report: FactValidationReport;
    };

export default function ChatValidationScreen() {
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<
    ChatMessage[]
  >([]);

  async function handleQuestion(
    question: string,
  ) {
    const questionMessage: ChatMessage = {
      id: `q-${Date.now()}`,
      type: 'question',
      text: question,
    };

    setMessages((old) => [
      ...old,
      questionMessage,
    ]);

    try {
      setLoading(true);

      const report =
        await validateQuestion(question);

      const answerMessage: ChatMessage = {
        id: `a-${Date.now()}`,
        type: 'answer',
        report,
      };

      setMessages((old) => [
        ...old,
        answerMessage,
      ]);
    } catch (error) {
      Alert.alert(
        'Erro',
        'Não foi possível validar a informação no momento.',
      );
    } finally {
      setLoading(false);
    }
  }

  const renderItem = ({
    item,
  }: {
    item: ChatMessage;
  }) => {
    if (item.type === 'question') {
      return (
        <ChatBubble
          message={item.text}
          isUser
        />
      );
    }

    const report = item.report;

    return (
      <View style={styles.answerContainer}>
        <ChatBubble
          message={
            report.validated_answer ||
            report.gemma_raw_answer
          }
        />

        {report.article_used && (
          <EvidenceCard
            articleTitle={
              report.article_used.title
            }
            extract={
              report.article_used.extract
            }
            thumbnailUrl={
              report.article_used
                .thumbnail_url
            }
            pageUrl={
              report.article_used.page_url
            }
            verdict={report.verdict}
            confidenceScore={
              report.confidence_score
            }
          />
        )}
      </View>
    );
  };

  return (
    <SafeAreaView
      style={styles.container}
    >
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={
          styles.listContent
        }
        showsVerticalScrollIndicator={
          false
        }
      />

      <QuestionInputBar
        onSubmitQuestion={
          handleQuestion
        }
        isLoading={loading}
      />
    </SafeAreaView>
  );
}
