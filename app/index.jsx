
import { View, Text , StyleSheet , Button} from 'react-native'
import React, { useEffect } from 'react'
import { Link, useRouter } from 'expo-router'
import services from '../utlis/services'

export default function Home() {

 const router=useRouter();
  useEffect(()=>{
    checkUserAuth();
  },[])
  const checkUserAuth=async()=>{
    const result= await services.getData('login');
   if(result!=='true'){
    router.replace('/login')

   }
  }
  return (

    <View style={{
      marginTop:20
    }}>
      <Text style={style.Text}>Home</Text>
    </View>
  )
}
const style=StyleSheet.create({
  text:{
    fontSize:20
  }
})