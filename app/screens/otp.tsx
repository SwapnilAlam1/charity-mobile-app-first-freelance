import React, { useState, useRef } from 'react';
import { View, Image, Text, StyleSheet, TextInput } from "react-native"
import { COLOR_PRIMARY } from "../utils/colors"
import logo from "../assets/images/OtpLogo.png"
import CustomButton from '../components/button';

const OtpScreen = () => {

    const [otp, setOtp] = useState('');
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16,
        },
        input: {
            borderBottomWidth: 1,
            borderColor: 'gray',

            paddingHorizontal: 22,
            paddingVertical: 8,
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            marginHorizontal: 4,
        },
    });

    const handleKeyPress = (key, index) => {
        if (key === 'Backspace' && index > 0) {
            switch (index) {
                case 1:
                    inputRef1.current.focus();
                    break;
                case 2:
                    inputRef2.current.focus();
                    break;
                case 3:
                    inputRef3.current.focus();
                    break;
                case 4:
                    inputRef4.current.focus();
                    break;
                default:
                    break;
            }
        }
    };

    const handleChange = (value, index) => {
        setOtp((prev) => {
            const arr = prev.split('');
            arr[index] = value;
            return arr.join('');
        });

        switch (index) {
            case 0:
                inputRef2.current.focus();
                break;
            case 1:
                inputRef3.current.focus();
                break;
            case 2:
                inputRef4.current.focus();
                break;
            case 3:
                inputRef4.current.blur();
                break;
            default:
                break;
        }
    };




    return (
        <View style={{ backgroundColor: COLOR_PRIMARY, height: "100%", padding: "10%" }}>

            <View style={{ flexDirection: "row", alignItems: "center", marginTop: "8%" }}>
                <Image source={logo} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, color: "white", textAlign: "center" }}>TREE</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>HUGGERS</Text>
                </View>
            </View>
            <View style={{ marginTop: "20%" }}>
                <Text style={{ color: "white", fontSize: 20 }}>
                    Enter OTP Code Here
                </Text>
                <Text style={{ color: "white", marginTop: "5%" }}>
                    We will send you a one-time passcode to
                </Text>
                <Text style={{ color: "white" }}>
                    mobile number/E-mail
                </Text>
            </View>
            <View style={{ marginTop: "15%" }}>
                <Text style={{ color: "white" }}>
                    Verification code:
                </Text>
            </View>

            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    maxLength={1}
                    keyboardType="numeric"
                    value={otp[0]}
                    onChangeText={(value) => handleChange(value, 0)}
                    onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, 0)}
                    ref={inputRef1}
                />
                <TextInput
                    style={styles.input}
                    maxLength={1}
                    keyboardType="numeric"
                    value={otp[1]}
                    onChangeText={(value) => handleChange(value, 1)}
                    onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, 1)}
                    ref={inputRef2}
                />
                <TextInput
                    style={styles.input}
                    maxLength={1}
                    keyboardType="numeric"
                    value={otp[2]}
                    onChangeText={(value) => handleChange(value, 2)}
                    onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, 2)}
                    ref={inputRef3}
                />
                <TextInput
                    style={styles.input}
                    maxLength={1}
                    keyboardType="numeric"
                    value={otp[3]}
                    onChangeText={(value) => handleChange(value, 3)}
                    onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, 3)}
                    ref={inputRef4}
                />
            </View>
            <View style={{ marginTop: "10%" }}>
                <Text style={{ color: "white", textAlign: "center" }}>
                    Don't get the code?
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                        {" "}Resend.
                    </Text>
                </Text>
            </View>
            <View style={{ marginTop: "40%" }}>
                <CustomButton isFilled={false} isFullWidth={true} otp={true} text="Next" onPress={() => {
                }} />
            </View>


        </View>
    )
}
export default OtpScreen