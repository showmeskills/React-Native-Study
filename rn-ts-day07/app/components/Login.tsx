import React,{ PropsWithChildren } from "react";
import {View, StyleSheet, Text, Dimensions, Image, TextInput , TouchableOpacity} from "react-native";


const {width,height,scale} = Dimensions.get("window");

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#eee",
    },
    wrap:{
        width:320,
        height,
        backgroundColor:"#ccc",
        alignItems:"center"
    },
    img:{
        width:60,
        height:60,
        borderRadius:30,
        borderWidth:1,
        borderColor:"#fff",
        marginTop:50,
        marginBottom:30,
    },
    txtIpt:{
        width:"90%",
        paddingRight:20,
        paddingLeft:20,
        height:40,
        backgroundColor:"white",
        marginBottom:10,
    },
    btn:{
        width:"90%",
        height:40,
        backgroundColor:"#74c3e1",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginTop:10,
    },
    btnTxt:{
        fontSize:18,
        color:"white",
        fontWeight:"500",
    },
    btnsContainer:{
        width:"90%",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:20,
    },
    bottomBox:{
        position:"absolute",
        bottom:100,
        width:"90%",
        alignItems:"center"
    },
    bottomLine:{
        height:1/scale,
        width:"100%",
        backgroundColor:"#000",
    },
    bottomTxt:{
        marginTop:-8,
        backgroundColor:"#ccc",
        width:90,
        textAlign:"center",
        fontSize:12,
    },
    bottomBtns:{
        width:"90%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
    },
    bottomImages:{
        width:50,
        height:50,
        borderRadius:30,
    },
    bottomImageSecond:{
        marginLeft:15,
        marginRight:15,
    }
})

const Login = ()=>{

    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                {/* ?????? */}
                <Image style={styles.img} source={require("../assets/images/udid.png")}/>
                {/* ????????? */}
                <TextInput 
                    style={styles.txtIpt}
                    placeholder="??????????????????"
                    placeholderTextColor="#ddd"
                    underlineColorAndroid="transparent"
                />
                {/* ?????? */}
                <TextInput 
                    style={styles.txtIpt}
                    placeholder="???????????????"
                    placeholderTextColor="#ddd"
                    underlineColorAndroid="transparent"
                    secureTextEntry={true}
                />
                {/* ???????????? */}
                <TouchableOpacity 
                    style={styles.btn}
                    activeOpacity={.7}
                >
                    <Text style={styles.btnTxt}>??? ???</Text>
                </TouchableOpacity>
                {/* ????????????&&??????????????? */}
                <View style={styles.btnsContainer}>
                    <TouchableOpacity activeOpacity={.7}>
                        <Text>????????????</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7}>
                        <Text>???????????????</Text>
                    </TouchableOpacity>
                </View>
                {/* ?????????????????? */}
                <View style={styles.bottomBox}>
                    <View style={styles.bottomLine}></View>
                    <Text style={styles.bottomTxt}>??????????????????</Text>
                    <View style={styles.bottomBtns}>
                        <TouchableOpacity activeOpacity={.7}>
                            <Image style={styles.bottomImages} source={require("../assets/images/udid.png")}/>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.7}>
                            <Image style={[styles.bottomImages,styles.bottomImageSecond]} source={require("../assets/images/udid.png")}/>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.7}>
                            <Image style={styles.bottomImages} source={require("../assets/images/udid.png")}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const withLogin = (Component:()=>JSX.Element)=>{

    return(props:PropsWithChildren<any>)=>{
        return(
            <Component {...props}/>
        )
    }
}

export default withLogin(Login)