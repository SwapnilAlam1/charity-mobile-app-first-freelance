import React, { useEffect, useState } from "react"
import { Image, Text, TouchableOpacity, useColorScheme, View } from "react-native"
import CustomButton from "../components/button";
import { GRAY, WHITE } from "../components/colors";
import CustomTextInput from "../components/input";
import ammagLogo from "../assets/images/ammagicon.png"
import Loader from "../components/loader";
import axios from "axios";
import { API_BASE_URL, EMAIL_VALIDATION_REGEX, ISHR, JWT_TOKEN, ROUTES_NAMES, STRONG_PASSWORD_VALIDATION_REGEX, USER_EMAIL } from "../utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "react-native-toast-message/lib/src/Toast";


const Login = (props) => {
    const isDarkMode = useColorScheme() === 'dark';
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        AsyncStorage.getItem(JWT_TOKEN).then(resp => {
            console.log("this is token  ::  ", resp);
            if (resp) {


                AsyncStorage.getItem(ISHR).then(resp => {
                    if (resp == "true") {
                        props.navigation.replace(ROUTES_NAMES.hrDashboard)
                    }
                    else {
                        props.navigation.replace(ROUTES_NAMES.dashboard)
                    }

                })
            }
        }).catch(err => {
            console.log("this is token err ::  ", err);
        })

    }, [])



    const login = () => {


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
        axios.post(API_BASE_URL + "/authentication/signin", { email, password }).then((resp) => {
            console.log("this is response  ::  ", resp.data);
            setIsLoading(false)
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: "Logged in Successfully"
            });
            AsyncStorage.setItem(JWT_TOKEN, resp.data.data.token).then(async (resp1) => {
                await AsyncStorage.setItem(USER_EMAIL, email)
                if (resp.data.data.isHr) {
                    AsyncStorage.setItem(ISHR, "true").then(resp => {
                        props.navigation.replace(ROUTES_NAMES.hrDashboard)
                    })
                }
                else {
                    props.navigation.replace(ROUTES_NAMES.dashboard)
                }
            })
        }).catch(err => {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: err.response.data.message
            });

            setIsLoading(false)
            console.log("this is response error ::  ", err.response.data);
        })
    }

    return (<>
        <View style={{ flex: 1, backgroundColor: isDarkMode ? GRAY : WHITE }}>
            {/* <View style={{  width: "100%", flexDirection: "row", justifyContent: "center",marginTop:20 }}>
                <Image source={ammagLogo} style={{width:200,height:200}}/>
            </View> */}

            <View style={{ paddingHorizontal: 15 }}>
                {/* <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", marginBottom: 20 }}>Sign In</Text> */}

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

                {/* <Text style={{ color: "red",textAlign:"center",fontWeight:"bold" }}> agjscdvfgasvdcj</Text> */}


                <CustomButton text="Log In" onPress={login} />

                <TouchableOpacity onPress={() => { props.navigation.navigate(ROUTES_NAMES.signup) }}>
                    <Text style={{ fontWeight: "700", fontSize: 16, textAlign: "right", marginTop: 10 }}>Dont have account? Sign Up</Text>
                </TouchableOpacity>
            </View>

        </View>
        {
            isLoading && <Loader />
        }

    </>
    )
}

export default Login