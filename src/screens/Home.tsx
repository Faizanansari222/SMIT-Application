import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Navbar from '../component/Navbar';
import Header from '../component/Header';
import UpcommingEvent from '../component/UpcommingEvent';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}: any) => {
  return (
    <View>
      <View>
        <Navbar
        heading="SMIT"
          navigate={navigation}
          icon={
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}
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
        <View style={{paddingLeft: 8, justifyContent: 'center'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <Header
              heading="Graphic Desiging Course"
              durations="2 months"
              imgUrl={require('../assets/artistic-tools1.png')}
            />
            <Header
              heading="Graphic Desiging Course"
              durations="2 months"
              imgUrl={require('../assets/artistic-tools1.png')}
            />
            <Header
              heading="Graphic Desiging Course"
              durations="2 months"
              imgUrl={require('../assets/artistic-tools1.png')}
            />
          </ScrollView>
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
            size={28}
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <UpcommingEvent />
          <UpcommingEvent />
          <UpcommingEvent />
          <UpcommingEvent />
          <UpcommingEvent />
          <UpcommingEvent />
          <UpcommingEvent />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
