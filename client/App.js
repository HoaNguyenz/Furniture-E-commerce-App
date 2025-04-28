// import { useFonts } from 'expo-font';
// import * as SplashScreen from "expo-splash-screen";
// import { useCallback } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import BottomTabNavigation from './navigation/BottomTabNavigation';
// import { Cart, ProductDetails, NewRivals, LoginPage, Order, Favorites, SignUp } from './screen';

// const Stack = createNativeStackNavigator();


// export default function App() {
//   const [fontLoaded] = useFonts({
//     regular: require("./assets/fonts/Poppins-Regular.ttf"),
//     bold: require("./assets/fonts/Poppins-Bold.ttf"),
//     extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
//     light: require("./assets/fonts/Poppins-Light.ttf"),
//     medium: require("./assets/fonts/Poppins-Medium.ttf"),
//     semibold: require("./assets/fonts/Poppins-SemiBold.ttf")
//   })

//   const onLayoutRootView = useCallback(async()=>{
//     if(fontLoaded){
//       await SplashScreen.hideAsync();
//     }
//   }, [fontLoaded]);

//     if(!fontLoaded) return null;



//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name='Bottom Navigation'
//           component={BottomTabNavigation}
//           options={{headerShown: false}}
//         >
//         </Stack.Screen>

//         <Stack.Screen
//           name='Cart'
//           component={Cart}
//           options={{headerShown: false}}
//         >
//         </Stack.Screen>
        
//         <Stack.Screen
//           name='ProductDetails'
//           component={ProductDetails}
//           options={{headerShown: false}}
//         >
//         </Stack.Screen>

//         <Stack.Screen
//           name='ProductList'
//           component={NewRivals}
//           options={{headerShown: false}}
//         >
//         </Stack.Screen>

//         <Stack.Screen
//           name='Login'
//           component={LoginPage}
//           options={{headerShown: false}}
//         >
//         </Stack.Screen>

//         <Stack.Screen
//           name='Order'
//           component={Order}
//           options={{headerShown: false}}
//         >
//         </Stack.Screen>

//         <Stack.Screen
//           name='Favorites'
//           component={Favorites}
//           options={{headerShown: false}}
//         >
//         </Stack.Screen>

//         <Stack.Screen
//           name='SignUp'
//           component={SignUp}
//           options={{headerShown: false}}
//         >
//         </Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Cart, ProductDetails, NewRivals, LoginPage, Order, Favorites, SignUp } from './screen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) return null;  // If fonts are not loaded, don't render anything

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Bottom Navigation'
            component={BottomTabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Cart'
            component={Cart}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='ProductDetails'
            component={ProductDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='ProductList'
            component={NewRivals}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Login'
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Order'
            component={Order}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Favorites'
            component={Favorites}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='SignUp'
            component={SignUp}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}