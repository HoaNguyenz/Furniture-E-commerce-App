import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import useFetch from '../../hook/useFetch'
import {COLORS, SIZES} from '../../constants'
import styles from './productList.style'
import ProductCardView from './ProductCardView'

const ProductList = () => {
    const {data, isLoading, error} = useFetch();

    if(isLoading){
        return(
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}></ActivityIndicator>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={data} numColumns={2} 
            renderItem={({item}) => (<ProductCardView item={item}></ProductCardView>)}
            contentContainerStyle={styles.container}
            ItemSeparatorComponent={()=><View style={styles.separator}></View>}
            ></FlatList>
        </View>
    )
}

export default ProductList

