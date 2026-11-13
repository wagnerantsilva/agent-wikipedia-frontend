import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 32,
  },

  section: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },

  label: {
    fontSize: 16,
    color: '#FFFFFF',
  },

  value: {
    fontSize: 14,
    color: '#B0B0B0',
  },

  divider: {
    height: 1,
    backgroundColor: '#2C2C2C',
    marginVertical: 8,
  },

  languageButton: {
    backgroundColor: '#2C2C2C',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: 8,
  },

  languageButtonSelected: {
    backgroundColor: '#9C27B0',
  },

  languageButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },

  versionContainer: {
    marginTop: 'auto',
    alignItems: 'center',
    paddingVertical: 16,
  },

  versionText: {
    color: '#777777',
    fontSize: 12,
  },
});