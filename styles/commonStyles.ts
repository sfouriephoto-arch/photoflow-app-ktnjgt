
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

// Photography business color palette - Elegant and professional
export const colors = {
  background: '#f5f5f5',      // Soft Gray
  text: '#1a1a1a',            // Almost Black
  textSecondary: '#666666',   // Medium Gray
  primary: '#2c5f2d',         // Deep Forest Green
  secondary: '#97c4a0',       // Sage Green
  accent: '#7cb342',          // Fresh Green
  card: '#ffffff',            // Pure White
  highlight: '#e8f5e9',       // Pale Green
  border: '#e0e0e0',          // Light Border
  shadow: 'rgba(0, 0, 0, 0.08)',
};

export const buttonStyles = StyleSheet.create({
  primaryButton: {
    backgroundColor: colors.primary,
    alignSelf: 'center',
    width: '100%',
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
    alignSelf: 'center',
    width: '100%',
  },
});

export const commonStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 800,
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.text,
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.text,
    marginBottom: 8,
    lineHeight: 24,
  },
  textSecondary: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    lineHeight: 20,
  },
  section: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginVertical: 8,
    width: '100%',
    boxShadow: `0px 4px 16px ${colors.shadow}`,
    elevation: 3,
  },
});
