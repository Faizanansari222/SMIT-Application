import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import React from 'react';

const AppBtn = (props: any) => {
  const {title, color} = props;
  return (
    <View style={style.main}>
      <TouchableHighlight>
        <Text style={[style.btn]}>{title}</Text>
      </TouchableHighlight>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
  },
  btn: {
    width: 150,
    paddingVertical: 6,
    textAlign: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 20,
    marginVertical: 15,
  },
});
export default AppBtn;
