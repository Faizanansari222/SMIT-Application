import {View, ScrollView} from 'react-native';
import React from 'react';
import Navbar from '../component/Navbar';
import Header from '../component/Header';
import UpcommingEvent from '../component/UpcommingEvent';

const Home = () => {
  return (
    <View >
      <View>
        <Navbar />
        <View style={{paddingLeft: 8, justifyContent: 'center'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <Header
              heading="Graphic Desiging Course"
              durations="2 months"
              imgUrl={require('../assets/artistic-tools1.png')}
            />
            <Header
              heading="Graphic Desiging Course"
              durations="2 months"
              imgUrl={require('../assets/artistic-tools1.png')}
            />
            <Header
              heading="Graphic Desiging Course"
              durations="2 months"
              imgUrl={require('../assets/artistic-tools1.png')}
            />
          </ScrollView>
        </View>
      </View>
      <View>
        <UpcommingEvent/>
      </View>
    </View>
  );
};

export default Home;
