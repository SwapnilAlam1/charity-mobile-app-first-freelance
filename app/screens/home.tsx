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
import React, {useState} from 'react';

import logo from '../assets/images/logo.png';
import profile from '../assets/images/profile.png';
import drawer from '../assets/images/drawer.png';
import notification from '../assets/images/noti.png';
import search from '../assets/images/search.png';
import timer from '../assets/images/timer.png';
import {COLOR_PRIMARY} from '../utils/colors';
import {TextInput} from 'react-native-gesture-handler';
import CustomTextInput from '../components/input';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../components/button';

const cardData = [
  {
    id: 1,
    title: 'Card Title 1',
    image: require('../assets/images/Rectangle5.png'),
    textTopLeft: 'Top',
    textBottomLeft: 'Donate now',
    textBottomRight: 'helps us to make the',
    textBottomRight1: 'bright future of these',
    textBottomRight2: 'souls',
  },
  {
    id: 2,
    title: 'Card Title 2',
    image: require('../assets/images/Rectangle7.png'),
    textTopLeft: 'Top',
    textBottomLeft: 'Donate now',
    textBottomRight: 'helps us to make the',
    textBottomRight1: 'bright future of these',
    textBottomRight2: 'souls',
  },
];
const categorycardData = [
  {
    id: 1,
    image: require('../assets/images/Rectangle22.png'),
    textTopLeft: 'All',
  },
  {
    id: 1,
    image: require('../assets/images/Rectangle23.png'),
    textTopLeft: 'Animals',
  },
  {
    id: 1,
    image: require('../assets/images/Rectangle24.png'),
    textTopLeft: 'Children',
  },
  {
    id: 1,
    image: require('../assets/images/Rectangle25.png'),
    textTopLeft: 'Education',
  },
];

const Card = ({item}) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.cardImage} source={item.image} />
      <Text style={styles.textTopLeft}>{item.textTopLeft}</Text>
      <Text style={styles.textBottomLeft}>{item.textBottomLeft}</Text>
      <Text style={styles.textBottomRight}>{item.textBottomRight}</Text>
      <Text style={styles.textBottomRight1}>{item.textBottomRight1}</Text>
      <Text style={styles.textBottomRight2}>{item.textBottomRight2}</Text>
    </View>
  );
};

const CompaignCard = ({title, subtitle, progress, imageSource}) => {
  return (
    <View style={styles.card}>
      <Image style={{height: '60%', width: '100%'}} source={imageSource} />
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={progress}
          color={COLOR_PRIMARY}
        />
        <Text style={{color: '#9C2CF3'}}>$450,000 out of $800,000</Text>
      </View>
    </View>
  );
};

const CategoryCard = ({item}) => {
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
      <Text style={{fontWeight: 'bold', marginTop: 3}}>{item.textTopLeft}</Text>
    </View>
  );
};

const home = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleone, setModalVisibleone] = useState(false);
  const [imgurl, setimgurl] = useState(null);
  const [imgurlone, setimgurlone] = useState(null);
  const [progressvalue, setprogressvalue] = useState(null);
  const [Textvalue, setTextvalue] = useState(null);
  const [Textvalueone, setTextvalueone] = useState(null);

  return (
    <View
      style={{
        padding: '5%',
        backgroundColor: '#FFFFFF',
        height: '100%',
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Profile');
          }}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={profile} />
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              paddingLeft: 5,
            }}>
            <Text style={{fontWeight: '600', fontSize: 12}}>Hi Katherine</Text>
            <Text style={{fontWeight: '600', fontSize: 12}}>Welcome</Text>
          </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={logo} />
          <View style={{paddingLeft: 10}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: COLOR_PRIMARY,
                textAlign: 'center',
              }}>
              TREE
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: COLOR_PRIMARY,
              }}>
              HUGGERS
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={{marginRight: 7}} source={drawer} />
          <Image source={notification} />
        </View>
      </View>
      <View style={{position: 'relative', paddingVertical: 20}}>
        <CustomTextInput
          PadLeft={35}
          BorRad={25}
          placeholder="Search"
          title="Enter Email"
          leftAlign={true}
        />
        <Image
          style={{position: 'absolute', top: 35, left: 8}}
          source={search}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {cardData.map(item => (
              <Card key={item.id} item={item} />
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            paddingVertical: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'black',
              }}>
              Categories
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
          <View style={[styles.container, {paddingVertical: 10}]}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {categorycardData.map(item => (
                <TouchableOpacity 
                onPress={()=>{
                  setimgurlone(item?.image)
                  setTextvalueone(item?.textTopLeft)
                  setModalVisibleone(true)
                }}
                >
                <CategoryCard key={item.id} item={item} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={{paddingVertical: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'black',
              }}>
              Compaigns
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
        </View>
        <View style={[styles.container3, {marginBottom: 5}]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.halfCard}
                onPress={() => {
                  setModalVisible(true);
                  setimgurl('https://source.unsplash.com/random/800x800');
                  setprogressvalue(0.7);
                  setTextvalue('Save Animals');
                }}>
                <View
                  style={{
                    backgroundColor: COLOR_PRIMARY,
                    // position: 'absolute',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 100,
                    borderRadius: 20,
                    right: 22,
                    top: 10,
                    zIndex: 9999,
                    position: 'absolute',
                  }}>
                  <Image source={timer} style={{marginRight: 5}} />
                  <Text
                    style={{color: 'white', fontSize: 13, fontWeight: '300'}}>
                    4 days a left
                  </Text>
                </View>
                <CompaignCard
                  title="Save Animals"
                  subtitle="Help Us to Save Pandas"
                  progress={0.7}
                  imageSource={{
                    uri: 'https://source.unsplash.com/random/800x800',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.halfCard}
                onPress={() => {
                  setModalVisible(true);
                  setimgurl('https://source.unsplash.com/random/800x800');
                  setprogressvalue(0.3);
                  setTextvalue('Humanity');
                }}>
                <View
                  style={{
                    backgroundColor: COLOR_PRIMARY,
                    // position: 'absolute',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 100,
                    borderRadius: 20,
                    right: 22,
                    top: 10,
                    zIndex: 9999,
                    position: 'absolute',
                  }}>
                  <Image source={timer} style={{marginRight: 5}} />
                  <Text
                    style={{color: 'white', fontSize: 13, fontWeight: '300'}}>
                    4 day a left
                  </Text>
                </View>
                <CompaignCard
                  title="Humanity"
                  subtitle="Help Victor to Control Hunger"
                  progress={0.4}
                  imageSource={{
                    uri: 'https://source.unsplash.com/random/800x800',
                  }}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{Textvalue}</Text>
            <Image
              source={{
                uri: imgurl,
              }}
              style={styles.modalImage}
              resizeMode="contain"
            />
            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={progressvalue}
              color={COLOR_PRIMARY}
            />

            <Text style={styles.progressText}>{`${Math.round(
              progressvalue * 100,
            )}%`}</Text>
            <CustomButton
              text="Close"
              onPress={() => {
                setModalVisible(false);
              }}
              isFilled
              isFullWidth={false}
            />
          </View>
        </View>
      </Modal>
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
            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={progressvalue}
              color={COLOR_PRIMARY}
            />

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

export default home;

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
    backgroundColor: COLOR_PRIMARY,
    position: 'absolute',
    top: 0,
    left: 7,
    color: '#fff',
    fontSize: 20,
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
    paddingBottom: 10,
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
    color: '#A8A8A8',
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: 'bold',
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
