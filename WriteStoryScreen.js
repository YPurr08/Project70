import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TextInput, Image } from 'react-native';


export default class Write extends React.Component {

  render() {
    return(
      <View>

        <View style= {styles.textContainer}>
          <Text style={styles.headerText}>
            STORY HUB
          </Text>
        </View>

        <TextInput style={styles.inputBox1} placeholder="Story Title"/>

        <TextInput style={styles.inputBox2} placeholder="Author Name"/>

        <TextInput style={styles.inputBox3} placeholder="Write Story Here"/>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.buttonText}> SUBMIT </Text>
        </TouchableOpacity>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  displayText:{
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  textContainer:{
    backgroundColor:'orange',
    height:80,
  },
  headerText:{
    fontSize:50,
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
  },
  submitButton: {
    backgroundColor: 'orange',
    padding: 10,
    margin: 10,
    width: 200,
    height: 50, 
    alignSelf:'center',
  },
  buttonText:{
    fontSize: 23,
    fontWeight: 'bold',
    color:'white',
    textAlign:'center',
  },
  inputBox1:{
    marginTop:50,
    alignSelf:'center',
    textAlign:'center',
    width:400,
    height:40,
    borderWidth:3,
    fontSize:20,
  },
  inputBox2:{
    marginTop:50,
    alignSelf:'center',
    textAlign:'center',
    width:400,
    height:40,
    borderWidth:3,
    fontSize:20,
  },
  inputBox3:{
    marginTop:50,
    alignSelf:'center',
    textAlign:'center',
    width:400,
    height:300,
    borderWidth:3,
    fontSize:20,
  },
}) 