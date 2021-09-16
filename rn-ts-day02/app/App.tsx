import React, { memo, useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Platform, Button } from 'react-native';
import CustomComponent from "./components/CustomComponent";
import CustomComponent2 from "./components/CustomComponent2";
interface IApp {
  isIOS: boolean;
  isAndroid: boolean;
  text: string;
  calcu: number;
}

const styles = StyleSheet.create({
  container:{
      marginTop:30,
      marginLeft:2
  },
})


class App extends React.PureComponent {
  state: IApp = {
    isIOS: false,
    isAndroid: false,
    text: "",
    calcu: 0,
  }
  componentDidMount() {
    Platform.OS === "android"
      ?
      this.setState((): IApp => ({
        ...this.state,
        isIOS: false,
        isAndroid: true,
      }))
      :
      this.setState((): IApp => ({
        ...this.state,
        isIOS: true,
        isAndroid: false,
      }))

    setTimeout(() => {
      this.setState((): IApp => ({
        ...this.state,
        text: "this is a props text value from app"
      }))
    }, 200)
  }
  handleClick=()=>{
      this.setState((): IApp => ({
        ...this.state,
        calcu: this.state.calcu + 1,
      }))
  }
  render() {
    return (
      <View>
        {
          this.state.isIOS
          &&
          <View style={styles.container}>
            <Text>this is ios view</Text>
          </View>
        }
        {
          this.state.isAndroid
          &&
          <Text>this is android view</Text>
        }
        <CustomComponent text={this.state.text} calcu={this.state.calcu} />
        <Button title="simaple button" onPress={this.handleClick}></Button>
        <CustomComponent2/>
      </View>
    )
  }
}

export default App;
