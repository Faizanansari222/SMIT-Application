import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Navbar from '../component/Navbar'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SecondNavbar from '../component/SecondNavbar';

const Dashboard = (props:any) => {
    const {navigation} = props
  return (
    <View>
       <SecondNavbar
       heading="Dashboard"
       IconOne={<Ionicons name="notifications-outline" size={24} color="white" />}
       IconTwo={<MaterialCommunityIcons name="logout" size={24} color="white" />}
       />
    <View>
      <Text>Assalam u Alaam</Text>
      <Text>Assalam u Alaam</Text>
    </View>
    </View>
  )
}

export default Dashboard