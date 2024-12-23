import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon, StarIcon } from "react-native-heroicons/outline";

const ProductSearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample data
  const products = [
    { id: 1, name: 'Wireless Headphones', price: 199, rating: 4.5, category: 'Electronics', image: 'https://i.ebayimg.com/images/g/uXAAAOSwww5gHkFi/s-l1200.png' },
    { id: 2, name: 'Smart Watch', price: 299, rating: 4.2, category: 'Electronics', image: 'https://www.teknofilo.com/wp-content/uploads/2020/09/Teknofilo-Image-034-1-1280x720.jpg' },
    { id: 3, name: 'Running Shoes', price: 89, rating: 4.8, category: 'Fashion', image: 'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg' },
    { id: 4, name: 'Novel Book', price: 15, rating: 4.3, category: 'Books', image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1639163872l/58293924.jpg' },
    { id: 5, name: 'Lamp', price: 76, rating: 4.3, category: 'Home', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9rbpsKDzrdbiLzAQqM5cf8Klc2GSTQZdrXw&s' },
  ];

  // Filtered Products
  const filteredProducts = products.filter((product) => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  const renderProduct = ({ item }) => (
    <Link href={{ pathname: '/Products/ProductDetails', params: { name: item.name, price: item.price, rating: item.rating, category: item.category, image: item.image } }} asChild>
      <TouchableOpacity className="bg-[#1E1E2F] p-4 rounded-lg mb-3 shadow-sm">
        <View>
          {/* Image */}
          <View style={{ width: '100%', height: 200, borderRadius: 10, overflow: 'hidden' }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
          {/* Product Name and Price */}
          <Text className="text-lg font-semibold text-white mt-2">{item.name}</Text>
          <Text className="text-[#4FD1C5] font-bold mt-1">${item.price}</Text>
          {/* Category and Rating */}
          <View className="flex-row justify-between items-center mt-2">
            <Text className="text-sm text-gray-400">{item.category}</Text>
            <View className="flex-row items-center">
              <StarIcon size={16} color="#FFD700" />
              <Text className="ml-1 text-gray-400">{item.rating}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View className="flex-1 bg-[#121212]">
      {/* Search Header */}
      <View className="bg-[#1F1F2E] p-4 shadow-sm">
        <View className="flex-row items-center bg-[#252633] rounded-lg p-2">
          <MagnifyingGlassIcon size={20} color="#9CA3AF" />
          <TextInput
            className="flex-1 ml-2 text-base text-white"
            placeholder="Search products..."
            placeholderTextColor="#6B7280"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity onPress={() => setShowFilters(!showFilters)}>
            <AdjustmentsHorizontalIcon size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Filters Section */}
      {showFilters && (
        <View className="bg-[#1F1F2E] p-4 border-t border-[#252633]">
          <Text className="text-lg font-semibold text-white mb-3">Filters</Text>
          {/* Categories */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
            {['All', 'Electronics', 'Fashion', 'Home', 'Books'].map((category, index) => (
              <TouchableOpacity
                key={index}
                className={`mr-2 px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-[#4FD1C5]' : 'bg-[#252633]'}`}
                onPress={() => setSelectedCategory(category)}
              >
                <Text className={`${selectedCategory === category ? 'text-black' : 'text-white'}`}>{category}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      {/* Product List */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        contentContainerClassName="p-4"
        ListHeaderComponent={
          <Text className="text-xl font-bold text-white mb-4">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </Text>
        }
      />
    </View>
  );
};

export default ProductSearchScreen;
