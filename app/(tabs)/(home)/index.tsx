
import React from 'react';
import { Stack } from 'expo-router';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Platform,
  Pressable,
  Linking,
} from 'react-native';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';
import Gallery from '@/components/Gallery';

export default function HomeScreen() {
  const handleCall = () => {
    Linking.openURL('tel:+15551234567');
  };

  const handleEmail = () => {
    Linking.openURL('mailto:contact@photography.com');
  };

  return (
    <>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: 'Portfolio',
            headerLargeTitle: true,
          }}
        />
      )}
      <View style={[commonStyles.container, styles.container]}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={[
            styles.contentContainer,
            Platform.OS !== 'ios' && styles.contentContainerWithTabBar,
          ]}
          showsVerticalScrollIndicator={false}
        >
          {/* Hero Section */}
          <View style={styles.heroSection}>
            <IconSymbol name="camera.fill" size={60} color={colors.primary} />
            <Text style={commonStyles.title}>Professional Photography</Text>
            <Text style={[commonStyles.textSecondary, styles.heroText]}>
              Capturing life&apos;s precious moments with artistry and passion
            </Text>
          </View>

          {/* Services Section */}
          <View style={styles.servicesSection}>
            <Text style={[commonStyles.subtitle, styles.sectionTitle]}>Services</Text>
            <View style={styles.servicesGrid}>
              <View style={styles.serviceCard}>
                <IconSymbol name="heart.fill" size={32} color={colors.primary} />
                <Text style={styles.serviceTitle}>Weddings</Text>
                <Text style={styles.serviceDescription}>
                  Beautiful wedding photography to treasure forever
                </Text>
              </View>
              <View style={styles.serviceCard}>
                <IconSymbol name="person.fill" size={32} color={colors.primary} />
                <Text style={styles.serviceTitle}>Portraits</Text>
                <Text style={styles.serviceDescription}>
                  Professional portraits for individuals and families
                </Text>
              </View>
              <View style={styles.serviceCard}>
                <IconSymbol name="photo.fill" size={32} color={colors.primary} />
                <Text style={styles.serviceTitle}>Events</Text>
                <Text style={styles.serviceDescription}>
                  Corporate and special event photography
                </Text>
              </View>
              <View style={styles.serviceCard}>
                <IconSymbol name="sparkles" size={32} color={colors.primary} />
                <Text style={styles.serviceTitle}>Commercial</Text>
                <Text style={styles.serviceDescription}>
                  Product and commercial photography services
                </Text>
              </View>
            </View>
          </View>

          {/* Gallery Section */}
          <View style={styles.gallerySection}>
            <Text style={[commonStyles.subtitle, styles.sectionTitle]}>Portfolio</Text>
            <Gallery />
          </View>

          {/* Quick Contact Section */}
          <View style={styles.contactSection}>
            <Text style={[commonStyles.subtitle, styles.sectionTitle]}>Get in Touch</Text>
            <View style={styles.contactButtons}>
              <Pressable style={styles.contactButton} onPress={handleCall}>
                <IconSymbol name="phone.fill" size={24} color={colors.card} />
                <Text style={styles.contactButtonText}>Call</Text>
              </Pressable>
              <Pressable style={styles.contactButton} onPress={handleEmail}>
                <IconSymbol name="envelope.fill" size={24} color={colors.card} />
                <Text style={styles.contactButtonText}>Email</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  contentContainerWithTabBar: {
    paddingBottom: 100,
  },
  heroSection: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
    backgroundColor: colors.card,
    marginBottom: 20,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
  heroText: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 16,
  },
  servicesSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  serviceCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginTop: 8,
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 16,
  },
  gallerySection: {
    marginBottom: 24,
  },
  contactSection: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  contactButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  contactButton: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    boxShadow: '0px 4px 12px rgba(56, 142, 60, 0.3)',
    elevation: 4,
  },
  contactButtonText: {
    color: colors.card,
    fontSize: 16,
    fontWeight: '600',
  },
});
