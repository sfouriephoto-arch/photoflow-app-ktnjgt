
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [serviceType, setServiceType] = useState('');

  const services = ['Wedding', 'Portrait', 'Event', 'Commercial', 'Other'];

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert('Missing Information', 'Please fill in all required fields.');
      return;
    }

    console.log('Booking request submitted:', { name, email, phone, message, serviceType });
    Alert.alert(
      'Request Sent!',
      'Thank you for your interest! We will get back to you within 24 hours.',
      [
        {
          text: 'OK',
          onPress: () => {
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            setServiceType('');
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.background }]}
      edges={['top']}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={[
          styles.contentContainer,
          Platform.OS !== 'ios' && styles.contentContainerWithTabBar,
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* About Section */}
        <View style={styles.aboutSection}>
          <View style={styles.profileHeader}>
            <IconSymbol name="camera.circle.fill" size={80} color={colors.primary} />
            <Text style={commonStyles.title}>About Me</Text>
          </View>
          <View style={styles.aboutCard}>
            <Text style={commonStyles.text}>
              Hello! I&apos;m a professional photographer with over 10 years of experience
              capturing life&apos;s most precious moments. My passion is creating timeless images
              that tell your unique story.
            </Text>
            <Text style={[commonStyles.text, { marginTop: 12 }]}>
              Whether it&apos;s your wedding day, a family portrait, or a corporate event, I bring
              creativity, professionalism, and attention to detail to every shoot.
            </Text>
          </View>

          {/* Contact Info */}
          <View style={styles.contactInfoSection}>
            <Text style={[commonStyles.subtitle, styles.sectionTitle]}>Contact Information</Text>
            <View style={styles.infoCard}>
              <View style={styles.infoRow}>
                <IconSymbol name="envelope.fill" size={20} color={colors.primary} />
                <Text style={styles.infoText}>contact@photography.com</Text>
              </View>
              <View style={styles.infoRow}>
                <IconSymbol name="phone.fill" size={20} color={colors.primary} />
                <Text style={styles.infoText}>+1 (555) 123-4567</Text>
              </View>
              <View style={styles.infoRow}>
                <IconSymbol name="location.fill" size={20} color={colors.primary} />
                <Text style={styles.infoText}>San Francisco, CA</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Booking Form */}
        <View style={styles.bookingSection}>
          <Text style={[commonStyles.subtitle, styles.sectionTitle]}>Book a Session</Text>
          <View style={styles.formCard}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Name <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Your full name"
                placeholderTextColor={colors.textSecondary}
                value={name}
                onChangeText={setName}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Email <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="your.email@example.com"
                placeholderTextColor={colors.textSecondary}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone</Text>
              <TextInput
                style={styles.input}
                placeholder="(555) 123-4567"
                placeholderTextColor={colors.textSecondary}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Service Type</Text>
              <View style={styles.serviceButtons}>
                {services.map((service) => (
                  <Pressable
                    key={service}
                    style={[
                      styles.serviceButton,
                      serviceType === service && styles.serviceButtonActive,
                    ]}
                    onPress={() => setServiceType(service)}
                  >
                    <Text
                      style={[
                        styles.serviceButtonText,
                        serviceType === service && styles.serviceButtonTextActive,
                      ]}
                    >
                      {service}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Message <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Tell me about your photography needs..."
                placeholderTextColor={colors.textSecondary}
                value={message}
                onChangeText={setMessage}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>

            <Pressable style={styles.submitButton} onPress={handleSubmit}>
              <IconSymbol name="paperplane.fill" size={20} color={colors.card} />
              <Text style={styles.submitButtonText}>Send Request</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  contentContainerWithTabBar: {
    paddingBottom: 100,
  },
  aboutSection: {
    paddingHorizontal: 16,
    paddingTop: 20,
    marginBottom: 24,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  aboutCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  contactInfoSection: {
    marginTop: 8,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  infoCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    gap: 16,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoText: {
    fontSize: 16,
    color: colors.text,
  },
  bookingSection: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  formCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  required: {
    color: '#d32f2f',
  },
  input: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  textArea: {
    minHeight: 100,
    paddingTop: 12,
  },
  serviceButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  serviceButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  serviceButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  serviceButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
  },
  serviceButtonTextActive: {
    color: colors.card,
  },
  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 8,
    boxShadow: '0px 4px 12px rgba(56, 142, 60, 0.3)',
    elevation: 4,
  },
  submitButtonText: {
    color: colors.card,
    fontSize: 16,
    fontWeight: '600',
  },
});
