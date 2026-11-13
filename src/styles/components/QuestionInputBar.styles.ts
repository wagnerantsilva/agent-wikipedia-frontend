import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181818',
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 16,
  },

  suggestionsContainer: {
    marginBottom: 8,
  },

  suggestionTitle: {
    fontSize: 11,
    fontWeight: '600',
    color: '#9E9E9E',
    textTransform: 'uppercase',
    marginBottom: 4,
  },

  chipsScroll: {
    flexDirection: 'row',
  },

  chip: {
    backgroundColor: '#252525',
    borderWidth: 1,
    borderColor: '#3C3C3C',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
  },

  chipText: {
    color: '#DCDCDC',
    fontSize: 12,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputWrapper: {
    flex: 1,
    marginRight: 8,
  },

  input: {
    backgroundColor: '#232323',
    borderColor: '#323232',
    borderRadius: 24,
    color: '#FFFFFF',
    height: 48,
  },

  sendButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9C27B0',
  },

  sendButtonDisabled: {
    backgroundColor: '#666666',
  },

  counterRow: {
    alignItems: 'flex-end',
    marginTop: 4,
  },

  counterText: {
    fontSize: 10,
    color: '#888888',
  },
});