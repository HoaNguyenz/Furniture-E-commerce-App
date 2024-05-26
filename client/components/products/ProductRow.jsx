import { FlatList, Text, View, SafeAreaView, ActivityIndicator } from 'react-native'
import React from 'react'
import ProductCardView from './ProductCardView'
import styles from './productRow.style'
import { COLORS, SIZES } from "../../constants";
import useFetch from '../../hook/useFetch';

const ProductRow = () => {
    const {data, isLoading, error} = useFetch();

  return (
    <View style={styles.container}>
        {
          isLoading ? (
            <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}></ActivityIndicator>
          ) : error ? ( 
          <Text> {error.message} </Text>
          ) : (
            <FlatList 
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={({item}) => <ProductCardView item = {item}/>}
            horizontal
            contentContainerStyle={{columnGap: SIZES.medium}}
            >
            </FlatList>
          )
        
        }
    </View>
  )
}

export default ProductRow
