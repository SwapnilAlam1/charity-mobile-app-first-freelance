import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import home from '../screens/home';

import homeicon from "../assets/images/homeFocus.png"
import nfhomeicon from "../assets/images/nfhome.png"
import CompaignFocus from "../assets/images/CompaignFocus.png"
import nfcompain from "../assets/images/nfcompain.png"

import profileIcon from "../assets/images/profIcon.png"
import nfprofileIcon from "../assets/images/nfprofile.png"

import eventIcon from "../assets/images/event.png"
import nfeventIcon from "../assets/images/nfevent.png"

import messageIcon from "../assets/images/messag.png"
import fmessageIcon from "../assets/images/fmessag.png"



import { COLOR_PRIMARY } from '../utils/colors';
import compaign from '../screens/compaign';
import Events from '../screens/events';
import Profile from '../screens/profile';
import Messages from '../screens/messages';

const tabnavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home"
        component={home}
        options={{
          tabBarLabelStyle: { color: COLOR_PRIMARY },
          headerShown: false,
          tabBarLabel: ({ focused }) => {
            return (
              <Text style={{ color: `${focused ? COLOR_PRIMARY : "#A8A8A8"}`, fontSize: 10 }}>
                Home
              </Text>
            );
          },
          tabBarIcon: ({ focused }) => (
            <>
              {
                focused ? <Image
                  source={homeicon}
                  resizeMode="contain"
                /> : <Image
                  source={nfhomeicon}
                  resizeMode="contain"
                />
              }
            </>
          ),
        }}
      />
      <Tab.Screen name="Compaign" component={compaign}
        options={{
          tabBarLabelStyle: { color: COLOR_PRIMARY },
          headerShown: false,
          tabBarLabel: ({ focused }) => {
            return (
              <Text style={{ color: `${focused ? COLOR_PRIMARY : "#A8A8A8"}`, fontSize: 10 }}>
                Compaign
              </Text>
            );
          },
          tabBarIcon: ({ focused }) => (
            <>
              {
                focused ? <Image
                  source={CompaignFocus}
                  resizeMode="contain"
                /> : <Image
                  source={nfcompain}
                  resizeMode="contain"
                />
              }
            </>
          ),
        }}
      />

      <Tab.Screen name="Message" component={Messages}
        options={{
          tabBarLabel: '',
          tabBarLabelStyle: { color: COLOR_PRIMARY },
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              {

                focused ? <View style={{ backgroundColor: COLOR_PRIMARY, padding: "18%", borderRadius: 50, marginBottom: "20%" }}  >
                  <Image
                    source={fmessageIcon}
                    resizeMode="contain"
                  />
                </View> : <View style={{ backgroundColor: COLOR_PRIMARY, padding: "18%", borderRadius: 50, marginBottom: "20%" }}  >
                  <Image
                    source={messageIcon}
                    resizeMode="contain"
                  />
                </View>
              }
            </>
          ),
        }}
      />


      <Tab.Screen name="Events" component={Events}
        options={{
          tabBarLabelStyle: { color: COLOR_PRIMARY },
          headerShown: false,
          tabBarLabel: ({ focused }) => {
            return (
              <Text style={{ color: `${focused ? COLOR_PRIMARY : "#A8A8A8"}`, fontSize: 10 }}>
                Events
              </Text>
            );
          },
          tabBarIcon: ({ focused }) => (
            <>
              {
                focused ? <Image
                  source={eventIcon}
                  resizeMode="contain"
                /> : <Image
                  source={nfeventIcon}
                  resizeMode="contain"
                />
              }
            </>
          ),
        }}
      />

      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarLabelStyle: { color: COLOR_PRIMARY },
          headerShown: false,
          tabBarLabel: ({ focused }) => {
            return (
              <Text style={{ color: `${focused ? COLOR_PRIMARY : "#A8A8A8"}`, fontSize: 10 }}>
                Profile
              </Text>
            );
          },

          tabBarIcon: ({ focused }) => (
            <>
              {
                focused ? <Image
                  source={profileIcon}
                  resizeMode="contain"
                /> : <Image
                  source={nfprofileIcon}
                  resizeMode="contain"
                />

              }

            </>
          ),
        }}
      />

    </Tab.Navigator>
  )
}

export default tabnavigation

const styles = StyleSheet.create({})