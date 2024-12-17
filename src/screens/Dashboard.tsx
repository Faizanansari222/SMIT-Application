import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Navbar from '../component/Navbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SecondNavbar from '../component/SecondNavbar';
import {FlatList} from 'react-native';

const Dashboard = (props: any) => {
  const studentData = {
    id: '1',
    name: 'Usama',
    course: 'php, js, html, css',
    duration: '2 months',
  };
  const {navigation} = props;
  return (
    <View>
      <SecondNavbar
        heading="Dashboard"
        IconOne={
          <Ionicons name="notifications-outline" size={24} color="white" />
        }
        IconTwo={
          <MaterialCommunityIcons name="logout" size={24} color="white" />
        }
      />
      <View>
        <Text>hello</Text>
        {/* <FlatList data={studentData} renderItem={({item}) => (<Text>{item.name}</Text>)}/> */}
      </View>
    </View>
  );
};

export default Dashboard;
