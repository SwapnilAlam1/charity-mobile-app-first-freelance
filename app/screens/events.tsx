import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ProgressBarAndroid,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, { useState } from 'react';

import logo from '../assets/images/logo.png';
import profile from '../assets/images/profile.png';
import drawer from '../assets/images/drawer.png';
import notification from '../assets/images/noti.png';
import search from '../assets/images/search.png';
import timer from '../assets/images/timer.png';
import { COLOR_PRIMARY } from '../utils/colors';
import { TextInput } from 'react-native-gesture-handler';
import CustomTextInput from '../components/input';
import backicon from '../assets/images/noti.png';
import notificationicon from '../assets/images/backscreen.png';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/button';

const cardData = [
  {
    id: 1,
    title: 'Card Title 1',
    image: require('../assets/images/Rectangle5.png'),
    textTopLeft: 'Children day',
    textBottomLeft: 'Book a seat',
    textBottomRight: 'helps us to make the',
    textBottomRight1: 'bright future of these',
    textBottomRight2: 'souls',
  },
  {
    id: 2,
    title: 'Card Title 2',
    image: require('../assets/images/Rectangle7.png'),
    textTopLeft: 'World day',
    textBottomLeft: 'Book a seat',
    textBottomRight: 'helps us to make the',
    textBottomRight1: 'bright future of these',
    textBottomRight2: 'souls',
  },
];

const cardData2 = [
  {
    id: 1,
    title: 'Card Title 1',
    image: require('../assets/images/food.png'),
    textTopLeft: 'World Food Day',
    textBottomLeft: 'Explore',
    textBottomRight: 'helps us to make the',
    textBottomRight1: 'bright future of these',
    textBottomRight2: 'souls',
  },
  {
    id: 2,
    title: 'Card Title 2',
    image: require('../assets/images/food2.png'),
    textTopLeft: 'Animal Day',
    textBottomLeft: 'Explore',
    textBottomRight: 'helps us to make the',
    textBottomRight1: 'bright future of these',
    textBottomRight2: 'souls',
  },
];

const cardData3 = [
  {
    id: 1,
    title: 'Card Title 1',
    image: require('../assets/images/womens.png'),
    textTopLeft: 'Womens Day',
    textBottomLeft: 'Explore',
    textBottomRight: 'helps us to make the',
    textBottomRight1: 'bright future of these',
    textBottomRight2: 'souls',
  },
  {
    id: 2,
    title: 'Card Title 2',
    image: require('../assets/images/cancer.png'),
    textTopLeft: 'Cancer Day',
    textBottomLeft: 'Explore',
    textBottomRight: 'helps us to make the',
    textBottomRight1: 'bright future of these',
    textBottomRight2: 'souls',
  },
];

const categorycardData = [
  {
    id: 1,
    image: require('../assets/images/spons1.png'),
    textTopLeft: '',
  },
  {
    id: 1,
    image: require('../assets/images/spons2.png'),
    textTopLeft: '',
  },
  {
    id: 1,
    image: require('../assets/images/spons3.png'),
    textTopLeft: '',
  },
  {
    id: 1,
    image: require('../assets/images/spons4.png'),
    textTopLeft: '',
  },
];

const Card = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.cardImage} source={item.image} />
      <Text style={styles.textTopLeft}>{item.textTopLeft}</Text>
      <Text style={styles.textBottomLeft}>{item.textBottomLeft}</Text>
      {/* <Text style={styles.textBottomRight}>{item.textBottomRight}</Text>
      <Text style={styles.textBottomRight1}>{item.textBottomRight1}</Text>
      <Text style={styles.textBottomRight2}>{item.textBottomRight2}</Text> */}
    </View>
  );
};

const CompaignCard = ({ title, subtitle, progress, imageSource }) => {
  return (
    <View style={styles.card}>
      <Image style={{ height: '60%', width: '100%' }} source={imageSource} />
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={progress}
        />
        <Text style={{ color: "#9C2CF3" }}>$450,000 out of $800,000</Text>

      </View>
    </View>
  );
};

const CategoryCard = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
      }}>
      <View>
        <Image style={{}} source={item.image} />
      </View>
      <Text style={{ fontWeight: 'bold', marginTop: 3 }}>{item.textTopLeft}</Text>
    </View>
  );
};

