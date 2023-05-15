import React, { useEffect } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View } from "react-native"
import { AMMAG_COLOR, BLACK, GRAY, WHITE } from "./colors";
import { COLOR_PRIMARY } from "../utils/colors";


const CustomButton = ({ text, onPress, isFilled, isFullWidth, otp }) => {
    const isDarkMode = useColorScheme() === 'dark';


    return (
        <View style={{ width: "100%", justifyContent: "center", flexDirection: "row" }}>

            <TouchableOpacity onPress={onPress} style={{
                width: isFullWidth ? "100%" : "80%", backgroundColor:
                    isFilled ? COLOR_PRIMARY : "white", borderRadius: 30,
                paddingVertical: 10, justifyContent: "center", display: "flex", flexDirection: "row", marginTop: 20
            }}>
                <Text style={[styles.buttonText, { color: isFilled ? "white" : COLOR_PRIMARY, }]}>
                    {text}
                </Text>

            </TouchableOpacity>


        </View>
    )
}




const styles = StyleSheet.create({
    buttonText: {
        textAlign: "center",
        fontFamily: 'Poppins-Medium',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 24,
    },
});


export default CustomButton