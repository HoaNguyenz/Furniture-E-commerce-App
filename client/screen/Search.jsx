import { Text, TextInput, TouchableOpacity, View, SafeAreaView, FlatList, Image } from 'react-native'
import React, {useState} from 'react'
import { COLORS, SIZES } from '../constants'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import styles from './search.style'
import axios from 'axios'
import PsearchTile from '../components/products/PsearchTile'

const Search = () => {
  const [searchKey, setSearchKey] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  //http://192.168.43.218:8081/api/products/search/${searchKey}

  const handleSearch = async ()=>{
    try {
      const response =  await axios.get(`http://192.168.43.218:8081/api/products/search/${searchKey}`);
      setSearchResult(response.data)
    } catch (error) {
      console.log("Failed to get product", error)
    }
  }


  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
            <TouchableOpacity>
                <Ionicons name='camera-outline' size={SIZES.xLarge} style={styles.searchIcon}>
                </Ionicons>
            </TouchableOpacity>

            <View style={styles.searchWrapper}>
                <TextInput 
                style={styles.searchInput}
                value={searchKey}
                onChangeText={setSearchKey}
                placeholder='What are you looking for?'>

                </TextInput>
            </View>

            <View>
            <TouchableOpacity style={styles.searchBtn} onPress={()=>handleSearch()}>
                <Feather name='search' size={24}
                color={COLORS.offwhite}></Feather>
            </TouchableOpacity>
            </View>
          </View>

          {searchResult.length === 0 ? (
            <View style={{flex: 1}}>
              <Image source={require('../assets/images/Pose23.png')} style={styles.searchImage}></Image>
            </View>
          ) : (<FlatList 
                  style={{marginHorizontal: 12}}
                  data={searchResult} 
                  keyExtractor={(item) => item._id}
                  renderItem={({item}) => (<PsearchTile item={item}></PsearchTile>)}></FlatList>)}
    </SafeAreaView>
  )
}

export default Search;
