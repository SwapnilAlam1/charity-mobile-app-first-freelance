import React, { useEffect } from "react"
import { Text, TextInput, TouchableOpacity, useColorScheme, View, Image } from "react-native"
import { AMMAG_COLOR, BLACK, GRAY, WHITE } from "./colors";
import { COLOR_PRIMARY } from "../utils/colors";


const MyCustomButton = ({ text, imagesource }) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <TouchableOpacity
            style={{
                borderColor: "#A9A9A9",
                borderWidth: 1,
                width: "100%",
                borderRadius: 13,
                paddingLeft: 10,
                height:50,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
            }}
        >

            <Image source={imagesource} style={{height:25,width:25}} />

            <Text style={{ color: "#A9A9A9",paddingLeft:"2%" }}>
                {text}
            </Text>


        </TouchableOpacity>
    )
}

export default MyCustomButton