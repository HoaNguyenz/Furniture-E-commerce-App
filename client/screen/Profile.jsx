import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import styles from './profile.style'
import { StatusBar } from 'expo-status-bar'
import { COLORS, SIZES } from "../constants";
import {AntDesign, MaterialCommunityIcons, SimpleLineIcons, Ionicons} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const Profile = ({navigation}) => {
  const [userData, setUserData] = useState(null)
  const [userLogin, setUserLogin] = useState(false)

  useEffect(()=>{
    checkExistingUser();
  }, [])

  const checkExistingUser = async()=>{
    const id = await AsyncStorage.getItem('id')
    const userId = `user${JSON.parse(id)}`

    try {
      const currentUser = await AsyncStorage.getItem(userId)

      if(currentUser !== null){
        const parsedData = JSON.parse(currentUser)
        setUserData(parsedData)
        setUserLogin(true) 
      }
      else{
        navigation.navigate('Login')
      }
    } catch (error) {
      console.log("Error retrieving the data: ", error)
    }
  }

  const userLogout = async()=>{
    const id = await AsyncStorage.getItem('id')
    const userId = `user${JSON.parse(id)}`

    try {
      await AsyncStorage.multiRemove([userId, 'id'])
      navigation.replace('Bottom Navigation')
    } catch (error) {
      console.log("Error logging out the user: ", error)
    }
  }

  const logout = ()=>{
    Alert.alert(
      "Logout", 
      "Are you sure you want to logout",
      [
        {
          text: "Cancel", onPress: ()=> console.log("cancel pressed")
        },
        {
          text: "Continue", onPress: ()=> userLogout()
        },
      ]
    )
  }

  const clearCache = ()=>{
    Alert.alert(
      "Clear Cache", 
      "Are you sure you want to delete all saved data on your device",
      [
        {text: "Cancel", onPress: ()=> console.log("cancel clear cache")},
        {text: "Continue", onPress: ()=> console.log("clear cache pressed")},
      ]
    )
  }

  const confirmDeleteAccount = async () => {
    const id = await AsyncStorage.getItem('id');
    const userId = JSON.parse(id);

    try {
      const response = await axios.delete(`http://192.168.100.7:3000/api/user/${userId}`);

      if (response.status === 200) {
        await AsyncStorage.multiRemove([`user${userId}`, 'id']);
        navigation.replace('Login');
      } else {
        console.log('Error deleting the account: ', response.status);
      }
    } catch (error) {
      console.log('Error deleting the account: ', error);
    }
  };

  const deleteAccount = ()=>{
    Alert.alert(
      "Delete Account", 
      "Are you sure you want to delete this account",
      [
        {text: "Cancel", onPress: ()=> console.log("cancel delete")},
        {text: "Continue", onPress: ()=> confirmDeleteAccount()},
      ]
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.gray}></StatusBar>

        <View style={{width: '100%'}}>
          <Image
            source={require('../assets/images/space.jpg')}
            style={styles.cover}
          ></Image>
        </View>

        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/images/profile.jpeg')}
            style={styles.profile}
          ></Image>
          <Text style={styles.name}>{userLogin === true ? `${userData.username}` : "Please login into your account"}</Text>

          {userLogin === false ? (
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
              <View style={styles.loginBtn}>
                <Text style={styles.menuText}>L O G I N</Text>
              </View>
            </TouchableOpacity>
          ) : 
          (<View style={styles.loginBtn}>
            <Text style={styles.menuText}>{userData.email}</Text>
          </View>)}

          {userLogin === false ? (           
              <View>
              </View>
          ) : 
          (<View style={styles.menuWrapper}>
            <TouchableOpacity onPress={()=>navigation.navigate('Favorites')}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons
                  name='heart-outline'
                  size={24}
                  color={COLORS.primary}
                ></MaterialCommunityIcons>
                <Text style={styles.menuText}>Favorites</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Order')}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons
                  name='truck-delivery-outline'
                  size={24}
                  color={COLORS.primary}
                ></MaterialCommunityIcons>
                <Text style={styles.menuText}>Orders</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
              <View style={styles.menuItem}>
                <Ionicons
                  name='cart-outline'
                  size={24}
                  color={COLORS.primary}
                ></Ionicons>
                <Text style={styles.menuText}>Cart</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>clearCache()}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons
                  name='cached'
                  size={24}
                  color={COLORS.primary}
                ></MaterialCommunityIcons>
                <Text style={styles.menuText}>Clear cache</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>deleteAccount()}>
              <View style={styles.menuItem}>
                <AntDesign
                  name='deleteuser'
                  size={24}
                  color={COLORS.primary}
                ></AntDesign>
                <Text style={styles.menuText}>Delete Account</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>logout()}>
              <View style={styles.menuItem}>
                <AntDesign
                  name='logout'
                  size={24}
                  color={COLORS.primary}
                ></AntDesign>
                <Text style={styles.menuText}>Logout</Text>
              </View>
            </TouchableOpacity>

          </View>)}

        </View>
      </View>
    </View>
  )
}

export default Profile