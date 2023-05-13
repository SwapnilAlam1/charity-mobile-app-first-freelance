import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ProgressBarAndroid,
} from 'react-native';
import React from 'react';

import backicon from '../assets/images/noti.png';
import notificationicon from '../assets/images/backscreen.png';
import CompaignCardicon from '../assets/images/CompaignCard.png';
import timer from '../assets/images/timer.png';
import {COLOR_PRIMARY} from '../utils/colors';
import CustomButton from '../components/button';
import {useNavigation} from '@react-navigation/native';
import { ROUTES_NAMES } from '../utils/constants';

const compaign = (props) => {
  const navigation = useNavigation();
  const CompaignCard = () => {
    return (
      <View
        style={{
          position: 'relative',
        }}>
        <Image source={CompaignCardicon} />
        <View
          style={{
            backgroundColor: COLOR_PRIMARY,
            // position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: 85,
            // borderRadius:20,
            right: 10,
            top: 10,
            zIndex: 9999,
            position: 'absolute',
          }}>
          <Image source={timer} style={{marginRight: 5}} />
          <Text style={{color: 'white', fontSize: 13, fontWeight: '300'}}>
            4 Days left
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 130,
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 20,
          }}>
          <View
            style={{
              width: 9,
              height: 9,
              borderRadius: 5,
              backgroundColor: 'white',
              marginRight: 7,
            }}
          />
          <View
            style={{
              width: 9,
              height: 9,
              borderRadius: 5,
              backgroundColor: 'white',
              marginRight: 7,
            }}
          />

          <View
            style={{
              width: 9,
              height: 9,
              borderRadius: 5,
              backgroundColor: COLOR_PRIMARY,
              marginRight: 7,
            }}
          />

          <View
            style={{
              width: 9,
              height: 9,
              borderRadius: 5,
              backgroundColor: 'white',
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        padding: 15,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={notificationicon} />
          </TouchableOpacity>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
            }}>
            Compaigns
          </Text>
          <Image source={backicon} />
        </View>
        <View
          style={{
            paddingVertical: 10,
          }}>
          <CompaignCard />
        </View>
        <View
          style={{
            padding: 3,
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Help Us to Save Red Pandas
          </Text>
          <Text
            style={{
              color: '#A8A8A8',
              fontSize: 20,
              paddingVertical:5
            }}>
            Save Animals
          </Text>
          <View style={{flex: 1, flexDirection: 'row',paddingVertical:5}}>
            <TouchableOpacity style={styles.textBottomLeft}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                }}>
                Animals
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.textBottomLeft, {marginLeft: 2}]}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                }}>
                Rare
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.textBottomLeft, {marginLeft: 2}]}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                }}>
                Pandas
              </Text>
            </TouchableOpacity>
          </View>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.7}
            color={COLOR_PRIMARY}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical:8
            }}>
            <Text style={{color: 'black'}}>Target:$800,000</Text>
            <Text
              style={{
                color: '#4E148C',
              }}>
              Raised:$450,000
            </Text>
          </View>
          <View
          style={{
            borderWidth:1,
            color:"#A8A8A8",
            opacity:0.2,
            marginVertical:5
          }}
          >

          </View>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 20,
              paddingVertical:8
            }}>
            About Compaign
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur. Justo nunc egestas pretium
            tortor ullamcorper eget leo auctor. Ipsum nibh tincidunt dui
            tincidunt. Viverra sed pulvinar potenti vel nibh phasellus fermentum
            nullam. Varius nunc duis faucibus a in risus. Senectus proin sit hac
            nisi diam nulla placerat blandit sed. Justo augue tincidunt mi
            quisque faucibus proin consequat tincidunt.
          </Text>
        </View>
        <CustomButton
          text="Donate Now"
          onPress={() => {
            props.navigation.navigate(ROUTES_NAMES.donationmethod)
          }}
          isFilled
          isFullWidth={false}
        />
      </ScrollView>
    </View>
  );
};

export default compaign;

const styles = StyleSheet.create({
  textBottomLeft: {
    backgroundColor: COLOR_PRIMARY,
    color: '#fff',
    fontSize: 16,
    borderRadius: 25,
    width: 100,
    textAlign: 'center',
    padding: 3,
  },
});
