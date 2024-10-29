import {View, Text, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UpcommingEvent = () => {
  return (
    <View style={{padding: 16}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
          Upcomming Event
        </Text>
        <Ionicons
          style={{color: 'black', fontSize: 29, fontWeight: 'bold'}}
          name="chevron-forward-outline"
          color="white"
          size={28}
        />
      </View>
      <View style={{borderRadius: 20, alignItems: 'center', margin: 20}}>
        <Image style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, width:390, height: 300}} source={require('../assets/istockphoto-1502289545-612x612.jpg')} />
      </View>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
    </View>
  );
};

export default UpcommingEvent;
