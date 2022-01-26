import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,TextInput } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import * as Speech from 'expo-speech';

export default class App extends Component{
  speak = ()=> {
 var thingToSay = this.state.name;
 Speech.speak(thingToSay);

  }
  render(){
    
    return(

      <View style={{flex:1}}>
        <HomeScreen />
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
      <TouchableOpacity onPress={this.speak}>
       
      </TouchableOpacity>



      </View>
    )
  }
}
