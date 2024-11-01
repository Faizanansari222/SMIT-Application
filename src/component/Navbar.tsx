import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Navbar = (props:any) => {
  const {navigate, heading, icon, backIcon} = props;
  return (
    <View>
      <View style={style.container}>
        {/* <TouchableOpacity activeOpacity={0.5}>
          <View>
            <Ionicons
              style={{color: 'white'}}
              name="chevron-back-outline"
              color="white"
              size={28}
            />
          </View>
        </TouchableOpacity> */}
        {backIcon}

        <Text style={style.siblingText}>{heading}</Text>
        <View style={{width: 30}}>
          {icon}
        </View>
      </View>
    </View>
  );
};

export default Navbar;

const style = StyleSheet.create({
  siblingText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    padding: 13,
  },
});
