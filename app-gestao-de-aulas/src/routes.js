import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import ClassListing from './pages/ClassListing';
import ClassRegistration from './pages/ClassRegistration';
import ClassUpdate from './pages/ClassUpdate';
import CountdownTimer from './pages/CountdownTimer';
import TopicListing from './pages/TopicListing';
import TopicRegistration from './pages/TopicRegistration';
import TopicUpdate from './pages/TopicUpdate';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="ClassListing" component={ClassListing} />
        <AppStack.Screen name="ClassRegistration" component={ClassRegistration} />
        <AppStack.Screen name="ClassUpdate" component={ClassUpdate} />
        <AppStack.Screen name="CountdownTimer" component={CountdownTimer} />
        <AppStack.Screen name="TopicListing" component={TopicListing} />
        <AppStack.Screen name="TopicRegistration" component={TopicRegistration} />
        <AppStack.Screen name="TopicUpdate" component={TopicUpdate} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}