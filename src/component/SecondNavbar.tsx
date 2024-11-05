import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SecondNavbar = (props: any) => {
  const {navigate, heading, icon, IconOne, IconTwo} = props;
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
            justifyContent: 'space-between',
          alignContent: 'center',
          backgroundColor: 'skyblue',
          padding: 13,
        }}>
        <View style={{width: "18%"}}></View>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          {heading}
        </Text>

        <View style={{flexDirection: 'row', gap: 20}}>
          <TouchableOpacity activeOpacity={0.8}>{IconOne}</TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>{IconTwo}</TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SecondNavbar;