const Events = () => {
  const navigation = useNavigation();
  const [modalVisibleone, setModalVisibleone] = useState(false);
  const [Textvalueone, setTextvalueone] = useState(null);
  const [imgurlone, setimgurlone] = useState(null);


  return (
    <View
      style={{
        padding: '5%',
        backgroundColor: '#FFFFFF',
        height: '100%',

      }}>

      <View style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 5,
        alignItems:"center"

      }}>
        <TouchableOpacity
        
        onPress={() => {
          navigation.goBack();
        }}>
          <Image source={notificationicon} />
        </TouchableOpacity>
        <Text style={{
          color: 'black',
          fontSize: 20,
          fontWeight: "bold"
        }}>
          Events
        </Text>
        <Image source={backicon} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View>
            <Text style={{ color: "black", fontSize: 20, paddingVertical: "3%",fontWeight:"bold" }}>
              Upcoming Events
            </Text>
          </View>
          <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {cardData.map(item => (
              <Card key={item.id} item={item} />
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            paddingVertical: 10,
          }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text
              style={{
                fontSize: 20,
                color: "black",
                fontWeight:"bold"
              }}>
              Our Sponsors
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: '#A8A8A8',
              }}>
              See all
            </Text>
          </View>
          <View style={[styles.container, { paddingVertical: 10 }]}>
            <ScrollView horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {categorycardData.map(item => (
                <TouchableOpacity onPress={()=>{
                  setimgurlone(item.image);
                  setTextvalueone(item.textTopLeft)
                  setModalVisibleone(true)
                }}>
                <CategoryCard key={item.id} item={item} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={{ color: "black", fontSize: 20, paddingVertical: "3%",fontWeight:"bold" }}>
              Present Events
            </Text>
          </View>
          <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {cardData2.map(item => (
               <TouchableOpacity onPress={()=>{
                setimgurlone(item.image);
                setTextvalueone(item.textTopLeft)
                setModalVisibleone(true)
              }}>
              <Card key={item.id} item={item} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={{ color: "black", fontSize: 20, paddingVertical: "3%",fontWeight:"bold" }}>
              Previous Events
            </Text>
          </View>
          <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {cardData3.map(item => (
                <TouchableOpacity onPress={()=>{
                  setimgurlone(item.image);
                  setTextvalueone(item.textTopLeft)
                  setModalVisibleone(true)
                }}>
              <Card key={item.id} item={item} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>



      <Modal visible={modalVisibleone} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{fontWeight: 'bold', fontSize: 20,
          marginBottom:4
          }}>{Textvalueone}</Text>
            <Image
              source={imgurlone}
              style={styles.modalImage}
              resizeMode="contain"
            />
            {/* <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={progressvalue}
              color={COLOR_PRIMARY}
            /> */}

            <Text style={styles.progressText}>{}</Text>
            <CustomButton
              text="Close"
              onPress={() => {
                setModalVisibleone(false);
              }}
              isFilled
              isFullWidth={false}
            />
          </View>
        </View>
      </Modal>






    </View>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 50,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  cardContainer: {
    width: 300,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textTopLeft: {
    // backgroundColor: COLOR_PRIMARY,
    position: 'absolute',
    top: 0,
    left: 7,
    color: 'white',
    fontSize: 20,
    padding: "2%",
    fontWeight: "bold"
  },
  textBottomLeft: {
    backgroundColor: COLOR_PRIMARY,

    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    fontSize: 16,
    borderRadius: 25,
    width: 100,
    textAlign: 'center',
  },
  textBottomRight: {
    position: 'absolute',
    bottom: 30,
    right: 27,
    color: '#fff',
    fontSize: 13,
  },
  textBottomRight1: {
    position: 'absolute',
    bottom: 15,
    right: 25,
    color: '#fff',
    fontSize: 13,
  },
  textBottomRight2: {
    position: 'absolute',
    bottom: 1,
    right: 117,
    color: '#fff',
    fontSize: 13,
  },

  // compaign card

  container3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  halfCard: {
    flex: 1,
    height: 250,
    paddingHorizontal: 20,
    position: 'relative',
  },
  card: {
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    backgroundColor: '#fff',
    overflow: 'hidden',
    height: 200,
    width: '100%',
    paddingBottom: 10
  },
  cardText: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 5,
    color: "#A8A8A8"
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: "bold"
  },










  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImage: {
    width: 200,
    height: 200,
  },
  progressBar: {
    width: '100%',
    marginTop: 20,
  },
  progressText: {
    marginTop: 10,
  },
  modalCloseButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    fontSize: 24,
    color: 'white',
  },
});
