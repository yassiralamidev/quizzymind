import React,{useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import colors from '../style/colors';
import categories from '../constants/categories';
import {BASE_URL} from '../constants/api'
import axios from "axios";

const HomeScreen = ({navigation}) => {

  const [selectedCategory,setSelectedCategory] = useState({});

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#F2F5FF"} barStyle={"dark-content"} />
      <View style={{ paddingHorizontal: 15, paddingTop: 10 }}>
        <Text style={styles.title}>Explore Categories</Text>
        <Text style={styles.subtitle}>Please choose a category to start a quiz now.
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.categoriesList} horizontal={false}>
        {categories && categories.map((category, key) => {
          return (
            <TouchableOpacity 
              onPress={()=>{setSelectedCategory(category)}} 
              style={[styles.categoryContainer,selectedCategory.name === category.name && styles.selectedCategoryContainer]} 
              key={key}
            >
              <Image style={{ height: 50, width: 50 }} source={category.icon}/>
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
      {selectedCategory && selectedCategory.name && 
        <View style={{alignItems:'center',paddingHorizontal:15,marginBottom:20}}>
          <TouchableOpacity onPress={()=>navigation.replace('Quiz',{category:selectedCategory})} style={styles.startBtn}>
            <Text style={{color:colors.primary,fontWeight:'bold',fontSize:14}}>
              START THE QUIZ
            </Text>
          </TouchableOpacity>
        </View>
      }
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: colors.text,
  },
  categoriesList: {
    marginTop:15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-around",
  },
  categoryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: 130,
    height:130,
    borderRadius:10,
    borderColor:colors.primary,
    borderWidth:1,
  },
  selectedCategoryContainer: {
    backgroundColor:"#5a82fa40",
    borderColor:colors.secondary,
    borderWidth:1,
  },
  categoryText: {
    marginTop: 5,
    color: colors.text,
    fontWeight:"bold"
  },
  startBtn:{
    height:50,
    borderRadius:7,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.text,
    width:Dimensions.get('screen').width - 50,
  }
});
