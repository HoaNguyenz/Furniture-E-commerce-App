import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import styles from './productDetails.style'
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants'
import { useRoute } from '@react-navigation/native'

const ProductDetails = ({navigation}) => {
  const route = useRoute();
  const {item} = route.params;

  const [count, setCount] = useState(1);
  
  const increment = () => {
    if(count < 5){
      setCount(count + 1)
    }
  }
  const decrement = () => {
    if(count > 1){
      setCount(count - 1)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name='chevron-back-circle' size={30}></Ionicons>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>{}}>
          <Ionicons name='heart' size={30} color={COLORS.primary}></Ionicons>
        </TouchableOpacity>

      </View>

      <Image source={{uri: item.imageUrl}}
      style={styles.image}></Image>

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1,2,3,4,5].map((index) => (
              <Ionicons 
                key={index}
                name='star'
                size={20}
                color="gold"
              >              
              </Ionicons>
            ))}

            <Text style={styles.ratingText}> (5.0)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={()=> increment()}>
              <SimpleLineIcons
                name='plus'
                size={20}
              >
              </SimpleLineIcons>
            </TouchableOpacity>

            <Text style={styles.ratingText}>{count}</Text>

            <TouchableOpacity onPress={()=>decrement()}>
              <SimpleLineIcons
                name='minus'
                size={20}
              >
              </SimpleLineIcons>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.descriptionWraper}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descText}>{item.description}</Text>
        </View>

        <View style={{marginBottom: SIZES.small}}>
            <View style={styles.location}>
              <View style={{flexDirection: 'row'}}>
                <Ionicons name='location-outline' size={20}>
                </Ionicons>
                <Text>{item.product_location}</Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name='truck-delivery-outline' size={20}>
                </MaterialCommunityIcons>
                <Text>Free Delivery</Text>
              </View>
            </View>
        </View>
        
        <View style={styles.cartRow}>
            <TouchableOpacity onPress={()=>{}}
              style={styles.cartBtn}
            >
              <Text style={styles.cartTitle}>
                BUY NOW
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{}}
              style={styles.addCart}
            >
              <Fontisto name='shopping-bag' size={22} color={COLORS.lightWhite}></Fontisto>
            </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default ProductDetails