import React from 'react';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {StyleSheet, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store/Store';

import BottomNav from './components/BottomNav';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
    accent: '#f1c40f',
  },
};

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <BottomNav />
      </PaperProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
