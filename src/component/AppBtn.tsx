import {View, Text, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import React from 'react';

const AppBtn = (props: any) => {
  const {title, color} = props;
  return (
    <View style={style.main}>
      
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={style.btn}>{title}</Text>
        </TouchableOpacity>

    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
  },
  btn: {
    color:"white",
    width: 150,
    paddingVertical: 6,
    textAlign: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 20,
    marginVertical: 15,
  },
});
export default AppBtn;
