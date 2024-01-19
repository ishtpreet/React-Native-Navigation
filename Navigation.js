import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import View1 from './Screen/View1'
import View2 from './Screen/View2'

export default function Navigation() {
    const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
        <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName = focused ? 'person' : 'person-outline'

            if(route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'
            } 
            return <Ionicons name={iconName} size={size} color={color} />
          }
          }
        )}
        >
            <Tab.Screen name="Home" component={View1} />
            <Tab.Screen name="Screen Two" component={View2} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}