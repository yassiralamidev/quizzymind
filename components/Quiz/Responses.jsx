import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../style/colors'
import he from 'he';


const Responses = ({responses,setSelectedQ,selectedQ}) => {
  return (
    <View style={styles.responsesList}>
      {responses && responses.map((response,key)=>{
        return <TouchableOpacity 
            onPress={()=>setSelectedQ(response)}
            key={key} 
            style={[styles.response,selectedQ === response && styles.selectedResponse]}
          >
          <Text 
            style={selectedQ === response ? styles.selectedText : styles.text}>
              {he.decode(response)}
            </Text>
        </TouchableOpacity>
      })}
    </View>
  )
}

export default Responses

const styles = StyleSheet.create({
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
  selectedResponse: {
    backgroundColor:colors.text,
  },
  text:{
    color:colors.text,
    fontWeight:'600',
  },
  selectedText:{
    color:colors.primary,
    fontWeight:'600',
  }
})