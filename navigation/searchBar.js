import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from '../styles';

export const Searchbar = ({ onSearch }) => {
  const [city, setCity] = useState('Bangkok');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(city);
    }
  };

  return (
    <View style={styles.searchbar}>
      <TextInput
        placeholder="Search city"
        placeholderTextColor={'#fff'}
        value={city}
        onChangeText={(text) => setCity(text)}
        onSubmitEditing={handleSearch}
        style={styles.searchbarInput}
      />
    </View>
  );
};
