import {View, Text, Image, Button} from 'react-native';
import React from 'react';
import AppBtn from './AppBtn';

const UpcommingEvent = () => (
  <View style={{padding: 16, width: 410}}>
    <View
      style={{
        shadowColor: '#000',
        backgroundColor: '#fff',
        borderRadius: 20,

        overflow: 'hidden',

        shadowOffset: {
          width: 6,
          height: 6,
        },
        shadowOpacity: 0.01,
        shadowRadius: 4,
        elevation: 5,
      }}>
      <View style={{alignItems: 'center'}}>
        <Image
          style={{height: 250}}
          source={require('../assets/istockphoto-1502289545-612x612.jpg')}
        />
      </View>
      <View style={{padding: 15}}>
        <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
        </Text>
        <View
          style={{
            margin: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 25,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: 'gray',
            }}>
            Tuesday 12 March 2022
          </Text>
          <View>
            <Button color={'skyblue'} title="Apply Now" />
          </View>
        </View>
      </View>
    </View>
  </View>
);

export default UpcommingEvent;
