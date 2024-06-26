import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AddressScreen from './src/screens/AddressScreen';
import ShopingCartScreen from './src/screens/ShoppigCartScreen';
import Router from './src/router';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Router />
      

    </View>
  );
};

export default App;