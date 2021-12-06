import Home from './screens/Home';
import React, { useState, useEffect } from 'react';
import Login from './screens/Login';
import OnboardingScreen from './screens/OnboardinScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Asuult1 from './screens/Asuult1';
import Asuult2 from './screens/Asuult2';
import Asuult3 from './screens/Asuult3';
import Asuult4 from './screens/Asuult4';
import Main from './screens/Main';
import History from './screens/History';
import {
  StyleSheet,

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();


function App() {

  const [isFirstLauch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true)
      } else {
        setIsFirstLaunch(false)
      }
    })
    // return () => {
    //   setIsFirstLaunch(false)
    // }
  }, [])

  if (isFirstLauch == null) {
    return null;
  } else if (isFirstLauch == true) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='OnboardingScreen'
          headerMode='none'
        >
          <Stack.Screen
            name='Login'
            component={Login}
            options={
              {
                headerShown: false
              }
            }
          />
          <Stack.Screen
            name='Home'
            component={Home}
          />
          <Stack.Screen
            name='Asuult1'
            component={Asuult1}
          />
          <Stack.Screen
            name='Asuult2'
            component={Asuult2}
          />
          <Stack.Screen
            name='Asuult3'
            component={Asuult3}
          />
          <Stack.Screen
            name='Asuult4'
            component={Asuult4}
          />
          <Stack.Screen
            name='Main'
            component={Main}
          />
          <Stack.Screen
            name='History'
            component={History}
          />
          <Stack.Screen
            name='OnboardingScreen'
            component={OnboardingScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator

          initialRouteName='Main'
          headerMode='none'
        >
          <Stack.Screen
            name='Login'
            component={Login}
            options={
              {
                headerShown: false
              }
            }
          />
          <Stack.Screen
            name='Home'
            component={Home}
          />
          <Stack.Screen
            name='Asuult1'
            component={Asuult1}
          />
          <Stack.Screen
            name='Asuult2'
            component={Asuult2}
          />
          <Stack.Screen
            name='Asuult3'
            component={Asuult3}
          />
          <Stack.Screen
            name='Asuult4'
            component={Asuult4}
          />
          <Stack.Screen
            name='Main'
            component={Main}
          />
          <Stack.Screen
            name='History'
            component={History}
          />
        </Stack.Navigator>
      </NavigationContainer>

    )
  }


}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  }
})

export default App;
