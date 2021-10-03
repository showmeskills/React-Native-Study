import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    flexWrap:"wrap"
  },
  inputContainer:{
    borderWidth:2,
    borderColor:"pink",
    width:"70%",
    height:40,
    fontSize:18,
  },
  showBtn:{
    width:"30%",
    height:40,
    borderWidth:2,
    borderColor:"#ccc",
    alignItems:"center",
    justifyContent:"center",
  }
});

const Input = ()=>{
  const [isShow,setIsShow] = useState(true);
  const handleShow = ()=>{
    setIsShow(!isShow);
  }
  return (
    <View style={styles.container}>
      <TextInput 
          style={styles.inputContainer} 
          placeholder="please enter your points...."
          placeholderTextColor="#ccc"
          maxLength = {6}
          underlineColorAndroid="transparent"//下划线只有android 才会有的
          secureTextEntry={isShow} //ios and android input type to set password
      />
      <TouchableOpacity style={styles.showBtn} onPress={handleShow}>
        <Text>show</Text>
      </TouchableOpacity>
    </View>
  )
}

const App = () => {

  return (
    <SafeAreaView>
      <View>
        <Text>this is terry app</Text>
      </View>
      <Input/>
    </SafeAreaView>
  );
};


export default App;
