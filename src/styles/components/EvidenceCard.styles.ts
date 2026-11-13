import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 14,
    marginVertical: 10,
    marginHorizontal: 12,
    borderWidth: 1,
    borderColor: '#2C2C2C',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  thumbnail: {
    width: 56,
    height: 56,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#2A2A2A',
  },

  titleArea: {
    flex: 1,
  },

  sourceLabel: {
    fontSize: 11,
    color: '#9E9E9E',
    textTransform: 'uppercase',
    marginBottom: 4,
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  extract: {
    fontSize: 14,
    lineHeight: 22,
    color: '#D7D7D7',
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#262626',
  },

  linkButton: {
    marginTop: 14,
    alignSelf: 'flex-end',
  },

  linkText: {
    color: '#9C27B0',
    fontSize: 13,
    fontWeight: '600',
  },
});