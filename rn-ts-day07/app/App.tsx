
import React from "react";
import {SafeAreaView,Text} from "react-native";

import Login from "./components/Login";
class App extends React.PureComponent{


  render(){
    return(
      <SafeAreaView>
        <Login/>
      </SafeAreaView>
    )
  }
}

export default App;
