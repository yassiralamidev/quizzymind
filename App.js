import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigator';

export default function App() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appData = await AsyncStorage.getItem('isAppFirstLaunched');
        if (appData === null || appData === 'true') {
          setIsAppFirstLaunched(true);
          await AsyncStorage.setItem('isAppFirstLaunched', 'false');
        } else {
          setIsAppFirstLaunched(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    return () => {

    };
  }, []);

  return (
    isAppFirstLaunched !== null && (
      <NavigationContainer>
        <StackNavigation isAppFirstLaunched={isAppFirstLaunched}/>
      </NavigationContainer>
    )
  );
}

