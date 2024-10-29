import {
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import Navbar from '../component/Navbar';
import Header from '../component/Header';

const Home = () => {
  return (
    <View>
      <Navbar />
      <View style={{padding: 5,  justifyContent: 'center', }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}>
          <Header heading="Graphic Desiging Course" durations="2 months" imgUrl={require('../assets/artistic-tools1.png')}/>
          <Header heading="Graphic Desiging Course" durations="2 months" imgUrl={require('../assets/artistic-tools1.png')}/>
          <Header heading="Graphic Desiging Course" durations="2 months" imgUrl={require('../assets/artistic-tools1.png')}/>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
