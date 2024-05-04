import { View, Text, StyleSheet,Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import loginBg from './image/loginBg.png'
import { client } from '../../utlis/Kindeconfig'
import Colors from '../../utlis/Colors'
import services from '../../utlis/services'
import { useRouter } from 'expo-router'
    


export default function LoginScreen() {
  const router=useRouter();
 
  const handleSignIn = async () => {
    const token = await client.login();
    if (token) {
      await services.storeData('login', 'true');
      router.replace('/')
      // User was authenticated
    }
  };




  
  return (
    <View Style={{
        display:'flex',
        alignItems:'center'

    }}>

      <Image source={loginBg}
      style={styles.bgImage}
      
      />
      <View style={{
        backgroundColor:Colors.PRIMARY,
        width:'100%',
        height:'100%',
        padding:20,
        marginTop:-30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
      }}>
        <Text
        style={{
            fontSize:25,
            fontWeight:'blod',
            textAlign:'center',
            color:Colors.WHITE,
        }}>personal expense tracker</Text>
        <Text style={{
          fontSize:10,
          textAlign:'center',
          color:Colors.WHITE,
          marginTop:20,


        }}> 
            STAY ON TRACK EVENT BY EVENT:YOUR PERSONAL EXPENSE TRACKER APP!
        </Text>
        <TouchableOpacity style={styles.button}
        onPress={handleSignIn}>
          <Text style={{
            textAlign:'center',
            color:Colors.PRIMARY,
          }}> 
            Login/Signup
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize:13,
        color:Colors.GRAY,
        marginTop:10,

        }}>* By login/signup you will agree to our trems and conditions</Text>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  bgImage:{
    width:200,
    height:400,
    marginTop:70,
    broderWidth:5,
    broderRadius:20,
    borderColor:Colors.BLACK,
  },
  button:{
    backgroundColor:Colors.WHITE,
    padding:15,
    paddingHorizontal:5,
    broderRadius:99,
    marginTop:30

  }

})