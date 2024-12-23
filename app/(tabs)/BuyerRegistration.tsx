import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const RegistrationScreen = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6">
        <Text className="text-3xl font-bold text-center text-gray-900 mb-8">
          Create Account
        </Text>

        {/* Personal Information */}
        <View className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <Text className="text-lg font-semibold text-gray-900 mb-4">
            Personal Information
          </Text>
          
          <View className="mb-4">
            <Text className="text-gray-700 text-sm mb-1">First Name</Text>
            <TextInput
              className="w-full p-4 bg-white border border-gray-300 rounded-lg"
              value={formData.firstName}
              onChangeText={(text) => handleChange('firstName', text)}
              placeholder="Enter first name"
            />
          </View>

          <View className="mb-4">
            <Text className="text-gray-700 text-sm mb-1">Last Name</Text>
            <TextInput
              className="w-full p-4 bg-white border border-gray-300 rounded-lg"
              value={formData.lastName}
              onChangeText={(text) => handleChange('lastName', text)}
              placeholder="Enter last name"
            />
          </View>

          <View className="mb-4">
            <Text className="text-gray-700 text-sm mb-1">Email</Text>
            <TextInput
              className="w-full p-4 bg-white border border-gray-300 rounded-lg"
              value={formData.email}
              onChangeText={(text) => handleChange('email', text)}
              placeholder="Enter email"
              keyboardType="email-address"
            />
          </View>

          <View className="mb-4">
            <Text className="text-gray-700 text-sm mb-1">Phone</Text>
            <TextInput
              className="w-full p-4 bg-white border border-gray-300 rounded-lg"
              value={formData.phone}
              onChangeText={(text) => handleChange('phone', text)}
              placeholder="Enter phone number"
              keyboardType="phone-pad"
            />
          </View>
        </View>

        {/* Address Information */}
        <View className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <Text className="text-lg font-semibold text-gray-900 mb-4">
            Address Details
          </Text>
          
          <View className="mb-4">
            <Text className="text-gray-700 text-sm mb-1">Street Address</Text>
            <TextInput
              className="w-full p-4 bg-white border border-gray-300 rounded-lg"
              value={formData.address}
              onChangeText={(text) => handleChange('address', text)}
              placeholder="Enter street address"
            />
          </View>

          <View className="mb-4">
            <Text className="text-gray-700 text-sm mb-1">City</Text>
            <TextInput
              className="w-full p-4 bg-white border border-gray-300 rounded-lg"
              value={formData.city}
              onChangeText={(text) => handleChange('city', text)}
              placeholder="Enter city"
            />
          </View>

          <View className="mb-4">
            <Text className="text-gray-700 text-sm mb-1">State</Text>
            <TextInput
              className="w-full p-4 bg-white border border-gray-300 rounded-lg"
              value={formData.state}
              onChangeText={(text) => handleChange('state', text)}
              placeholder="Enter state"
            />
          </View>

          <View className="mb-4">
            <Text className="text-gray-700 text-sm mb-1">ZIP Code</Text>
            <TextInput
              className="w-full p-4 bg-white border border-gray-300 rounded-lg"
              value={formData.zipCode}
              onChangeText={(text) => handleChange('zipCode', text)}
              placeholder="Enter ZIP code"
              keyboardType="numeric"
            />
          </View>
        </View>

         <Link href={{ pathname: "/Products/ProductSearch" }} asChild>
        <TouchableOpacity
          className="bg-blue-500 py-4 px-6 rounded-lg mt-4"
          onPress={handleSubmit}
        >
          <Text className="text-white text-center font-semibold text-lg">
            Create Account
          </Text>
        </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
};

export default RegistrationScreen;