/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React, { ReactNode } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import MainNavigator from './app/navigation/MainNavigator';
import { persistor, store } from './app/store/store';


const App: () => ReactNode = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
