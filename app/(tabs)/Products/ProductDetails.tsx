import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useLocalSearchParams, Link, useRouter } from "expo-router"; // Import useRouter

export default function ProductDetails() {
  const { name, price, rating, category, image } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState("");
  const router = useRouter(); // Initialize the useRouter hook

  const handleCheckout = () => {
    if (!selectedSize) {
      Alert.alert("Error", "Please select a size before proceeding to checkout.");
      return;
    }

    // If a size is selected, navigate to the checkout page
    router.push("/(tabs)/Products/ProductCheckout");
  };

  return (
    <View style={styles.container}>
      {/* Display the Product Image */}
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />

      {/* Product Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.category}>Category: {category}</Text>
        <Text style={styles.rating}>⭐ Rating: {rating}</Text>

        {/* Size Options */}
        <View style={styles.sizeContainer}>
          <Text style={styles.sizeLabel}>Select Size:</Text>
          <View style={styles.sizeOptions}>
            {["Small", "Medium", "Large"].map((size) => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeOption,
                  selectedSize === size && styles.selectedSize,
                ]}
                onPress={() => setSelectedSize(size)}
              >
                <Text
                  style={[
                    styles.sizeText,
                    selectedSize === size && styles.selectedSizeText,
                  ]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Checkout Button */}
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E", // Dark background color
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: "80%",
    height: 220,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3, // Increased shadow opacity
    shadowRadius: 6,
  },
  infoContainer: {
    backgroundColor: "#2D2D2D", // Dark card background
    width: "90%",
    borderRadius: 15,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3, // Increased shadow opacity
    shadowRadius: 6,
    elevation: 4,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF", // Light text color
    marginBottom: 10,
    textAlign: "center",
  },
  price: {
    fontSize: 20,
    color: "#FFD700", // Gold color for price
    fontWeight: "600",
    marginBottom: 10,
  },
  category: {
    fontSize: 16,
    color: "#B0B0B0", // Light grey for category
    marginBottom: 8,
    textAlign: "center",
  },
  rating: {
    fontSize: 16,
    color: "#FFD700", // Gold color for rating
    fontWeight: "500",
    marginBottom: 20,
  },
  sizeContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  sizeLabel: {
    fontSize: 16,
    color: "#FFFFFF", // Light text color for label
    fontWeight: "600",
    marginBottom: 10,
  },
  sizeOptions: {
    flexDirection: "row",
    justifyContent: "center",
  },
  sizeOption: {
    backgroundColor: "#444444", // Dark option background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 8,
  },
  selectedSize: {
    backgroundColor: "#FF5722", // Vibrant red color when selected
  },
  sizeText: {
    fontSize: 14,
    color: "#FFFFFF", // Light text color
    fontWeight: "500",
  },
  selectedSizeText: {
    color: "#fff", // White text for selected size
  },
  checkoutButton: {
    backgroundColor: "#FF5722", // Vibrant red for checkout button
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  checkoutText: {
    fontSize: 16,
    color: "#fff", // White text color
    fontWeight: "bold",
  },
});
