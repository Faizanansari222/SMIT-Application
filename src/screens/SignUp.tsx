import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Navbar from '../component/Navbar';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SignUp = (props: any) => {
  const {navigation} = props;
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async() => {

    if (userName && email && password) {
      await Alert.alert('Account created successfully');
      navigation.navigate('Login');

    } else {
      Alert.alert('Please fill all the fields');
    }

    // fetch('http://localhost:4009/addproduct', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     userName,
    //     email,
    //     password,
    //   }),
    // });
  };

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
            onChangeText={e => setUserName(e)}
            style={{
              padding: 10,
              borderRadius: 8,
              width: 280,
              borderColor: '#dbdbdb',
              borderWidth: 1,
              color: 'black',
            }}
            placeholderTextColor={'#dbdbdb'}
            placeholder="set username"
          />
          <View style={{gap: 5}}>
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
              autoCorrect={false}
              placeholderTextColor={'#dbdbdb'}
              placeholder="enter your email"
            />
          </View>
          <View>
            <TextInput
              onChangeText={e => setPassword(e)}
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
              placeholder="set password"
            />
          </View>
          <View style={{marginTop: 35}}>
            <Button onPress={handleSubmit} color={'skyblue'} title="Register" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View>
              <Text style={{color: 'gray', alignSelf: 'center', fontSize: 13}}>
                You have already an account?{' '}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              activeOpacity={0.5}>
              <Text
                style={{
                  color: 'skyblue',
                  fontWeight: 'bold',
                  fontSize: 13,
                  textDecorationLine: 'underline',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
