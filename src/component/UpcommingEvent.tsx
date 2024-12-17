import {View, Text, Image, FlatList, Button} from 'react-native';
import React from 'react';
import AppBtn from './AppBtn';

const UpcommingEvent = (props: any) => {
  const {eventData} = props;
  return (
    <View style={{padding: 20, gap: 10, flexDirection: 'row'}}>
      <FlatList
        data={eventData}
        horizontal={true}
        renderItem={({item}) => (
          <View
            style={{
              borderRadius: 20,
              overflow: 'hidden',
              height: 380,
              width: 380,
              marginRight: 15,
              backgroundColor: '#fff',
            }}>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{
                  height: 250,
                  width: 380,
                }}
                source={item.imgUrl}
              />
            </View>
            <View style={{padding: 10}}>
              <Text style={{fontSize: 18, height: 50, fontWeight: '600', marginBottom: 2, color: 'black'}}>
                {item.heading}
              </Text>
              <View
                style={{
                  marginHorizontal:10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    color: 'gray',
                  }}>
                  {item.Date}
                </Text>
                <View>
                  <Button  color={'skyblue'}  title="Apply Now" />
                  {/* <AppBtn title="Apply Now" fun={item.function} /> */}
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default UpcommingEvent;
