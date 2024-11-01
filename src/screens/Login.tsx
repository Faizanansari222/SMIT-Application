import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Navbar from '../component/Navbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Login = (props: any) => {
  const [email, setEmail] = useState('');
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <Navbar
        heading="Student Login"
        icon=""
        backIcon={
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.5}>
            <View style={{backgroundColor: 'skyblue'}}>
              {
                <Ionicons
                  style={{color: 'white'}}
                  name="chevron-back-outline"
                  color="white"
                  size={28}
                />
              }
            </View>
          </TouchableOpacity>
        }
      />
      <View
        style={{
          marginVertical: 'auto',
        }}>
        <View
          style={{
            margin: 'auto',
            alignItems: 'center',
            borderRadius: 8,

            height: 350,
            justifyContent: 'center',
            width: 300,
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.9,
            shadowRadius: 1,
            elevation: 3,
          }}>
          <View style={{gap: 15}}>
            {/* <TextInput
              style={{padding: 10, borderRadius: 8, width: 280, borderWidth: 1,borderColor: '#dbdbdb',color: 'black'}}
              placeholderTextColor={'#dbdbdb'}
              placeholder="Enter your email"
              /> */}
            <Text>{email}</Text>
            <TextInput
              onChangeText={e => setEmail(e)}
              style={{
                padding: 10,
                borderRadius: 8,
                width: 280,
                borderColor: '#dbdbdb',
                borderWidth: 1,
                color: 'black',
              }}
              placeholderTextColor={'#dbdbdb'}
              placeholder="Enter your email"
            />
            <TextInput
              style={{
                padding: 10,
                borderRadius: 8,
                width: 280,
                borderColor: '#dbdbdb',
                borderWidth: 1,
                color: 'black',
              }}
              placeholderTextColor={'#dbdbdb'}
              placeholder="Enter password"
            />
            <View style={{marginTop: 35}}>
              <Button color={'skyblue'} title="Login" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
