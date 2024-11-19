import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import ClassRegistration from './pages/ClassRegistration';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="ClassRegistration" component={ClassRegistration} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}