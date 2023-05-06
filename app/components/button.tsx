import React, { useEffect } from "react"
import { Text, TextInput, TouchableOpacity, useColorScheme, View } from "react-native"
import { AMMAG_COLOR, BLACK, GRAY, WHITE } from "./colors";
import { COLOR_PRIMARY } from "../utils/colors";


const CustomButton = ({ text, onPress, isFilled, isFullWidth }) => {
    const isDarkMode = useColorScheme() === 'dark';


    return (
        <View style={{width:"100%",justifyContent:"center",flexDirection:"row"}}>

            <TouchableOpacity onPress={onPress} style={{
                width: isFullWidth ? "100%" : "80%", backgroundColor: isFilled ? COLOR_PRIMARY : "white", borderRadius: 30,
                paddingVertical: 15, justifyContent: "center", display: "flex", flexDirection: "row", marginTop: 20
            }}>
                <Text style={{ color: isFilled ? "white" : COLOR_PRIMARY, fontWeight: 700, fontSize: 18 }}>
                    {text}
                </Text>

            </TouchableOpacity>


        </View>
    )
}

export default CustomButton