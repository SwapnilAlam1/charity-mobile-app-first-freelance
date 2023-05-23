import React, { useContext, useEffect, useState } from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import CustomButton from "../components/button";
import { ROUTES_NAMES } from "../utils/constants";
import PhoneInput from "../components/phoneInput";
import Google from "../assets/images/Google.png";
import Facebook from "../assets/images/facebook.png";
import Twitter from "../assets/images/twitter.png";


import MyCustomButton from "../components/CustomButton";
import CustomTextInput from "../components/input";
import AppContext from "../context/AppContext";
import { Toast } from "react-native-toast-message/lib/src/Toast";


const Login = (props) => {
    const [email, setEmail] = useState(null)
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState(null)

    const context =useContext(AppContext);
    const {setuserinfo,userinfo}=context


    
    useEffect(()=>{
        console.log(userinfo,"login");
        

    },[userinfo])

    const signin=()=>{
        if(userinfo.length>0){


        for (let i = 0; i < userinfo.length; i++) {
            if(userinfo[i].Email==email && userinfo[i].Password==password){
                props.navigation.navigate(ROUTES_NAMES.home);
                Toast.show({
                    type: 'success',
                    text1: 'Success',
                    text2: "Login successfully",
                });


            }else{
                Toast.show({
                    type: 'error',
                    text1: 'error',
                    text2: "wrong email or password",
                });

            }
            
        }
    }else{
        Toast.show({
            type: 'error',
            text1: 'error',
            text2: "wrong email or password",
        });

    }

    }


    return (<>
        <ScrollView style={{
            flex: 1,
            backgroundColor: "white"

        }}>
            <View style={{ paddingHorizontal: "5%", display: "flex", marginTop: "3%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate(ROUTES_NAMES.signup)
                }} style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "50%" }}>
                    <Text style={{ color: "black", fontSize: 20 }}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "#4E148C", paddingVertical: "3%", display: "flex", flexDirection: "row", justifyContent: "center", width: "50%" }}>
                    <Text style={{ color: "white", fontSize: 20 }}>login</Text>
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: "8%" }}>
                <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>
                    Login
                </Text>
                <Text style={{ color: "black", fontSize: 15 }}>
                    Please enter your information to Sign In.
                </Text>
            </View>
            <View style={{ paddingHorizontal: "8%", marginTop: "7%" }}>
            <View >
                        < CustomTextInput
                            placeholder="Email"
                            value={email}
                            title="Enter Email"
                            onChangeText={(value: any) => { setEmail(value) }}
                            errorMessage={emailError}
                            leftAlign={true}
                        />
                    </View>
                    <View >
                        < CustomTextInput
                            placeholder="password"
                            value={password}
                            title="Enter Email"
                            onChangeText={(value: any) => { setPassword(value) }}
                            errorMessage={emailError}
                            leftAlign={true}
                        />
                    </View>
                <PhoneInput />
                <CustomButton isFilled isFullWidth={true} text="Login" onPress={() => {

                    signin()

                }} />
                {/* <CustomButton isFilled isFullWidth={true} text="Get OTP" onPress={() => {

                    props.navigation.navigate(ROUTES_NAMES.otp)

                }} /> */}
                <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "15%" }}>
                    <View style={{ borderBottomWidth: 1, borderColor: "#A9A9A9", width: "40%" }}>
                    </View>
                    <Text style={{ paddingHorizontal: "2%", color: "#A9A9A9" }}>Or</Text>
                    <View style={{ borderBottomWidth: 1, borderColor: "#A9A9A9", width: "40%" }}>
                    </View>
                </View>
                <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "10%" }}>
                    <Text style={{ textAlign: "center", color: "#A9A9A9" }}>Login Through</Text>
                </View>
                <View style={{ marginTop: "5%" }}>
                    <MyCustomButton text="Google" imagesource={Google} />
                </View>
                <View style={{ marginTop: "5%" }}>
                    <MyCustomButton text="Facebook" imagesource={Facebook} />
                </View>
                <View style={{ marginTop: "5%" }}>
                    <MyCustomButton text="Twitter" imagesource={Twitter} />
                </View>
                <View style={{ marginTop: "5%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "black", fontWeight: "bold" }}>
                        Don't Have An Account?
                    </Text>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate(ROUTES_NAMES.signup)
                    }}>

                        <Text style={{ color: "#4E148C", paddingLeft: "2%", fontWeight: "bold" }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>



    </>
    )
}

export default Login