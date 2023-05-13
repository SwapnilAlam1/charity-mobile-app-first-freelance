import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLOR_PRIMARY} from '../utils/colors';

import backarrow from '../assets/images/backarrowrmethod.png';
import paypal from '../assets/images/paypal.png';
import Frame13 from '../assets/images/Frame13.png';
import Frame12 from '../assets/images/Frame12.png';
import Frame11 from '../assets/images/Frame11.png';
import addCard from '../assets/images/addCard.png';
import {useNavigation} from '@react-navigation/native';

const addCards = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#F5F5F5', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: COLOR_PRIMARY,
          paddingHorizontal: 20,
          paddingVertical: 13,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={backarrow} />
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 20}}>Donation Method</Text>
        <View></View>

        {/* </View> */}
      </View>
      <ScrollView
        style={{
          paddingHorizontal: 25,
          paddingVertical: 20,
        }}>
        <TouchableOpacity
          style={{
            borderColor: COLOR_PRIMARY,
            borderStyle: 'dotted',
            borderWidth: 3,
            paddingVertical: 70,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginHorizontal:5
          }}>
          <Image source={addCard} />
          <Text
            style={{
              paddingLeft: 10,
              color: 'black',
              fontWeight: '700',
            }}>
            Add Card
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={{marginTop:20}}
        >
          <Image source={Frame11} />
        </TouchableOpacity>
        <TouchableOpacity 
        style={{marginTop:20}}
        >
          <Image source={Frame12} />
        </TouchableOpacity>
        <TouchableOpacity 
        style={{marginTop:20,
        marginBottom:80
        }}
        >
          <Image source={Frame13} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default addCards;

const styles = StyleSheet.create({});
