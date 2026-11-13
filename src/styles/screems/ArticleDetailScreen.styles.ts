import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },

  content: {
    padding: 16,
    paddingBottom: 32,
  },

  image: {
    width: '100%',
    height: 240,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: '#1E1E1E',
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 16,
  },

  metadataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  languageBadge: {
    backgroundColor: '#9C27B0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },

  languageText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 12,
  },

  text: {
    fontSize: 15,
    lineHeight: 26,
    color: '#D9D9D9',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 24,
    marginBottom: 12,
  },

  sourceButton: {
    marginTop: 24,
    backgroundColor: '#9C27B0',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  sourceButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
  },
});