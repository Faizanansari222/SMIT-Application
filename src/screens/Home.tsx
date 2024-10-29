import {
  View,
  Text,
  ScrollView,
  FlatList,
  FlatListComponent,
} from 'react-native';
import React from 'react';
import Navbar from '../component/Navbar';
import Header from '../component/Header';

const Home = () => {
  return (
    <View>
      <Navbar />
      <View style={{padding: 10, justifyContent: 'center', }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}>
          <Header heading="Graphic Desiging Course" durations="2 months" imgUrl={require('../assets/')}/>
          <Header heading="Graphic Desiging Course" durations="2 months" />
          <Header heading="Graphic Desiging Course" durations="2 months" />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
