import React, { Component } from 'react';
import { StyleSheet, Text, View ,TextInput,Button,TouchableOpacity,ScrollView,FlatList} from 'react-native';
import SignupScreen from './SignupScreen';


 class App extends Component {
   constructor(props){
     super(props)
     this.state={
       email:'',
       password:'',
       names:["Amos","Patrick","Mina","Ethel","Richmond","Freeman","Enos", "Amos","Patrick","Mina","Ethel","Richmond","Freeman","Enos", "Amos","Patrick","Mina","Ethel","Richmond","Freeman","Enos", "Amos","Patrick","Mina","Ethel","Richmond","Freeman","Enos", "Amos","Patrick","Mina","Ethel","Richmond","Freeman","Enos"]
     }
   }

   
   render(){
     return (
          <View style={styles.container}>
          <SignupScreen/>
              
   </View>
     ) 
   }
  };
    
      
      

const styles = StyleSheet.create({
  container: {
   marginTop:100
  },

  input:{
    backgroundColor:'blue',
    height:60,
    marginLeft:15,
    marginBottom:5
  }
});
 export default App
