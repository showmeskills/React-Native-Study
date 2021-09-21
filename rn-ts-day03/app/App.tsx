import React, { useEffect, useState } from "react";
import { Text, View, Platform, StyleSheet, Dimensions, ScrollView } from "react-native";

const styles =(props?:any)=>StyleSheet.create({
  IOSContainer:{
    marginTop:30,
    marginLeft:0,
    fontSize:25,
    width:"100%", 
    height:"100%",
    paddingBottom:30,
  },
  flexLayout:{
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    alignContent:"space-around",
    alignItems:"flex-start",
  },
  flexContent:{
    width:"50%",
    height:100,
    textAlign:"center",
    fontSize:16,
    color:"black",
    lineHeight:100,
    borderWidth:1,
    borderColor:"red",
  },
  AndroidContainer:{
    fontSize:30,
    backgroundColor:"pink",
  },
  container:{
    flexDirection:"row",
    flexWrap:"wrap",
    alignContent:"center",
    justifyContent:"space-evenly"
  },
  box1:{
    width:100,
    height:100,
    backgroundColor:"#ccc",
    flex:1,
  },
  box2:{
    width:100,
    height:100,
    backgroundColor:"#fcf",
    flex:2,
  },
  box3:{
    width:100,
    height:100,
    backgroundColor:"#ffc",
    flex:3,
  },
  demoTitle:{
    height:100,
  },
  title:{
    textAlign:"center",
    lineHeight:100,
    fontSize:25,
    fontWeight:"500",
  },
  demoContainer:{
    flexDirection:"row",
    height:100,
    paddingLeft:10,
    paddingRight:10,
  },
  demobox:{
    flex:props,
    backgroundColor:"red",
    borderColor:"black",
    borderWidth:2,
  }
})
const {width,height,scale} = Dimensions.get("window");

const IOSView = ()=>{
  
  return (
    <ScrollView style={styles().IOSContainer}>
      <Text>this is ios app</Text>
      <Text>屏幕的宽度是:{width}</Text>
      <Text>屏幕的高度是:{height}</Text>
      <Text>屏幕的像素比:{scale}</Text>
      <View style={styles().flexLayout}>
        {
          new Array(10).fill(0).map((i,j)=>{
            return(
              <Text style={styles().flexContent} key={j}>
                this is a random content{j}
              </Text>
            )
          })
        }
      </View>

       <View style={styles().container}>
         <View style={styles().box1}>
           <Text>1</Text>
         </View>
         <View style={styles().box2}>
           <Text>2</Text>
         </View>
         <View style={styles().box3}>
           <Text>3</Text>
         </View>
      </View> 
        

        <View>
          <View style={styles().demoTitle}>
            <Text style={styles().title}>Flex Layout</Text>
          </View>
          {
            new Array(3).fill(0).map((i,j)=>{
              return (
                <View style={styles().demoContainer} key={j}>
                  {
                    new Array(3).fill(0).map((i,j)=>{
                      return (
                        <Text style={styles(j+1).demobox} key={j}>
                          {j+1}
                        </Text>
                      )
                    })
                  }
                </View>
              )
            })
          }
        </View>
    </ScrollView>
  )
}

const AndroidView = ()=>{
  return (
    <View style={styles().AndroidContainer}>
      <Text>this is android app</Text>
      <Text>屏幕的宽度是:{width}</Text>
      <Text>屏幕的高度是:{height}</Text>
      <Text>屏幕的像素比:{scale}</Text>
    </View>
  )
}

const App = ()=>{
  const [platForm,setPlatForm] = useState({
    isAndroid:false,
    isIOS:false,
  })
  useEffect(()=>{
    Platform.OS === "android"
    ?
    setPlatForm({
      ...platForm,
      isAndroid:true,
      isIOS:false,
    })
    :
    setPlatForm({
      ...platForm,
      isAndroid:false,
      isIOS:true,
    })
  },[])
  return (
    <>
      {
        platForm.isIOS&&<IOSView/>
      }
      {
        platForm.isAndroid&&<AndroidView/>
      }
    </>
  )
}
export default App;
