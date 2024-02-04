import { StyleSheet, Text, SafeAreaView,StatusBar, View,Dimensions, TouchableOpacity } from 'react-native'
import colors from '../style/colors'
import React from 'react'

const ResultScreen = ({navigation,route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.text} barStyle={"light-content"} />
      <View style={styles.result}>
        <Text style={{color:colors.text,fontWeight:'bold',fontSize:17,marginTop:20}}>Your Score</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:"70%",marginTop:"20%"}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:colors.text,fontWeight:'600',fontSize:18}}>
              {route.params.score}
            </Text>
            <Text style={{color:colors.text,fontWeight:'600',fontSize:18}}>Correct</Text>
          </View >
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:colors.text,fontWeight:'600',fontSize:18}}>
              {10 - route.params.score}
            </Text>
            <Text style={{color:colors.text,fontWeight:'600',fontSize:18}}>Incorrect </Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={()=>navigation.replace('Quiz',{category:route.params.category})} style={styles.button}>
            <Text style={{fontSize:14,fontWeight:"600",color:colors.text}}>PLAY AGAIN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.replace('Home')} style={[styles.button,{backgroundColor:colors.text}]}>
            <Text style={{fontSize:14,fontWeight:"600",color:colors.primary}}>CHOOSE ANOTHER CATEGORY</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ResultScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.text,
    alignItems: "center",
    justifyContent:"center",
  },
  result:{
    alignItems:"center",
    backgroundColor:colors.primary,
    padding:10,
    width:Dimensions.get('screen').width - 80,
    borderRadius:10,
    height:"45%"
  },
  buttons:{
    width:"90%",
    position:'absolute',
    bottom:20,
  },
  button:{
    alignItems:'center',
    justifyContent:'center',
    height:40,
    borderColor:colors.text,
    borderRadius:7,
    borderWidth:1,
    marginTop:10
  }
})