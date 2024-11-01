import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Navbar from '../component/Navbar';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = (props: any) => {
  const [email, setEmail] = useState('');
  const {navigation} = props;
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
            <TouchableOpacity
              activeOpacity={0.5}
              style={{alignSelf: 'flex-end'}}>
              <Text style={{color: 'gray', fontSize: 12}}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 30}}>
            <Button color={'skyblue'} title="Login" />
          </View>
          <View style={{flexDirection: 'row', color: 'gray', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{color: 'gray', alignSelf: 'center'}}>
              Don't have an account?{' '}
              <TouchableOpacity
              style={{alignSelf: 'center', marginTop: 5, backgroundColor: 'blue', }}
                onPress={() => navigation.navigate('SignUp')}
                activeOpacity={0.5}>
                <View>
                  <Text
                    style={{
                      color: 'skyblue',
                      fontWeight: 'bold',
                      textDecorationLine: 'underline',
                    }}>
                    Sign Up
                  </Text>
                </View>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
