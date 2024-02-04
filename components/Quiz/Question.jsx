import { StyleSheet, Text, View,Dimensions,ImageBackground } from "react-native";
import React from "react";
import colors from "../../style/colors";
import he from 'he';


const Question = ({ question }) => {
  return (
    <View
      style={styles.question}
    >
      <Text
        style={{
          color: colors.primary,
          fontWeight: "bold",
          fontSize: 18,
          textAlign: "center",
        }}
      >
        {he.decode(question)}
      </Text>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  question: {
    backgroundColor:colors.text,
    paddingVertical: 70,
    paddingHorizontal:10,
    width: Dimensions.get("screen").width - 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:10,
  },
});
