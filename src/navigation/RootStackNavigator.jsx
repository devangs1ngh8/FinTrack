import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Splash from '../screens/Splash';
import dashBoard from '../screens/Home'
import forgotPassword from '../screens/ForgotPassword'
import securityPin from '../screens/SecurityPin'
import newPassword from '../screens/NewPassword'
import changedPassword from '../screens/ChangedPassword'
import BottomTabNavigator from './BottomStackNavigator'
import Notifications from '../screens/Notifications'

import React from 'react';

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />

        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen name="SignIn" component={SignIn} />

        <Stack.Screen name='MainTabs' component={BottomTabNavigator} />

        <Stack.Screen name='forgotPassword' component={forgotPassword} />

        <Stack.Screen name='securityPin' component={securityPin} />

        <Stack.Screen name='newPassword' component={newPassword} />

        <Stack.Screen name='changedPassword' component={changedPassword} />

        <Stack.Screen name='Notifications' component={Notifications} />

      </Stack.Navigator>
    );
  }

export default RootStackNavigator;