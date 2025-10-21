
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Modal,
  ScrollView,
  Platform,
} from 'react-native';
import { Image } from 'expo-image';
import { colors } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';

const { width: screenWidth } = Dimensions.get('window');
const imageWidth = (screenWidth - 48) / 2;

interface GalleryImage {
  id: string;
  uri: string;
  title: string;
  category: string;
  description?: string;
}

// Professional portfolio images from Unsplash
const portfolioImages: GalleryImage[] = [
  {
    id: '1',
    uri: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
    title: 'Wedding Ceremony',
    category: 'Weddings',
    description: 'Capturing the magic of your special day',
  },
  {
    id: '2',
    uri: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800',
    title: 'Portrait Session',
    category: 'Portraits',
    description: 'Professional headshots and personal portraits',
  },
  {
    id: '3',
    uri: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800',
    title: 'Nature Landscape',
    category: 'Landscapes',
    description: 'Breathtaking natural scenery',
  },
  {
    id: '4',
    uri: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800',
    title: 'Golden Hour',
    category: 'Landscapes',
    description: 'Beautiful sunset photography',
  },
  {
    id: '5',
    uri: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800',
    title: 'Family Portrait',
    category: 'Portraits',
    description: 'Cherished family memories',
  },
  {
    id: '6',
    uri: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800',
    title: 'Wedding Reception',
    category: 'Weddings',
    description: 'Celebration and joy captured',
  },
  {
    id: '7',
    uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    title: 'Mountain Vista',
    category: 'Landscapes',
    description: 'Majestic mountain landscapes',
  },
  {
    id: '8',
    uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800',
    title: 'Professional Headshot',
    category: 'Portraits',
    description: 'Corporate and business portraits',
  },
  {
    id: '9',
    uri: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800',
    title: 'Bride & Groom',
    category: 'Weddings',
    description: 'Romantic couple photography',
  },
  {
    id: '10',
    uri: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800',
    title: 'Studio Portrait',
    category: 'Portraits',
    description: 'Professional studio sessions',
  },
  {
    id: '11',
    uri: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
    title: 'Misty Mountains',
    category: 'Landscapes',
    description: 'Atmospheric landscape photography',
  },
  {
    id: '12',
    uri: 'https://images.unsplash.com/photo-1525258437537-a5c86e8e9e2e?w=800',
    title: 'Wedding Details',
    category: 'Weddings',
    description: 'The little moments that matter',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Weddings', 'Portraits', 'Landscapes'];

  const filteredImages =
    selectedCategory === 'All'
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === selectedCategory);

  const renderImage = (image: GalleryImage) => (
    <Pressable
      key={image.id}
      style={styles.imageContainer}
      onPress={() => setSelectedImage(image)}
    >
      <Image 
        source={{ uri: image.uri }} 
        style={styles.image} 
        contentFit="cover"
        transition={300}
      />
      <View style={styles.imageOverlay}>
        <Text style={styles.imageTitle} numberOfLines={1}>
          {image.title}
        </Text>
        <IconSymbol name="eye.fill" size={14} color={colors.card} style={styles.viewIcon} />
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {/* Category Filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
        contentContainerStyle={styles.categoryContainer}
      >
        {categories.map((category) => (
          <Pressable
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.categoryButtonActive,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive,
              ]}
            >
              {category}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Gallery Grid */}
      <View style={styles.grid}>
        {filteredImages.map((image) => renderImage(image))}
      </View>

      {/* Image Detail Modal */}
      <Modal
        visible={selectedImage !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedImage(null)}
      >
        <View style={styles.modalContainer}>
          <Pressable style={styles.modalBackdrop} onPress={() => setSelectedImage(null)} />
          {selectedImage && (
            <View style={styles.modalContent}>
              <Pressable style={styles.closeButton} onPress={() => setSelectedImage(null)}>
                <IconSymbol name="xmark.circle.fill" size={36} color={colors.card} />
              </Pressable>
              <Image
                source={{ uri: selectedImage.uri }}
                style={styles.modalImage}
                contentFit="contain"
                transition={300}
              />
              <View style={styles.modalInfo}>
                <Text style={styles.modalTitle}>{selectedImage.title}</Text>
                <Text style={styles.modalCategory}>{selectedImage.category}</Text>
                {selectedImage.description && (
                  <Text style={styles.modalDescription}>{selectedImage.description}</Text>
                )}
              </View>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryScroll: {
    maxHeight: 50,
    marginBottom: 16,
  },
  categoryContainer: {
    paddingHorizontal: 16,
    gap: 10,
  },
  categoryButton: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: colors.card,
    borderWidth: 1.5,
    borderColor: colors.border,
  },
  categoryButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
  categoryTextActive: {
    color: colors.card,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 16,
  },
  imageContainer: {
    width: imageWidth,
    height: imageWidth * 1.2,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: colors.card,
    boxShadow: `0px 4px 12px ${colors.shadow}`,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageTitle: {
    color: colors.card,
    fontSize: 13,
    fontWeight: '600',
    flex: 1,
  },
  viewIcon: {
    marginLeft: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
  modalContent: {
    width: '92%',
    maxWidth: 600,
    maxHeight: '85%',
    backgroundColor: colors.card,
    borderRadius: 20,
    overflow: 'hidden',
    boxShadow: '0px 12px 32px rgba(0, 0, 0, 0.4)',
    elevation: 12,
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 18,
  },
  modalImage: {
    width: '100%',
    height: 450,
    backgroundColor: colors.background,
  },
  modalInfo: {
    padding: 20,
    backgroundColor: colors.card,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 6,
  },
  modalCategory: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: 8,
  },
  modalDescription: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
});
