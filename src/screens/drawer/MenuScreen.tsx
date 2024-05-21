import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../home/HomeScreen';
import ProfileScreen from '../profile/ProfileScreen';
import {Text, View} from 'react-native';
const Drawer = createDrawerNavigator();

export default function MenuScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
