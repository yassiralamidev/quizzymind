import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import colors from '../../style/colors'

const Header = ({currentQuestion}) => {

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <View style={styles.header}>
      <Text style={{color:colors.text,fontWeight:'bold'}}>
        Question {currentQuestion+1} of 10
      </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("screen").width - 40,
    alignItems: "center",
    marginVertical: 20,
  },
})