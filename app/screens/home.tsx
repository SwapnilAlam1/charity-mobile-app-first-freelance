import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ProgressBarAndroid,
} from 'react-native';
import React from 'react';

import logo from '../assets/images/logo.png';
import profile from '../assets/images/profile.png';
import drawer from '../assets/images/drawer.png';
import notification from '../assets/images/noti.png';
import search from '../assets/images/search.png';
import timer from '../assets/images/timer.png';
import {COLOR_PRIMARY} from '../utils/colors';
import {TextInput} from 'react-native-gesture-handler';
import CustomTextInput from '../components/input';

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
        />
        <Text style={{color:"#9C2CF3"}}>$450,000 out of $800,000</Text>

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

const home = () => {
  return (
    <View
      style={{
        padding: '5%',
        backgroundColor: '#FFFFFF',
        height: '100%',
        
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}

      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={profile} />
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                paddingLeft: 5,
              }}>
              <Text style={{fontWeight: '600', fontSize: 12}}>
                Hi Katherine
              </Text>
              <Text style={{fontWeight: '600', fontSize: 12}}>Welcome</Text>
            </View>
          </View>
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
            // value={email}
            title="Enter Email"
            // onChangeText={(value: any) => {
            //   setEmail(value);
            // }}
            // errorMessage={emailError}
            leftAlign={true}
          />
          <Image
            style={{position: 'absolute', top: 35, left: 8}}
            source={search}
          />
        </View>
        <View style={styles.container}>
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
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
            <ScrollView horizontal={true} 
              showsHorizontalScrollIndicator={false}

            >
              {categorycardData.map(item => (
                <CategoryCard key={item.id} item={item} />
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
        <View style={[styles.container3,{marginBottom:5}]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.row}>
              <View style={styles.halfCard}>
                <View
                  style={{
                    backgroundColor: COLOR_PRIMARY,
                    // position: 'absolute',
                    flexDirection: 'row',
                    justifyContent:"center",
                    alignItems:"center",
                    width:100,
                    borderRadius:20,
                    right:22,
                    top:10,
                    zIndex:9999,
                    position:"absolute"

                  }}>
                  <Image source={timer} style={{marginRight:5}} />
                  <Text style={{color: 'white',fontSize:13,fontWeight:"300"}}>4 days a left</Text>
                </View>
                <CompaignCard
                  title="Save Animals"
                  subtitle="Help Us to Save Pandas"
                  progress={0.7}
                  imageSource={{
                    uri: 'https://source.unsplash.com/random/800x800',
                  }}
                />
              </View>
              <View style={styles.halfCard}>
              <View
                  style={{
                    backgroundColor: COLOR_PRIMARY,
                    // position: 'absolute',
                    flexDirection: 'row',
                    justifyContent:"center",
                    alignItems:"center",
                    width:100,
                    borderRadius:20,
                    right:22,
                    top:10,
                    zIndex:9999,
                    position:"absolute"
                  }}>
                  <Image source={timer} style={{marginRight:5}} />
                  <Text style={{color: 'white',fontSize:13,fontWeight:"300"}}>4 day a left</Text>
                </View>
                <CompaignCard
                  title="Humanity"
                  subtitle="Help Victor to Control Hunger"
                  progress={0.4}
                  imageSource={{
                    uri: 'https://source.unsplash.com/random/800x800',
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
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
    paddingBottom:10
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
    color:"#A8A8A8"
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight:"bold"
  },
});
