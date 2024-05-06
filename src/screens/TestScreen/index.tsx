import React, { useState } from 'react';
import {View, StyleSheet, FlatList,Text} from 'react-native';
import ImageCarousel from '../../components/ImageCarousel';
import product from '../../data/product';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import QuantitySelector from '../../components/QuantitySelector';

const TestScreen = () => {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1);
  return (
    <View style={styles.root}>
      {/* Render Product Componet */}

      <ImageCarousel images={product.images}/>
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>

       {/* Price */}
       <Text style={styles.price}>
        from ${product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
        )}
      </Text>

       {/* Description */}
       <Text style={styles.description}>{product.description}</Text>
        {/* Qunatiti selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
    </View>
  );
};



export default TestScreen;