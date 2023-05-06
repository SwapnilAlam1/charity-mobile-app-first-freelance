import React, { useEffect, useState } from "react"
import { Image, Text, TouchableOpacity, useColorScheme, View, ScrollView } from "react-native"

import logo from "../assets/images/logo.png"
import splashImage from "../assets/images/splash-image.png"
import { COLOR_PRIMARY } from "../utils/colors"
import CustomButton from "../components/button"





const SplashScreen = (props) => {



    return (<>
        <View style={{ flex: 1, padding: 10 }}>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15, marginTop: 30 }}>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={logo} />
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20, color: COLOR_PRIMARY, textAlign: "center" }}>TREE</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 20, color: COLOR_PRIMARY }}>HUGGERS</Text>
                    </View>
                </View>
                <Text style={{ fontWeight: "bold", fontSize: 20, color: COLOR_PRIMARY }}>SKIP</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Image source={splashImage} style={{ marginTop: "20%" }} />



                <View style={{ flexDirection: "row", justifyContent: "center",marginVertical:20 }}>
                    <View style={{ width: 9, height: 9, borderRadius: 5, backgroundColor: "gray",marginRight:7 }} />
                    <View style={{ width: 9, height: 9, borderRadius: 5, backgroundColor: "gray",marginRight:7 }} />

                    <View style={{ width: 9, height: 9, borderRadius: 5, backgroundColor: COLOR_PRIMARY,marginRight:7 }} />

                    <View style={{ width: 9, height: 9, borderRadius: 5, backgroundColor: "gray" }} />


                </View>

                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 25, color: "black", fontWeight: "bold",
                     textAlign: "center",fontFamily:"Poppins" }}>

                        Give Happiness With Every
                    </Text>
                    <Text style={{ fontSize: 25, color: "black", fontWeight: "bold", textAlign: "center" }}>Cent</Text>
                </View>


                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 16, color: "black", fontWeight: "600", textAlign: "center" }}>

                        Make a tangible difference and foster a
                    </Text>

                    <Text style={{ fontSize: 16, color: "black", fontWeight: "600", textAlign: "center" }}>

                        compassionate society. You can
                    </Text>

                    <Text style={{ fontSize: 16, color: "black", fontWeight: "600", textAlign: "center" }}>

                        establish a schedule for the
                    </Text>
                    <Text style={{ fontSize: 16, color: "black", fontWeight: "600", textAlign: "center" }}>

                        donations and help them
                    </Text>
                    <Text style={{ fontSize: 16, color: "black", fontWeight: "600", textAlign: "center" }}>
                        rise with you.
                    </Text>


                    <View style={{ alignItems: "center" }}>
                        <CustomButton text="Get Started" onPress={() => { }} isFilled isFullWidth={false} />

                        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
                            <Text>
                                Already have anaccount?
                            </Text>
                            <Text style={{ color: COLOR_PRIMARY, fontWeight: "700", marginLeft: 10 }}>
                                Log In
                            </Text>

                        </View>
                        <View style={{ height: 6, backgroundColor: COLOR_PRIMARY, width: "40%", borderRadius: 10, marginTop: 10 }} />
                    </View>



                </View>

            </ScrollView>

        </View>


    </>
    )
}

export default SplashScreen