import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ProductCard = ({ id, title, image, desc }) => {
  return (
    <View key={id} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
      <Text>{title}</Text>
      <Text>{desc}</Text>
    </View>
  );
};

export default function Cards() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProductData(res.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <ScrollView>
      <Text>HOME</Text>
      {productData.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          desc={product.description}
        />
      ))}
    </ScrollView>
  );
}
