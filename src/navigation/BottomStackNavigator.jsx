import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home/index'
import Search from '../screens/Search/index'
import TransferMoney from '../screens/TransferMoney/index'
import Statistics from '../screens/Statistics/index'
import Profile from '../screens/Profile/index'
import { Image, View } from 'react-native'
import styles from './bottomTabstyle'

// Icons
import home from '../assets/images/home.png'
import search from '../assets/images/search.png'
import transfer from '../assets/images/transfer.png'
import statistics from '../assets/images/statistics.png'
import user from '../assets/images/user.png'

const Tabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tabs.Navigator
            initialRouteName='Home'
            screenOptions={{ 
                headerShown: false, 
                tabBarShowLabel : false,
                tabBarStyle : styles.tabBarStyle,
            }}
        >

            <Tabs.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon : ({ focused }) => (
                        <View
                            style={[
                                styles.iconContainer,
                                focused && styles.activeIcon,
                            ]}
                        >
                            <Image
                                source={home}
                                style={styles.icon}
                            />
                        </View>
                        
                    )
                }}
            />

            <Tabs.Screen
                name='Search'
                component={Search}
                options={{
                    tabBarIcon : ({ focused }) => (
                        <View
                            style={[
                                styles.iconContainer,
                                focused && styles.activeIcon,
                            ]}
                        >
                            <Image
                                source={search}
                                style={styles.icon}
                            />
                        </View>
                        
                    )
                }}
            />

            <Tabs.Screen
                name='TransferMoney'
                component={TransferMoney}
                options={{
                    tabBarIcon : ({ focused }) => (
                        <View
                            style={[
                                styles.iconContainer,
                                focused && styles.activeIcon,
                            ]}
                        >
                            <Image
                                source={transfer}
                                style={styles.icon}
                            />
                        </View>
                        
                    )
                }}
            />

            <Tabs.Screen
                name='Statistics'
                component={Statistics}
                options={{
                    tabBarIcon : ({ focused }) => (
                        <View
                            style={[
                                styles.iconContainer,
                                focused && styles.activeIcon,
                            ]}
                        >
                            <Image
                                source={statistics}
                                style={styles.icon}
                            />
                        </View>
                        
                    )
                }}
            />

            <Tabs.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon : ({ focused }) => (
                        <View
                            style={[
                                styles.iconContainer,
                                focused && styles.activeIcon,
                            ]}
                        >
                            <Image
                                source={user}
                                style={styles.icon}
                            />
                        </View>
                        
                    )
                }}
            />


        </Tabs.Navigator>
    )
}

export default BottomTabNavigator;