
import React, { PropsWithChildren, useState } from 'react';
import axios from "axios";
import { ScrollView, Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import img from "./img/udid.png";
const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderColor: "blue",
    width: 200,
    margin: "auto",
  },
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  btnContainer: {
    width: 100,
    height: 30,
    borderRadius: 3,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  img: {
    width: 300,
    height: 300
  }
})

interface Props {
  title: string
  handlePress(flag: number): void
}

const Btn = (props: PropsWithChildren<Props>) => {
  const { title, handlePress } = props;
  const btnHandlePress = () => {
    if (title === "increment") {
      handlePress(0)
    } else {
      handlePress(1)
    }
  }
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={btnHandlePress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}


const Img = () => {
  return (
    <View>
      <Text>方式一:本地</Text>
      <Image source={img} />
      <Text>方法二:require</Text>
      <Image source={require("./img/udid.png")} />
      <Text>方式三:链入线上的图片(必须给宽高)</Text>
      <Image style={styles.img} source={{ uri: "https://www.baidu.com/img/pc_1c6e30772d5e4103103bd460913332f9.png" }}></Image>
      <Image
        style={styles.img}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
    </View>
  )
}

const WebViewDemo = () => {

  return (
    <View>
      <WebView></WebView>
    </View>
  )
}

const App = () => {
  const [auto, setAuto] = useState(false);
  const [time, setTime] = useState(2);
  const [info, setInfo] = useState(false);
  const [count, setCount] = useState(0);
  const request = async (sms: number) => {
    const result = await axios({
      url: "http://localhost:8080/api/sms",
      method: "POST",
      data: {
        sms
      }
    })
    if (result.data === "ok") setInfo(true)
  }
  const handleClick = (sms: number) => {
    let timer: any;
    setAuto(true)
    setTimeout(() => {
      setAuto(false);
      clearInterval(timer);
      setTime(2);
      request(sms);
      return;
    }, 3000)
    timer = setInterval(() => {
      setTime((preState) => preState - 1)
    }, 1000)
  }
  const handlePress = (flag: number) => {
    if (flag === 0) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>This is app</Text>
        <Text>{String(auto)}</Text>
        <View style={styles.btn}>
          <Button title={`${!auto === true ? "sms" : time + "s"}`} onPress={() => handleClick(123)} color="pink" disabled={auto}></Button>
        </View>

        <View style={styles.container}>
          <Text>{count}</Text>
          <Btn title="increment" handlePress={() => handlePress(0)} />
          <Btn title="decrement" handlePress={() => handlePress(1)} />
        </View>
        <View>
          <Img />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default App;
