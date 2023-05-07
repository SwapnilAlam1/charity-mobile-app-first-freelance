import React, { useEffect } from "react"
import { Text, TextInput, useColorScheme, View } from "react-native"
import { BLACK, WHITE } from "./colors";


const CustomTextInput = ({ placeholder, onChangeText, title, value, errorMessage = "",leftAlign }) => {
    const isDarkMode = useColorScheme() === 'dark';


    return (<View style={{}}>
        {/* <Text style={{
            marginTop: 15,
            fontSize: 18,
            // color: isDarkMode ? WHITE : BLACK,
            color:"black",
            marginBottom: 4, fontWeight: 700,
        }}>{title}</Text> */}
        <TextInput
        placeholderTextColor="#A9A9A9"
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={{
                // borderColor: isDarkMode ? "white" : "black",
                borderColor:"#A9A9A9",
                
                borderWidth: 1,
                width: "100%", borderRadius: 13, paddingLeft: 10, fontSize: 15,
                textAlign:`${leftAlign?"left":"center"}`,
                color:"#A9A9A9"
                // color: isDarkMode ? WHITE : BLACK
            }} />
            <Text style={{color:"red",fontWeight:600}}>{errorMessage}</Text>
    </View>
    )
}

export default CustomTextInput