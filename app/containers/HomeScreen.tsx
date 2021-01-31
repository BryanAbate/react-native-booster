import React, { useCallback } from 'react';
import { View } from "react-native";
import Counter from '../components/Counter';
import homeSlice from '../store/reducers/homeSlice';
import { useAppSelector } from '../store/reducers/rootReducer';
import { useAppDispatch } from '../store/store';

function HomeScreen() {
  const dispatch = useAppDispatch()
  const incrementCounter = useCallback(
    () => dispatch(homeSlice.actions.increment()),
    [dispatch]
  )
  
  const counter = useAppSelector(store => store.homeReducer.counter);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Counter onPress={incrementCounter} value={counter}/>
    </View>
  );
}

export default HomeScreen;