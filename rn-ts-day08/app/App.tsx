import React, { PureComponent } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


// class App extends PureComponent{

//   render(){
//     return(
//       <SafeAreaView>
//           <View>
//             <ScrollView 
//               horizontal={true}
//               // 滚动一整屏幕
//               pagingEnabled={true} 
//               //显示横向滚动条 showsVerticalScrollIndicator
//               showsHorizontalScrollIndicator={false}
//             >
//               <View style={styles.box}>
//                 <Text>1</Text>
//               </View>
//               <View style={[styles.box,styles.box2]}>
//                 <Text>2</Text>
//               </View>
//             </ScrollView>
//           </View>
//       </SafeAreaView>
//     )
//   }
// }

// class App extends PureComponent{

//   render(){
//     return(
//       <SafeAreaView>
//           <View>
//             <ScrollView 
//               horizontal={true}
//               // 滚动一整屏幕
//               pagingEnabled={true} 
//               //显示横向滚动条 showsVerticalScrollIndicator
//               showsHorizontalScrollIndicator={false}
//             >
//               <View style={styles.box}>
//                 <Image source={require("./assets/images/1.png")} style={styles.img}></Image>
//                 <Text style={styles.txt}>炒肉</Text>
//               </View>
//               <View style={styles.box}>
//                 <Image source={require("./assets/images/2.png")} style={styles.img}></Image>
//                 <Text style={styles.txt}>红烧肉</Text>
//               </View>
//               <View style={styles.box}>
//                 <Image source={require("./assets/images/3.png")} style={styles.img}></Image>
//                 <Text style={styles.txt}>糖醋排骨</Text>
//               </View>
//               <View style={styles.box}>
//                 <Image source={require("./assets/images/4.png")} style={styles.img}></Image>
//                 <Text style={styles.txt}>鱼</Text>
//               </View>
//             </ScrollView>
//           </View>
//       </SafeAreaView>
//     )
//   }
// }

const {width,scale} = Dimensions.get("window");
const wuli = width*scale/1170;

const styles = StyleSheet.create({
  box:{
    width:390*wuli,
    height:200*wuli,
    backgroundColor:"#ccc"
  },
  box2:{
    backgroundColor:"pink"
  },
  img:{
    width:"100%",
    height:"100%"
  },
  txt:{
    width:390*wuli,
    height:40*wuli,
    lineHeight:40*wuli,
    backgroundColor:"rgba(0,0,0,0.5)",
    position:"absolute",
    bottom:0,
    color:"white",
    fontWeight:"600",
    textAlign:"center",
  }
});
class App extends PureComponent{
  
  render(){
  
    return(
      <SafeAreaView>
          <View>
            <ScrollView 
              horizontal={true}
              // 滚动一整屏幕
              pagingEnabled={true} 
              //显示横向滚动条 showsVerticalScrollIndicator
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.box}>
                <Image source={require("./assets/images/1.png")} style={styles.img}></Image>
                <Text style={styles.txt}>炒肉</Text>
              </View>
              <View style={styles.box}>
                <Image source={require("./assets/images/2.png")} style={styles.img}></Image>
                <Text style={styles.txt}>红烧肉</Text>
              </View>
              <View style={styles.box}>
                <Image source={require("./assets/images/3.png")} style={styles.img}></Image>
                <Text style={styles.txt}>糖醋排骨</Text>
              </View>
              <View style={styles.box}>
                <Image source={require("./assets/images/4.png")} style={styles.img}></Image>
                <Text style={styles.txt}>鱼</Text>
              </View>
            </ScrollView>
          </View>
      </SafeAreaView>
    )
  }
}


export default App;
