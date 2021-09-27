import React from 'react';
import { SafeAreaView,View } from 'react-native';
import {WebView} from "react-native-webview";

const WebDemo = ()=><WebView source={{uri:"https://www.dragonhub.com.au/"}}/>
const WebDemo1 = ()=><WebView
originWhitelist={['*']}
source={{ html: '<h1>This is a static HTML source!</h1>' }}
/>

const App = () => {

  return (
      <WebDemo1/>
  )
};
export default App;