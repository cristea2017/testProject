import React from 'react';
import { Image, Text, View } from 'react-native';
// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistor, store } from '~/redux/store';
// Navigator
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './auth/RegisterScreen';



// ====Create Auth
const AuthStack = createStackNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="HomeRoot" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}


const RootStackNav = createStackNavigator();
function RootStack() {
  return (
    <RootStackNav.Navigator screenOptions={{ headerShown: false }} >
      <RootStackNav.Screen name="Root" component={AuthStackScreen} />
    </RootStackNav.Navigator>
  );
}


export default function Navigation() {
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootStack />
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </>
  );
}
