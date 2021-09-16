import React, { memo, PropsWithChildren, useEffect, useState } from 'react';
import { Text, View, StyleSheet } from "react-native"


interface IProps{
    text:string;
    calcu:number;
}
const styles = StyleSheet.create({
    title:{
        color:"red",
    },
    container:{
        backgroundColor:"pink",
    }
})

const CustomComponent = (props?: PropsWithChildren<IProps>)=>{
    const {text,calcu} = props!;
    return (
        <View>
            <Text style={styles.title}>this is a custom component</Text>
            <Text style={styles.container}>{text}</Text>
            <Text>number:{calcu}</Text>
        </View>
    )
}


const withCustomComponent = (Component:(props?: PropsWithChildren<IProps>) =>JSX.Element)=>{
    return (props:PropsWithChildren<IProps>)=>{
        const [state,setState] = useState(props);
        useEffect(()=>{
            setState(():IProps=>({
                ...state,
                text:"why is not changed",
                calcu:state.calcu+2,
            }))
        },[])
        return(
            <Component {...state}/>
        )
    }
}


export default memo(withCustomComponent(CustomComponent));