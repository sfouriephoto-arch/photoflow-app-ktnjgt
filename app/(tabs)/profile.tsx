
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
      'Thank you for your interest! I will get back to you within 24 hours.',
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
            <View style={styles.profileImageContainer}>
              <IconSymbol name="camera.circle.fill" size={90} color={colors.primary} />
            </View>
            <Text style={styles.profileName}>Susan Fourie</Text>
            <Text style={styles.profileTitle}>Professional Photographer</Text>
          </View>

          <View style={styles.aboutCard}>
            <View style={styles.cardHeader}>
              <IconSymbol name="person.fill" size={24} color={colors.primary} />
              <Text style={styles.cardHeaderText}>About Me</Text>
            </View>
            <Text style={commonStyles.text}>
              Hello! I&apos;m Susan, a professional photographer with over 10 years of experience
              capturing life&apos;s most precious moments. My passion is creating timeless images
              that tell your unique story.
            </Text>
            <Text style={[commonStyles.text, { marginTop: 12 }]}>
              Whether it&apos;s your wedding day, a family portrait, or a corporate event, I bring
              creativity, professionalism, and attention to detail to every shoot. I believe in
              building genuine connections with my clients to capture authentic, emotional moments.
            </Text>
          </View>

          {/* Specialties */}
          <View style={styles.specialtiesCard}>
            <View style={styles.cardHeader}>
              <IconSymbol name="star.fill" size={24} color={colors.primary} />
              <Text style={styles.cardHeaderText}>Specialties</Text>
            </View>
            <View style={styles.specialtyList}>
              <View style={styles.specialtyItem}>
                <IconSymbol name="checkmark.circle.fill" size={20} color={colors.accent} />
                <Text style={styles.specialtyText}>Wedding Photography</Text>
              </View>
              <View style={styles.specialtyItem}>
                <IconSymbol name="checkmark.circle.fill" size={20} color={colors.accent} />
                <Text style={styles.specialtyText}>Portrait Sessions</Text>
              </View>
              <View style={styles.specialtyItem}>
                <IconSymbol name="checkmark.circle.fill" size={20} color={colors.accent} />
                <Text style={styles.specialtyText}>Event Coverage</Text>
              </View>
              <View style={styles.specialtyItem}>
                <IconSymbol name="checkmark.circle.fill" size={20} color={colors.accent} />
                <Text style={styles.specialtyText}>Commercial Photography</Text>
              </View>
              <View style={styles.specialtyItem}>
                <IconSymbol name="checkmark.circle.fill" size={20} color={colors.accent} />
                <Text style={styles.specialtyText}>Photo Editing & Retouching</Text>
              </View>
            </View>
          </View>

          {/* Contact Info */}
          <View style={styles.contactInfoSection}>
            <View style={styles.cardHeader}>
              <IconSymbol name="phone.circle.fill" size={24} color={colors.primary} />
              <Text style={styles.cardHeaderText}>Contact Information</Text>
            </View>
            <View style={styles.infoCard}>
              <View style={styles.infoRow}>
                <View style={styles.infoIconContainer}>
                  <IconSymbol name="envelope.fill" size={20} color={colors.primary} />
                </View>
                <View style={styles.infoTextContainer}>
                  <Text style={styles.infoLabel}>Email</Text>
                  <Text style={styles.infoText}>contact@susanfourie.com</Text>
                </View>
              </View>
              <View style={styles.infoRow}>
                <View style={styles.infoIconContainer}>
                  <IconSymbol name="phone.fill" size={20} color={colors.primary} />
                </View>
                <View style={styles.infoTextContainer}>
                  <Text style={styles.infoLabel}>Phone</Text>
                  <Text style={styles.infoText}>+1 (555) 123-4567</Text>
                </View>
              </View>
              <View style={styles.infoRow}>
                <View style={styles.infoIconContainer}>
                  <IconSymbol name="location.fill" size={20} color={colors.primary} />
                </View>
                <View style={styles.infoTextContainer}>
                  <Text style={styles.infoLabel}>Location</Text>
                  <Text style={styles.infoText}>San Francisco, CA</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Booking Form */}
        <View style={styles.bookingSection}>
          <View style={styles.cardHeader}>
            <IconSymbol name="calendar" size={24} color={colors.primary} />
            <Text style={styles.cardHeaderText}>Book a Session</Text>
          </View>
          <Text style={[commonStyles.textSecondary, { marginBottom: 16, paddingHorizontal: 4 }]}>
            Fill out the form below and I&apos;ll get back to you within 24 hours
          </Text>
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
                placeholder="Tell me about your photography needs, preferred dates, and any special requirements..."
                placeholderTextColor={colors.textSecondary}
                value={message}
                onChangeText={setMessage}
                multiline
                numberOfLines={5}
                textAlignVertical="top"
              />
            </View>

            <Pressable style={styles.submitButton} onPress={handleSubmit}>
              <IconSymbol name="paperplane.fill" size={22} color={colors.card} />
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
    marginBottom: 32,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 28,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.highlight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 3,
    borderColor: colors.secondary,
  },
  profileName: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  profileTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primary,
  },
  aboutCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    boxShadow: `0px 4px 12px ${colors.shadow}`,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
  },
  cardHeaderText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  specialtiesCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    boxShadow: `0px 4px 12px ${colors.shadow}`,
    elevation: 3,
  },
  specialtyList: {
    gap: 12,
  },
  specialtyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  specialtyText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
  },
  contactInfoSection: {
    marginTop: 8,
  },
  infoCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    gap: 20,
    boxShadow: `0px 4px 12px ${colors.shadow}`,
    elevation: 3,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  infoIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.highlight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoTextContainer: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: 2,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  infoText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
  },
  bookingSection: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  formCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    boxShadow: `0px 4px 12px ${colors.shadow}`,
    elevation: 3,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  required: {
    color: '#d32f2f',
  },
  input: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    color: colors.text,
    borderWidth: 1.5,
    borderColor: colors.border,
  },
  textArea: {
    minHeight: 120,
    paddingTop: 14,
  },
  serviceButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  serviceButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: colors.background,
    borderWidth: 1.5,
    borderColor: colors.border,
  },
  serviceButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  serviceButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
  serviceButtonTextActive: {
    color: colors.card,
  },
  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 8,
    boxShadow: `0px 6px 16px rgba(44, 95, 45, 0.3)`,
    elevation: 5,
  },
  submitButtonText: {
    color: colors.card,
    fontSize: 17,
    fontWeight: '700',
  },
});
