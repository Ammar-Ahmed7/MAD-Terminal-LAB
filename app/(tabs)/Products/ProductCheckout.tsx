import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function CheckoutPage() {
  const [promoCode, setPromoCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleCheckout = () => {
    if (!paymentMethod) {
      Alert.alert("Error", "Please select a payment method.");
      return;
    }

    Alert.alert("Success", "Your order has been placed!");
  };

  return (
    <View style={styles.container}>
      {/* Cart Summary */}
      <View style={styles.cartSummary}>
        <Text style={styles.sectionTitle}>Cart Summary</Text>
        <View style={styles.cartItem}>
          <Text style={styles.itemName}>Item 1</Text>
          <Text style={styles.itemPrice}>$10.00</Text>
        </View>
        <View style={styles.cartItem}>
          <Text style={styles.itemName}>Item 2</Text>
          <Text style={styles.itemPrice}>$15.00</Text>
        </View>
        <View style={styles.cartTotal}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalPrice}>$25.00</Text>
        </View>
      </View>

      {/* Promo Code */}
      <View style={styles.promoSection}>
        <TextInput
          style={styles.promoInput}
          placeholder="Enter Promo Code"
          value={promoCode}
          onChangeText={setPromoCode}
        />
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>

      {/* Payment Options */}
      <View style={styles.paymentSection}>
        <Text style={styles.sectionTitle}>Payment Options</Text>
        {["Credit Card", "PayPal", "Digital Wallet"].map((method) => (
          <TouchableOpacity
            key={method}
            style={[
              styles.paymentOption,
              paymentMethod === method && styles.selectedPayment,
            ]}
            onPress={() => setPaymentMethod(method)}
          >
            <Text
              style={[
                styles.paymentText,
                paymentMethod === method && styles.selectedPaymentText,
              ]}
            >
              {method}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cartSummary: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    color: "#333",
  },
  itemPrice: {
    fontSize: 16,
    color: "#333",
  },
  cartTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 10,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  promoSection: {
    flexDirection: "row",
    marginBottom: 20,
  },
  promoInput: {
    flex: 1,
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  applyButton: {
    marginLeft: 10,
    backgroundColor: "#FF5722",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  applyButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  paymentSection: {
    marginBottom: 20,
  },
  paymentOption: {
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
  },
  selectedPayment: {
    backgroundColor: "#4CAF50",
  },
  paymentText: {
    fontSize: 16,
    color: "#333",
  },
  selectedPaymentText: {
    color: "#fff",
    fontWeight: "bold",
  },
  checkoutButton: {
    backgroundColor: "#FF5722",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
