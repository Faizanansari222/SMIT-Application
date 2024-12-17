import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import React from 'react';
import Navbar from '../component/Navbar';
import Header from '../component/Header';
import UpcommingEvent from '../component/UpcommingEvent';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Courses from '../component/Courses';

const Home = (props: any) => {
  const DATA = {
    courses: [
      {
        id: 1,
        heading: 'Graphic Desiging Course',
        durations: '2 months',
        imgUrl: require('../assets/artistic_tools1.png'),
      },
      {
        id: 2,
        heading: 'Web Development Course',
        durations: '6 months',
        imgUrl: require('../assets/web_course.png'),
      },
      {
        id: 3,
        heading: 'App Development Course',
        durations: '4 months',
        imgUrl: require('../assets/app_develop.png'),
      },
    ],
    UpcommingEvent: [
      {
        id: 4,
        heading: 'Admission Open For 360 Sales Markiting',
        imgUrl: require('../assets/UpcommingEvent/360markitingsales.jpg'),
        Date: 'Tuesday 12 March 2022',
      },
      {
        id: 5,
        heading: 'Entrance Exam Cloud Data Engineering',
        Date: 'Tuesday 12 March 2022',
        imgUrl: require('../assets/UpcommingEvent/cloud_en'),
      },
      {
        id: 6,
        heading: 'Techno Kids Batch 06 Orientation',
        Date: 'Tuesday 12 March 2022',
        imgUrl: require('../assets/UpcommingEvent/technoKidsBatch06.jpg'),
        function: {
          onPress: () => {
            console.log('pressed');
          },
        },
      },
    ],
  };
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <StatusBar backgroundColor="skyblue" />

        <View>
          <Navbar
            heading="SMIT"
            navigate={navigation}
            icon={
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                activeOpacity={0.5}>
                <View style={{backgroundColor: 'skyblue'}}>
                  {
                    <AntDesign
                      style={{color: 'white'}}
                      name="user"
                      color="white"
                      size={28}
                    />
                  }
                </View>
              </TouchableOpacity>
            }
          />
          <View
            style={{
              margin: 5,
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center',
            }}>
            <FlatList
              data={DATA.courses}
              horizontal={true}
              renderItem={({item}) => (
                <Header
                  heading={item.heading}
                  durations={item.durations}
                  imgUrl={item.imgUrl}
                />
              )}
              // keyExtractor={item => item.id}
            />
          </View>
        </View>
        <View>
          <View
            style={{
              marginHorizontal: 20,
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 18,
                marginBottom: 15,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Upcomming Event
            </Text>
            <Ionicons
              style={{color: 'black', fontSize: 29, fontWeight: 'bold'}}
              name="chevron-forward-outline"
              color="white"
            />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <UpcommingEvent eventData={DATA.UpcommingEvent} />
          </ScrollView>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 15,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Courses
          </Text>
          <Ionicons
            style={{color: 'black', fontSize: 29, fontWeight: 'bold'}}
            name="chevron-forward-outline"
            color="white"
            size={28}
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <Courses />
          <Courses />
          <Courses />
          <Courses />
          <Courses />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;
