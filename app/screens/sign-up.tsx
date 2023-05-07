import React, { useEffect, useState } from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import CustomButton from "../components/button";
import CustomTextInput from "../components/input";
import { ROUTES_NAMES } from "../utils/constants";
import PhoneInput from "../components/phoneInput";
import Google from "../assets/images/Google.png";
import Facebook from "../assets/images/facebook.png";
import Twitter from "../assets/images/twitter.png";
import MyCustomButton from "../components/CustomButton";

const SignUp = (props) => {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [genderMale, setGender] = useState(true)

    return (<>
        <View style={{
            flex: 1,
            backgroundColor: "white"

        }}>

            <View style={{ paddingHorizontal: "5%", display: "flex", marginTop: "3%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                <TouchableOpacity
                    style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "50%", backgroundColor: "#4E148C", paddingVertical: "3%", }}>
                    <Text style={{ color: "white", fontSize: 20 }}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate(ROUTES_NAMES.login)
                    }}

                    style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "50%" }}>
                    <Text style={{ color: "black", fontSize: 20 }}>login</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={{ paddingHorizontal: "8%", marginTop: "2%" }}>
                    <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>
                        Sign Up
                    </Text>
                    <Text style={{ color: "black", fontSize: 15 }}>
                        Please enter your information to Sign Up.
                    </Text>
                </View>
                <View style={{ paddingHorizontal: "8%", marginTop: "7%" }}>
                    < CustomTextInput
                        placeholder="First Name"
                        value={email}
                        title="Enter Email"
                        onChangeText={(value: any) => { setEmail(value) }}
                        errorMessage={emailError}
                        leftAlign={true}
                    />

                    <View style={{ marginTop: "2%" }}>
                        < CustomTextInput
                            placeholder="Last Name"
                            value={email}
                            title="Enter Email"
                            onChangeText={(value: any) => { setEmail(value) }}
                            errorMessage={emailError}
                            leftAlign={true}
                        />
                    </View>
                    <View style={{ marginTop: "2%" }}>
                        <View style={{
                            borderColor: "#A9A9A9",
                            borderWidth: 1,
                            width: "100%",
                            borderRadius: 13,
                            paddingLeft: 10,
                            height: 50,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Text style={{ color: "#A9A9A9" }}>
                                Select Gender
                            </Text>
                            <TouchableOpacity onPress={() => {
                                setGender(true)
                            }} style={{ display: "flex", flexDirection: "row", justifyContent: "center", paddingHorizontal: "2%", paddingTop: "2%" }}>
                                <Text style={{ color: "#A9A9A9", paddingHorizontal: "2%" }}>
                                    Male
                                </Text>
                                <View style={[{
                                    height: 24,
                                    width: 24,
                                    borderRadius: 12,
                                    borderWidth: 2,
                                    borderColor: '#4E148C',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }]}>
                                    {

                                        genderMale && <View style={{
                                            height: 16,
                                            width: 16,
                                            borderRadius: 8,
                                            backgroundColor: '#4E148C',
                                        }} />

                                    }
                                </View>


                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => {
                                setGender(false)
                            }} style={{ display: "flex", flexDirection: "row", justifyContent: "center", paddingHorizontal: "2%", marginTop: "2%" }}>
                                <Text style={{ color: "#A9A9A9", paddingHorizontal: "2%" }}>
                                    Female
                                </Text>
                                <View style={[{
                                    height: 24,
                                    width: 24,
                                    borderRadius: 12,
                                    borderWidth: 2,
                                    borderColor: '#4E148C',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }]}>

                                    {
                                        !genderMale && <View style={{
                                            height: 16,
                                            width: 16,
                                            borderRadius: 8,
                                            backgroundColor: '#4E148C',
                                        }} />

                                    }



                                </View>


                            </TouchableOpacity>










                        </View>




                    </View>
                    <View style={{ marginTop: "8%" }}>
                        < CustomTextInput
                            placeholder="Email"
                            value={email}
                            title="Enter Email"
                            onChangeText={(value: any) => { setEmail(value) }}
                            errorMessage={emailError}
                            leftAlign={true}
                        />
                    </View>
                    <View style={{ marginTop: "2%" }}>
                        <PhoneInput />
                    </View>

                    <View style={{ marginTop: "5%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>


                        <Text style={{ color: "black" }}>
                            I have read and agree to the
                        </Text>
                        <Text style={{ color: "#4E148C", paddingLeft: "2%", fontWeight: "bold" }}>
                            Terms and condition
                        </Text>
                    </View>

                    <CustomButton isFilled isFullWidth={true} text="Get OTP" onPress={() => {
                        props.navigation.navigate(ROUTES_NAMES.otp)
                    }} />
                    <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "15%" }}>
                        <View style={{ borderBottomWidth: 1, borderColor: "#A9A9A9", width: "40%" }}>
                        </View>
                        <Text style={{ paddingHorizontal: "2%", color: "#A9A9A9" }}>Or</Text>
                        <View style={{ borderBottomWidth: 1, borderColor: "#A9A9A9", width: "40%" }}>
                        </View>
                    </View>
                    <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "10%" }}>
                        <Text style={{ textAlign: "center", color: "#A9A9A9" }}>Sign Up With Social Media </Text>
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

                    </View>
                </View>
            </ScrollView>






        </View>

    </>
    )
}

export default SignUp