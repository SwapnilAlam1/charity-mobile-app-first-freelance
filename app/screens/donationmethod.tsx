import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { COLOR_PRIMARY } from '../utils/colors';

import backarrow from '../assets/images/backarrowrmethod.png';
import paypal from '../assets/images/paypal.png';
import Wallet from '../assets/images/Wallet.png';
import ApplePay from '../assets/images/ApplePay.png';
import SavedCard from '../assets/images/SavedCard.png';
import addCard from '../assets/images/addCard.png';
import { useNavigation } from '@react-navigation/native';

const donationmethod = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: '#F5F5F5', flex: 1, paddingBottom: 20 }}>
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
        <Text style={{ color: 'white', fontSize: 20 }}>Donation Method</Text>
        <View></View>

        {/* </View> */}
      </View>
      <ScrollView
        style={{
          paddingHorizontal: 20,
        }}>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'black',
              paddingVertical: 15,
            }}>
            Wallet
          </Text>
          <View
            style={{
              backgroundColor: COLOR_PRIMARY,
              paddingVertical: '5%',
              borderRadius: 10,
              paddingHorizontal: '5%',
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: '#9C2CF3',
                paddingVertical: '2%',
                width: '15%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={Wallet} />
            </View>
            <View
              style={{
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                }}>
                Tree Huggers Wallet
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                  paddingLeft: 2,
                  opacity: 0.8,
                }}>
                Balance Available : $500
              </Text>
            </View>
          </View>
          <View
            style={{
              borderColor: COLOR_PRIMARY,
              borderWidth: 1,
              marginVertical: '5%',
            }}></View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'black',
              paddingBottom: 10,
            }}>
            Other Options
          </Text>
          <View
            style={{
              backgroundColor: COLOR_PRIMARY,
              paddingVertical: '5%',
              borderRadius: 10,
              paddingHorizontal: '5%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#9C2CF3',
                paddingVertical: '2%',
                width: '15%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={paypal} />
            </View>
            <View
              style={{
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                }}>
                Paypal
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: COLOR_PRIMARY,
              paddingVertical: '5%',
              borderRadius: 10,
              paddingHorizontal: '5%',
              flexDirection: 'row',
              marginVertical: 10,
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#9C2CF3',
                paddingVertical: '2%',
                width: '15%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={ApplePay} />
            </View>
            <View
              style={{
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                }}>
                Apple Pay
              </Text>
            </View>
          </View>
          <View
            style={{
              borderColor: COLOR_PRIMARY,
              borderWidth: 1,
              marginTop: '5%',
            }}></View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'black',
              //   marginTop: 10,
              paddingVertical: 15,
            }}>
            Saved Cards
          </Text>
          <View
            style={{
              backgroundColor: COLOR_PRIMARY,
              paddingVertical: '5%',
              borderRadius: 10,
              paddingHorizontal: '5%',
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: '#9C2CF3',
                paddingVertical: '2%',
                width: '15%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={SavedCard} />
            </View>
            <View
              style={{
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                }}>
                Brand
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                  paddingLeft: 2,
                  opacity: 0.8,
                }}>
                xxxx xxxx xxxx 1234
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: COLOR_PRIMARY,
              paddingVertical: '5%',
              borderRadius: 10,
              paddingHorizontal: '5%',
              flexDirection: 'row',
              marginTop: '3%',
            }}>
            <View
              style={{
                backgroundColor: '#9C2CF3',
                paddingVertical: '2%',
                width: '15%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={SavedCard} />
            </View>
            <View
              style={{
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                }}>
                Brand Mastercard
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                  paddingLeft: 2,
                  opacity: 0.8,
                }}>
                xxxx xxxx xxxx 5678
              </Text>
            </View>
          </View>
          <View
            style={{
              borderColor: COLOR_PRIMARY,
              borderWidth: 1,
              marginVertical: '5%',
            }}></View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("addcards")
            }}
            style={{
              flexDirection: 'row',
              paddingBottom: 30,

            }}>
            <Image style={{}} source={addCard} />
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>
              Add Cards
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default donationmethod;

const styles = StyleSheet.create({});
