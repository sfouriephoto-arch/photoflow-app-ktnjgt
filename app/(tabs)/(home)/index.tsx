
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
    Linking.openURL('mailto:contact@susanfourie.com');
  };

  const handleSocial = (platform: string) => {
    console.log(`Opening ${platform}`);
    // Add your social media links here
    if (platform === 'facebook') {
      Linking.openURL('https://www.facebook.com/susanfouriephoto/');
    } else if (platform === 'instagram') {
      Linking.openURL('https://instagram.com/susanfouriephoto');
    }
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
            <View style={styles.heroIconContainer}>
              <IconSymbol name="camera.fill" size={64} color={colors.primary} />
            </View>
            <Text style={styles.heroTitle}>Susan Fourie Photography</Text>
            <Text style={styles.heroSubtitle}>Professional Photographer</Text>
            <Text style={[commonStyles.textSecondary, styles.heroText]}>
              Capturing life&apos;s precious moments with artistry and passion
            </Text>
            
            {/* Social Media Links */}
            <View style={styles.socialContainer}>
              <Pressable 
                style={styles.socialButton} 
                onPress={() => handleSocial('facebook')}
              >
                <IconSymbol name="link" size={20} color={colors.primary} />
              </Pressable>
              <Pressable 
                style={styles.socialButton} 
                onPress={() => handleSocial('instagram')}
              >
                <IconSymbol name="camera" size={20} color={colors.primary} />
              </Pressable>
            </View>
          </View>

          {/* Services Section */}
          <View style={styles.servicesSection}>
            <Text style={[commonStyles.subtitle, styles.sectionTitle]}>
              Photography Services
            </Text>
            <View style={styles.servicesGrid}>
              <View style={styles.serviceCard}>
                <View style={styles.serviceIconContainer}>
                  <IconSymbol name="heart.fill" size={36} color={colors.primary} />
                </View>
                <Text style={styles.serviceTitle}>Weddings</Text>
                <Text style={styles.serviceDescription}>
                  Beautiful wedding photography to treasure forever
                </Text>
              </View>
              <View style={styles.serviceCard}>
                <View style={styles.serviceIconContainer}>
                  <IconSymbol name="person.fill" size={36} color={colors.primary} />
                </View>
                <Text style={styles.serviceTitle}>Portraits</Text>
                <Text style={styles.serviceDescription}>
                  Professional portraits for individuals and families
                </Text>
              </View>
              <View style={styles.serviceCard}>
                <View style={styles.serviceIconContainer}>
                  <IconSymbol name="photo.fill" size={36} color={colors.primary} />
                </View>
                <Text style={styles.serviceTitle}>Events</Text>
                <Text style={styles.serviceDescription}>
                  Corporate and special event photography
                </Text>
              </View>
              <View style={styles.serviceCard}>
                <View style={styles.serviceIconContainer}>
                  <IconSymbol name="sparkles" size={36} color={colors.primary} />
                </View>
                <Text style={styles.serviceTitle}>Commercial</Text>
                <Text style={styles.serviceDescription}>
                  Product and commercial photography services
                </Text>
              </View>
            </View>
          </View>

          {/* Gallery Section */}
          <View style={styles.gallerySection}>
            <Text style={[commonStyles.subtitle, styles.sectionTitle]}>
              Portfolio Gallery
            </Text>
            <Text style={[commonStyles.textSecondary, styles.sectionSubtitle]}>
              Browse through my recent work
            </Text>
            <Gallery />
          </View>

          {/* Testimonials Section */}
          <View style={styles.testimonialsSection}>
            <Text style={[commonStyles.subtitle, styles.sectionTitle]}>
              Client Testimonials
            </Text>
            <View style={styles.testimonialCard}>
              <View style={styles.quoteIcon}>
                <IconSymbol name="quote.opening" size={24} color={colors.primary} />
              </View>
              <Text style={styles.testimonialText}>
                &quot;Susan captured our wedding day perfectly! The photos are absolutely stunning 
                and we couldn&apos;t be happier with the results.&quot;
              </Text>
              <Text style={styles.testimonialAuthor}>- Sarah & Michael</Text>
            </View>
            <View style={styles.testimonialCard}>
              <View style={styles.quoteIcon}>
                <IconSymbol name="quote.opening" size={24} color={colors.primary} />
              </View>
              <Text style={styles.testimonialText}>
                &quot;Professional, creative, and a joy to work with. Our family portraits 
                turned out beautifully!&quot;
              </Text>
              <Text style={styles.testimonialAuthor}>- The Johnson Family</Text>
            </View>
          </View>

          {/* Quick Contact Section */}
          <View style={styles.contactSection}>
            <Text style={[commonStyles.subtitle, styles.sectionTitle]}>Get in Touch</Text>
            <Text style={[commonStyles.textSecondary, styles.sectionSubtitle]}>
              Ready to book your session? Contact me today!
            </Text>
            <View style={styles.contactButtons}>
              <Pressable style={styles.contactButton} onPress={handleCall}>
                <IconSymbol name="phone.fill" size={22} color={colors.card} />
                <Text style={styles.contactButtonText}>Call Now</Text>
              </Pressable>
              <Pressable style={styles.contactButton} onPress={handleEmail}>
                <IconSymbol name="envelope.fill" size={22} color={colors.card} />
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
    paddingVertical: 40,
    paddingHorizontal: 24,
    backgroundColor: colors.card,
    marginBottom: 24,
    boxShadow: `0px 4px 16px ${colors.shadow}`,
    elevation: 3,
  },
  heroIconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.highlight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  heroSubtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 12,
  },
  heroText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 400,
  },
  socialContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  socialButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.highlight,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  servicesSection: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  sectionTitle: {
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  sectionSubtitle: {
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
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    boxShadow: `0px 4px 12px ${colors.shadow}`,
    elevation: 3,
  },
  serviceIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.highlight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  serviceTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 6,
  },
  serviceDescription: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 18,
  },
  gallerySection: {
    marginBottom: 32,
  },
  testimonialsSection: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  testimonialCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    boxShadow: `0px 4px 12px ${colors.shadow}`,
    elevation: 3,
  },
  quoteIcon: {
    marginBottom: 12,
  },
  testimonialText: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 22,
    fontStyle: 'italic',
    marginBottom: 12,
  },
  testimonialAuthor: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
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
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    boxShadow: `0px 6px 16px rgba(44, 95, 45, 0.3)`,
    elevation: 5,
  },
  contactButtonText: {
    color: colors.card,
    fontSize: 17,
    fontWeight: '700',
  },
});
