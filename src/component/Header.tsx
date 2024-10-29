import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import AppBtn from './AppBtn';

const Header = (props:any) => {
    const {heading, durations, imgUrl} = props
  return (
    <View>
      <View style={style.header}>
        <View>
          <Text style={style.headerTextH1}>{heading}</Text>
          <Text style={style.headerTextP1}>Durations {durations}</Text>
          <AppBtn title="Apply Now" color="skyblue" />
          {/* <Button  title="Apply Now" /> */}
        </View>
        <View>
          <Image
            style={{width: 150, height: 150}}
            source={imgUrl}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const style = StyleSheet.create({
  btn: {
    backgroundColor: 'skyblue',
    borderRadius: 10,
  },
  headerTextP1: {
    width: 180,
    fontSize: 13,
    marginVertical: 5,
    fontWeight: '300',
    color: 'gray',
  },
  headerTextH1: {
    // alignItems: 'center',
    // justifyContent: 'center',
    width: 180,
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 40,
    margin: 8,
    padding: 15,
    borderRadius: 10,
  },
});
