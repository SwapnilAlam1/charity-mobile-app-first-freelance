import React, { useEffect } from "react"
import { Text, TextInput, useColorScheme, View } from "react-native"
import { BLACK, WHITE } from "./colors";


const CustomTextInput = ({ placeholder, onChangeText, title, value, errorMessage = "" }) => {
    const isDarkMode = useColorScheme() === 'dark';


    return (<View style={{}}>
        <Text style={{
            marginTop: 15,
            fontSize: 18, color: isDarkMode ? WHITE : BLACK, marginBottom: 4, fontWeight: 700,
        }}>{title}</Text>
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={{
                borderColor: isDarkMode ? "white" : "black", borderWidth: 2,
                width: "100%", borderRadius: 10, paddingLeft: 10, fontSize: 18, color: isDarkMode ? WHITE : BLACK
            }} />
            <Text style={{color:"red",fontWeight:600}}>{errorMessage}</Text>
    </View>
    )
}

export default CustomTextInput