import React, { PropsWithChildren } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 100,
        backgroundColor: "yellow",
        marginBottom:20,
    }
})

const CustomComponent2 = () => {
    return (
        <>
            <View style={styles.container}>
                <ScrollView>
                    {
                        new Array(10).fill(0).map((i,j) => {
                            return (
                                <Text key={j}>this is scrollview component test</Text>
                            )
                        })
                    }
                </ScrollView>
            </View>
            <View style={styles.container}>
                <ScrollView horizontal>
                    {
                        new Array(10).fill(0).map((i,j) => {
                            return (
                                <Text key={j}>this is scrollview component test</Text>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </>
    )
}

const widthCustomComponent2 = (Component: () => JSX.Element) => {
    return (props: PropsWithChildren<any>) => {
        return (
            <Component {...props} />
        )
    }
}

export default widthCustomComponent2(CustomComponent2);