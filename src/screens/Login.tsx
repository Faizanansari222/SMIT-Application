import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Navbar from '../component/Navbar';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = (props: any) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const {navigation} = props;

  // const handleLogin = async () => {
  //   // const data ={
  //   //   name: name,
  //   //   password: password
  //   // }
  //   // try {
  //   //   console.log(data);
      
   
    

  //   // } catch (error: any) {
  //   //   console.log('error aaraha he ---->', error.message);
  //   // }

  //   // navigation.navigate('Dashboard')
  // };
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="skyblue" />
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
            value={name}
            onChangeText={setName}
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
              value={password}
              onChangeText={setPassword}
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
            <TouchableOpacity
              activeOpacity={0.5}
              style={{alignSelf: 'flex-end'}}>
              <Text style={{color: 'gray', fontSize: 12}}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 30}}>
            <Button onPress={()=>{navigation.navigate('Dashboard')}} color={'skyblue'} title="Login" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                gap: 2,
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{color: 'gray', alignSelf: 'center', fontSize: 13}}>
                  Don't have an account?{' '}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  alignSelf: 'center',
                  marginTop: 5,
                  padding: 0,
                  margin: 0,
                }}
                onPress={() => navigation.navigate('SignUp')}
                activeOpacity={0.5}>
                <Text
                  style={{
                    paddingBottom: 5,
                    color: 'skyblue',
                    fontSize: 13,
                    fontWeight: 'bold',
                    textDecorationLine: 'underline',
                  }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
