import { StyleSheet, FlatList,SafeAreaView,Dimensions,StatusBar } from 'react-native'
import {Slide,Footer} from "../components"
import React,{useState} from 'react'

const {height,width } = Dimensions.get('screen')

const slides = [
  {
    id:0,
    title:"Welcome to QuizzyMind",
    text:'Explore a new dimension of intellectual entertainment with our exciting quiz app.'
  },
  {
    id:1,
    title:"Personalize Your Experience",
    text:'Choose your favorite categories. Your experience, your rules!'
  },
  {
    id:2,
    title:"Ready to play ?",
    text:'Dive into the captivating world of quizzes and enrich your mind.'
  },
]


const OnboardingScreen = ({navigation}) => {

  const [currentIndex,setCurrentIndex] =useState(0)
  
  const updateSlideIndex=e=>{
    const offsetX = e.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width)
    setCurrentIndex(index)
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#F2F5FF"} barStyle={"dark-content"}/>
      <FlatList
        onMomentumScrollEnd={updateSlideIndex}
        pagingEnabled
        data={slides}
        contentContainerStyle={{height:height*0.75}}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=><Slide item={item}/>}
      />
      <Footer slides={slides} navigation={navigation} currentIndex={currentIndex}/>
    </SafeAreaView>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F2F5FF",
  },
})