import {View, Text, StyleSheet, Image, Button} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Navbar = () => {
  return (
    <View>
      <View style={style.container}>
        <View>
          <Ionicons style={{color: 'white' }} name="chevron-back-outline" color="white" size={28} />
        </View>

        <Text style={style.siblingText}>SMIT</Text>

        <View>{<AntDesign style={{color: 'white' }} name="profile" color="white" size={28} />}</View>
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
