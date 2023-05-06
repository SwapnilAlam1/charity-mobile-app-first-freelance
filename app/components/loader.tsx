import React, { useEffect, useState } from "react"
import { Animated, Image, Text, TextInput, useColorScheme, View } from "react-native"
import { BLACK, WHITE } from "./colors";
import ammagLogo from "../assets/images/ammag-icon-witout-text.png"


const Loader = ({ }) => {
    const [rotateAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true,
            })
        ).start();
    }, []);


    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });


    const isDarkMode = useColorScheme() === 'dark';
    return (<View style={{
        position: "absolute", flex: 1, backgroundColor: "#000000CC",
        width: "100%", height: "100%", justifyContent: "center", alignItems: "center"
    }}

    >
        <Text style={{color:"white",fontSize:16}}>Loading...</Text>

        {/* <Animated.Image
            style={{ transform: [{ rotate: spin }] }}
            source={ammagLogo}
        /> */}

    </View>
    )
}

export default Loader