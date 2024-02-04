import {StyleSheet,Text,View,StatusBar,Dimensions,TouchableOpacity, ActivityIndicator} from "react-native";
import React, { useState,useEffect } from "react";
import colors from "../style/colors";
import {Question,Responses,Header} from '../components'
import {BASE_URL} from '../constants/api'
import axios from "axios";

const Quiz = ({ navigation, route }) => {

  const [currentQuestion,setCurrentQuestion] = useState(0)
  const [selectedQ,setSelectedQ] = useState("")
  const [score,setScore] = useState(0)
  const [mixedResponses, setMixedResponses] = useState([]);
  const [questions,setQuestions] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    axios
    .get(`${BASE_URL}${route.params.category.id}`)
    .then((res) => {
      setQuestions(res.data.results);
      setLoading(false);
    })
  },[route.params.category.id]);


  const handleNextQuestion =()=>{
    if (currentQuestion < 9) {
      if (selectedQ === questions[currentQuestion].correct_answer) {
        setScore(score+1);
      }
      setCurrentQuestion(currentQuestion+1);
    }else{
      navigation.replace('Result',{score:score,category:route.params.category})
    }
  }

  useEffect(() => {
    if (questions[currentQuestion]) {
      setMixedResponses(
        [...questions[currentQuestion].incorrect_answers, questions[currentQuestion].correct_answer].sort(() => Math.random() - 0.5)
      );
    }
  }, [currentQuestion, questions]);
  

  return (
    <View style={[styles.container,loading && {justifyContent:'center'}]}>
      <StatusBar backgroundColor={"#F2F5FF"} barStyle={"dark-content"} />
      {loading && questions ? 
        (<ActivityIndicator size="large" color={colors.text} />)
        :
        (
        <>
          <Header
            currentQuestion={currentQuestion}
          />
          <Question 
            question={questions[currentQuestion].question} 
          />
          <Responses
            selectedQ={selectedQ}
            setSelectedQ={setSelectedQ}
            responses={mixedResponses}
          />
          <View style={styles.footer}>
          <TouchableOpacity onPress={handleNextQuestion} style={styles.nextQuestionBtn}>
          <Text
            style={{ color: colors.primary, fontWeight: "bold", fontSize: 14 }}
          >
            NEXT
          </Text>
          </TouchableOpacity>
          </View>
      </>
      )
      }
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  question: {
    paddingVertical: 70,
    width: Dimensions.get("screen").width - 40,
    alignItems: "center",
    justifyContent: "center",
  },
  responsesList: {
    marginTop: 40,
  },
  response: {
    width: Dimensions.get("screen").width - 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.text,
    marginVertical: 7,
    borderRadius: 6,
  },
  footer: {
    position: "absolute",
    bottom: 30,
  },
  nextQuestionBtn: {
    flex: 1,
    height: 50,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.text,
    width: Dimensions.get("screen").width - 40,
  },
});
