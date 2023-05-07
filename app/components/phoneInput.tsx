import React, { useEffect, useState } from "react"
import { Text, TextInput, TouchableOpacity, useColorScheme, View, Image } from "react-native"
import { CountryPicker } from "react-native-country-codes-picker";
import Downarrow from "../assets/images/downarr.png"

const PhoneInput = () => {
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('')

    return (
        <>
            <CountryPicker
                show={show}
                pickerButtonOnPress={(item) => {
                    setCountryCode(item.dial_code);
                    setShow(false);
                }}
                style={{ color: "black" }}
            />

            <View style={{
                width: '100%',
                height: 50,
                padding: 10,
                borderColor: "#A9A9A9",
                borderWidth: 1,
                borderRadius: 13, paddingLeft: 10, fontSize: 15,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center"
            }}>
                <TouchableOpacity
                    onPress={() => setShow(true)}
                    style={{

                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start"
                    }}
                >
                    <Text style={{
                        color: '#A9A9A9',
                        fontSize: 20,
                        textAlign: "center"
                    }}>
                        {countryCode ? countryCode : "+92"}
                    </Text>
                    <Image source={Downarrow} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
                <TextInput
                    placeholder="Enter Your Mobile Number"
                    style={{
                        textAlign: "left",
                        color: "#A9A9A9",
                        height: 60
                    }}
                    placeholderTextColor="#A9A9A9"
                />
            </View>

        </>

    )
}

export default PhoneInput