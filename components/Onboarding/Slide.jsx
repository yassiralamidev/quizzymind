import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../style/colors'

const Slide = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text,{fontSize:22,fontWeight:"bold"}]}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  )
}

export default Slide

const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:colors.primary,
    alignItems:"center",
    width:Dimensions.get('screen').width,
    height:Dimensions.get('screen').height * 0.80,
    justifyContent:"center",
  },
  text:{
    width:Dimensions.get('screen').width - 40,
    textAlign:'center',
    color:colors.text
  }
})