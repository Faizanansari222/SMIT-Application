import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Navbar from '../component/Navbar';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SignUp = (props: any) => {
  const {navigation} = props;
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="skyblue" />
      <Navbar
        heading="Student Registration"
        icon=""
        backIcon={
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
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
          <View style={{gap: 5}}>
            <TextInput
              style={{
                padding: 10,
                borderRadius: 8,
                width: 280,
                borderColor: '#dbdbdb',
                borderWidth: 1,
                color: 'black',
              }}
              secureTextEntry
              autoCorrect={false}
              placeholderTextColor={'#dbdbdb'}
              placeholder="Enter password"
            />
          </View>
          <View >
            <TextInput
              style={{
                padding: 10,
                borderRadius: 8,
                width: 280,
                borderColor: '#dbdbdb',
                borderWidth: 1,
                color: 'black',
              }}
              secureTextEntry
              autoCorrect={false}
              placeholderTextColor={'#dbdbdb'}
              placeholder="Enter password"
            />
          </View>
          <View style={{marginTop: 35}}>
            <Button color={'skyblue'} title="Login" />
          </View>
          <Text style={{color: 'gray', alignSelf: 'center'}}>
            You have already an account?{' '}
            <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            activeOpacity={0.5}>
            <View>
            <Text
              style={{
                color: 'skyblue',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              Login
            </Text>
            </View>
          </TouchableOpacity>
            
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
