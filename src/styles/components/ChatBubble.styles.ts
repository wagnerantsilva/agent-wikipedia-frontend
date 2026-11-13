import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    maxWidth: '85%',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 18,
    marginVertical: 6,
    marginHorizontal: 12,
  },

  user: {
    alignSelf: 'flex-end',
    backgroundColor: '#9C27B0',
    borderBottomRightRadius: 4,
  },

  assistant: {
    alignSelf: 'flex-start',
    backgroundColor: '#1E1E1E',
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  text: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 22,
  },

  timestamp: {
    fontSize: 10,
    marginTop: 4,
    color: '#BDBDBD',
    alignSelf: 'flex-end',
  },

  userTimestamp: {
    color: '#F3E5F5',
  },

  assistantTimestamp: {
    color: '#9E9E9E',
  },
});