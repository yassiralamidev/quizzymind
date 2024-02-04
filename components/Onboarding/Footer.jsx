import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../style/colors'

const Footer = ({slides,currentIndex,navigation}) => {
  return (
    <View style={styles.footer}>
      <View style={styles.indicatorContainer}>
        {slides.map((_,index)=>{
          return (
            <View 
              key={index} 
              style={[styles.indicator,currentIndex === index && {backgroundColor:colors.text,width:25}]}
            />
            )
        })}
      </View>
      <View style={{marginBottom:20}}>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={() => navigation.replace('Home')} style={[styles.button,{backgroundColor:colors.text,}]}>
            <Text style={{color:colors.primary,fontWeight:'bold',fontSize:14}}>
              GET STARTED
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  footer:{
    height:Dimensions.get('screen').height * 0.20,
    justifyContent:"space-between",
    paddingHorizontal:20
  },
  indicatorContainer:{
    flexDirection:'row',
    justifyContent:'center'
  },
  indicator:{
    height:5,
    backgroundColor:colors.secondary,
    width:12,
    borderRadius:2,
    marginHorizontal:3
  },
  button:{
    flex:1,
    height:50,
    borderRadius:7,
    justifyContent:'center',
    alignItems:'center',
  }
})