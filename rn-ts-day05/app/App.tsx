import React from 'react';
import { SafeAreaView,Text,View,Image, StyleSheet, ScrollView, FlatList } from 'react-native';
import {WebView} from "react-native-webview";
import a from "./assets/img/1.png";
import b from "./assets/img/2.png";
const WebDemo = ()=><WebView source={{uri:"https://www.dragonhub.com.au/"}}/>
const WebDemo1 = ()=><WebView
originWhitelist={['*']}
source={{ html: '<h1>This is a static HTML source!</h1>' }}
/>

const styles = StyleSheet.create({
  img:{
    width:200,
    height:100
  }
})
interface IData{
  id:number;
  username:string;
}



const List = ()=>{
  const data = [
    {
      id:0,
      username:"1"
    },
    {
      id:1,
      username:"2"
    },
    {
      id:2,
      username:"3"
    },
    {
      id:3,
      username:"4"
    }
  ]
  const renderList = ({item}:any)=>{//必须结构item
    return(
      <View>
        <Text>{item.id}::{item.username}</Text>
      </View>
    )
  }
  return (
      <FlatList 
        numColumns = {1} //每行显示个数
        data={data} //数据源
        renderItem = {renderList} //渲染函数
      />
  )
}


const App = () => {

  return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>另外一种引入方式 ios</Text>
            <Image style={styles.img} source={a}/>
            <Image style={styles.img} source={b}/>
          </View>  
        </ScrollView>
        <List/>
      </SafeAreaView>
  )
};
export default App;