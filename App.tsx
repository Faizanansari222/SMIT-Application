import React from 'react';
import Home from './src/screens/Home';
import { View } from 'react-native';

function App(): React.JSX.Element {
    return <View style={{flex: 1, backgroundColor: 'white'}}>
    <Home />
  </View>
}

export default App;
