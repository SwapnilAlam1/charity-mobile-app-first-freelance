import React, { useEffect, useState } from "react"
import { Image, Text, useColorScheme, View } from "react-native"
import CustomButton from "../components/button";
import { GRAY, WHITE } from "../components/colors";
import CustomTextInput from "../components/input";
import ammagLogo from "../assets/images/ammagicon.png"
import Loader from "../components/loader";
import axios from "axios";
import { API_BASE_URL, EMAIL_OTP_CODE_VALIDATION_REGEX, ISHR, JWT_TOKEN, ROUTES_NAMES } from "../utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "react-native-toast-message/lib/src/Toast";



const VerifyEmail = ({ navigation, route }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const [securityCode, setSecurityCode] = useState("")
    const [securityCodeError, setSecurityCodeError] = useState("")

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

    }, [])

    const verifyEmail = () => {
        if (!EMAIL_OTP_CODE_VALIDATION_REGEX.test(securityCode)) {
            setSecurityCodeError("Please enter 4 digit number")
            return
        }
        else setSecurityCodeError("")
        setIsLoading(true)
        console.log("this is code   :;  ", securityCode);


        axios.post(API_BASE_URL + "/authentication/verify-email", { email: route.params.email, emailVerifyCode: securityCode }).then(resp => {
            setIsLoading(false)
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: "Signed up successfully",
            });
            AsyncStorage.setItem(JWT_TOKEN, resp.data.data.token).then(resp1 => {
                if (resp.data.data.isHr) {
                    AsyncStorage.setItem(ISHR, "true").then(resp => {
                        navigation.replace(ROUTES_NAMES.hrDashboard)
                    })
                }
                else {
                    navigation.replace(ROUTES_NAMES.dashboard)
                }

            })

        }).catch(err => {
            setIsLoading(false)
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: err.response.data.message,
            });
            console.log("this is response  ::  ", err.response);


        })
    }


    return (<>
        <View style={{ flex: 1, backgroundColor: isDarkMode ? GRAY : WHITE }}>

            {/* <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
                <Image source={ammagLogo} style={{ width: 200, height: 200 }} />
            </View> */}

            <View style={{ paddingHorizontal: 20 }}>
                {/* <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", marginVertical: 20 }}>Email Verification</Text> */}
                < CustomTextInput
                    placeholder="e.g 1234"
                    value={securityCode}
                    title="Enter 4 Digit OTP"
                    onChangeText={(value: any) => { setSecurityCode(value) }}
                    errorMessage={securityCodeError}

                />

                <CustomButton text="Verify" onPress={verifyEmail} />
            </View>

        </View>
        {
            isLoading && <Loader />
        }

    </>
    )
}

export default VerifyEmail