import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './psearchTile.style'
import { useNavigation } from '@react-navigation/native'

const PsearchTile = ({item}) => {
    const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={ () => navigation.navigate('ProductDetails', {item})}>
        <View style={styles.image}>
            <Image source={{uri: item.imageUrl}} style={styles.productImg}></Image>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.supplier}>{item.supplier}</Text>
            <Text style={styles.supplier}>${item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default PsearchTile
