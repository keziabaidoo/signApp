import React, { Component } from 'react';
import {View ,Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native'


 class SignupScreen extends Component {
    render() {
        return (

            <View style={style.container}>
               <View style={style.signupTextContainer}>
                   <Text style={style.signupText}>Sign Up</Text>
               </View>

               <View>
                   <TextInput 
                    style={style.input} 
                   placeholderTextColor='gray'
                   placeholder='Username'/>

                   <TextInput  
                   style={style.input} 
                   placeholderTextColor='gray'
                   placeholder='Email'/>


<TextInput  
                   style={style.input} 
                   placeholderTextColor='gray'
                   placeholder='Password'/>

<TextInput  
                   style={style.input} 
                   placeholderTextColor='gray'
                   placeholder='Password again'/>
 
               </View>
               <View>
                   <TouchableOpacity style={style.buttonContainer}>
                       <Text style={style.buttonText}>Sign Up</Text>
                   </TouchableOpacity>
               </View>
               <View style={style.AccountContainer}> 
                   <Text style={style.AccountText}>You already have an account?</Text>
                   <Text style={style.loginText}>Log In</Text>

               </View>
            </View>
            
        )
    }
}


const style=StyleSheet.create({
 container:{
     marginHorizontal:50,
     
     
 } ,

 signupText:{
     fontSize:50,
     color:'purple'
 },
 signupTextContainer:{
     marginBottom:10,
     
 },
 input:{
  borderBottomWidth:2,
  fontSize:20,
  borderBottomColor:'purple',
  height:50,
  marginTop:20
 },

 buttonContainer:{
 height:50,
 backgroundColor:'purple',
 justifyContent:'center',
 alignItems:'center',
 borderRadius:10,
  marginVertical:50
 },
 buttonText:{
  fontSize:25,
  color:'white'
 },
 AccountContainer:{
  flexDirection:'row',
  justifyContent:'center',
 },

 AccountText:{
   marginRight:10,
   fontSize:16,
   
   
 },
 loginText:{
   fontSize:16,
   color:'#b38ed4',
   
 }

})

export default SignupScreen

