import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Navbar = () => {
  return (
    <View>
      <View style={style.sibling}>
        <AntDesign name="bars" color="white" size={25} />
      </View>

      <Text>SMIT</Text>

      <View>{ <AntDesign name="bars" color="white" size={22} /> }</View>
    </View>
  );
};

export default Navbar;

const style = StyleSheet.create({
  sibling: {
    color: 'white',
    margin: 10,
  },
  container: {
    padding: 20,
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
