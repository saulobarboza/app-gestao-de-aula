import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import TopicListing from './pages/TopicListing';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="TopicListing" component={TopicListing} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}