import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: '#1E1E1E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },

  logo: {
    color: '#9C27B0',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },

  settings: {
    color: '#FFFFFF',
    fontSize: 22,
  },
});