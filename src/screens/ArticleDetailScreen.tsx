import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default function ArticleDetailScreen({
  route,
}: any) {
  const article = route.params?.article;

  return (
    <ScrollView style={styles.container}>
      {article?.thumbnail_url && (
        <Image
          source={{
            uri: article.thumbnail_url,
          }}
          style={styles.image}
        />
      )}

      <Text style={styles.title}>
        {article?.title}
      </Text>

      <Text style={styles.text}>
        {article?.extract}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    color: '#DDD',
    lineHeight: 24,
  },
});