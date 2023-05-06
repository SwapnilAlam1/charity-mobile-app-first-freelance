import React, { useEffect, useState } from "react"
import { Image, Text, useColorScheme, View } from "react-native"
import CustomButton from "../components/button";
import { GRAY, WHITE } from "../components/colors";
import CustomTextInput from "../components/input";
import ammagLogo from "../assets/images/ammagicon.png"
import Loader from "../components/loader";
import axios from "axios";
import { API_BASE_URL, EMAIL_VALIDATION_REGEX, ROUTES_NAMES, STRONG_PASSWORD_VALIDATION_REGEX } from "../utils/constants";
import { Toast } from "react-native-toast-message/lib/src/Toast";


const SignUp = (props) => {
    const isDarkMode = useColorScheme() === 'dark';
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

    }, [])

    const signUp = () => {

        if (!EMAIL_VALIDATION_REGEX.test(email)) {
            setEmailError("* Please enter valid email")
            return

        }
        else setEmailError("")

        if (!STRONG_PASSWORD_VALIDATION_REGEX.test(password)) {
            setPasswordError("* Please provide strong password")
            return
        }
        else setPasswordError("")


        setIsLoading(true)        
        axios.post(API_BASE_URL + "/authentication/signup", { email, password }).then(resp => {
            console.log("this is response  ::  ", resp.data);
            setIsLoading(false)
            props.navigation.navigate(ROUTES_NAMES.verifyEmail,{email})
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: "Please enter OTP you got in your email",
                visibilityTime:10000
            });

        }).catch(err => {
            setIsLoading(false)
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: err.response.data.message,
                // visibilityTime:30000
            });

            console.log("this is response err ::  ", err.response.data);


        })
    }


    return (<>
        <View style={{ flex: 1,  backgroundColor: isDarkMode ? GRAY : WHITE }}>

            {/* <View style={{  width: "100%", flexDirection: "row", justifyContent: "center",marginTop:20 }}>
                <Image source={ammagLogo} style={{width:200,height:200}}/>
            </View> */}

            <View style={{ paddingHorizontal: 20}}>
                {/* <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", marginVertical: 20 }}>Sign Up</Text> */}
                < CustomTextInput
                 placeholder="e.g hafiz.usman@ammag.tech"
                    value={email}
                    title="Enter Email"
                    onChangeText={(value: any) => { setEmail(value) }}
                    errorMessage={emailError}
                    />

                < CustomTextInput
                    value={password}
                    placeholder="Ab@123456"
                    title="Enter Password"
                    onChangeText={(value: any) => { setPassword(value) }}
                    errorMessage={passwordError}
                    
                    />

                <CustomButton text="Sign Up" onPress={signUp} />
            </View>

        </View>
        {
            isLoading && <Loader />
        }

    </>
    )
}

export default SignUp