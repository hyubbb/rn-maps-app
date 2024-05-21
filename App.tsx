/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MenuScreen from './src/screens/drawer/MenuScreen';
function App(): React.JSX.Element {
  return (
    <>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
      <NavigationContainer>
        <MenuScreen />
      </NavigationContainer>
    </>
  );
}

export default App;
