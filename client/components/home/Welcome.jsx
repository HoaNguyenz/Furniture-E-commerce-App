import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './welcome.style'
import { COLORS, SIZES } from '../../constants'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
    const navigation = useNavigation();

    return (
    <View>
        <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black, 0)}>Find The Most</Text>
        
        <Text style={styles.welcomeTxt(COLORS.primary, -18)}>Luxurious Furniture</Text>
        </View>

        <View style={styles.searchContainer}>
            <TouchableOpacity>
                <Feather name='search' size={24} style={styles.searchIcon}>

                </Feather>
            </TouchableOpacity>

            <View style={styles.searchWrapper}>
                <TextInput 
                style={styles.searchInput}
                value='' 
                onPressIn={()=>navigation.navigate("Search")}
                placeholder='What are you looking for?'>

                </TextInput>
            </View>

            <View>
            <TouchableOpacity style={styles.searchBtn}>
                <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.offwhite}></Ionicons>
            </TouchableOpacity>
            </View>

        </View>


    </View>
  )
}

export default Welcome
