import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import home from '../screens/home';

import homeicon from "../assets/images/homeFocus.png"
import CompaignFocus from "../assets/images/CompaignFocus.png"
import { COLOR_PRIMARY } from '../utils/colors';
import compaign from '../screens/compaign';

const tabnavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" 
      component={home}
      
      options={{
        tabBarLabelStyle: { color: COLOR_PRIMARY },
        headerShown:false,

        tabBarIcon: ({ focused }) => (
          <Image
            source={homeicon}
            resizeMode="contain"
            // style={[Styles.IMG, { tintColor: user.user.rank.PRIMARY_LIGHT ? user.user.rank.PRIMARY_LIGHT : "#000000" }]}
          />
        ),
        // tabBarButton: (props) => <TabBarCustomButton {...props} />,
        // headerTitle: 'Dashboard',
        // headerTitleAlign: 'center',
        // headerTitleStyle: { marginLeft: -2 },
        // headerLeft: () => (
        //   <TouchableOpacity onPress={drawer}>

        //     <Image
        //       source={icons.filter}
        //       resizeMode="contain"
        //       // style={[Styles.IMG, { tintColor: user.user.rank.PRIMARY_LIGHT ? user.user.rank.PRIMARY_LIGHT : "#000000", marginLeft: 20 }]}
        //       // style={{ paddingLeft: 60 }}
        //       style={{height:40,width:40, paddingLeft: 60}}
        //     />
        //   </TouchableOpacity>

        // )

      }}
      />
      <Tab.Screen name="Compaign" component={compaign}
      options={{

        tabBarLabelStyle: { color: COLOR_PRIMARY },
        headerShown:false,

        tabBarIcon: ({ focused }) => (
          <Image
            source={CompaignFocus}
            resizeMode="contain"
            // style={[Styles.IMG, { tintColor: user.user.rank.PRIMARY_LIGHT ? user.user.rank.PRIMARY_LIGHT : "#000000" }]}
          />
        ),
      }}
      />
    </Tab.Navigator>
  )
}

export default tabnavigation

const styles = StyleSheet.create({})