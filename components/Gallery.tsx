
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
  Modal,
  ScrollView,
  Platform,
} from 'react-native';
import { colors } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';

const { width: screenWidth } = Dimensions.get('window');
const imageWidth = (screenWidth - 48) / 2; // 2 columns with padding

interface GalleryImage {
  id: string;
  uri: string;
  title: string;
  category: string;
}

// Sample portfolio images from Unsplash
const portfolioImages: GalleryImage[] = [
  {
    id: '1',
    uri: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
    title: 'Wedding Ceremony',
    category: 'Weddings',
  },
  {
    id: '2',
    uri: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800',
    title: 'Portrait Session',
    category: 'Portraits',
  },
  {
    id: '3',
    uri: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800',
    title: 'Nature Landscape',
    category: 'Landscapes',
  },
  {
    id: '4',
    uri: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800',
    title: 'Sunset View',
    category: 'Landscapes',
  },
  {
    id: '5',
    uri: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800',
    title: 'Family Portrait',
    category: 'Portraits',
  },
  {
    id: '6',
    uri: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800',
    title: 'Wedding Reception',
    category: 'Weddings',
  },
  {
    id: '7',
    uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    title: 'Mountain Vista',
    category: 'Landscapes',
  },
  {
    id: '8',
    uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800',
    title: 'Professional Headshot',
    category: 'Portraits',
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
      <Image source={{ uri: image.uri }} style={styles.image} resizeMode="cover" />
      <View style={styles.imageOverlay}>
        <Text style={styles.imageTitle} numberOfLines={1}>
          {image.title}
        </Text>
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
                <IconSymbol name="xmark.circle.fill" size={32} color={colors.card} />
              </Pressable>
              <Image
                source={{ uri: selectedImage.uri }}
                style={styles.modalImage}
                resizeMode="contain"
              />
              <View style={styles.modalInfo}>
                <Text style={styles.modalTitle}>{selectedImage.title}</Text>
                <Text style={styles.modalCategory}>{selectedImage.category}</Text>
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
    gap: 8,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  categoryButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
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
    height: imageWidth,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.card,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
  },
  imageTitle: {
    color: colors.card,
    fontSize: 12,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modalContent: {
    width: '90%',
    maxWidth: 500,
    maxHeight: '80%',
    backgroundColor: colors.card,
    borderRadius: 16,
    overflow: 'hidden',
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.3)',
    elevation: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 16,
  },
  modalImage: {
    width: '100%',
    height: 400,
    backgroundColor: colors.background,
  },
  modalInfo: {
    padding: 16,
    backgroundColor: colors.card,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  modalCategory: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});
