import React, { useEffect, useState } from "react"
import { Image, Text, TouchableOpacity, useColorScheme, View, ScrollView, StyleSheet } from "react-native"

import logo from "../assets/images/logo.png"
import splashImage from "../assets/images/splash-image.png"
import { COLOR_PRIMARY } from "../utils/colors"
import CustomButton from "../components/button"
import { ROUTES_NAMES } from "../utils/constants";





const SplashScreen = (props) => {
    return (<>
        <View style={{ flex: 1, padding: 10 }}>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15, marginTop: 30 }}>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={logo} />
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{
                            fontWeight: "bold", fontSize: 20,
                            color: COLOR_PRIMARY, textAlign: "center", fontFamily: "CustomFont"
                        }}>TREE</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 20, color: COLOR_PRIMARY }}>HUGGERS</Text>
                    </View>
                </View>
                <Text style={styles.skipText}>SKIP</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{
                    justifyContent: "center", alignItems: "center",
                    width: 383,
                    height: 255,
                    marginVertical:20
                }}>
                    <Image source={splashImage}
                        style={{
                           width: "90%",
                            height: "90%",
                            resizeMode: 'contain',
                        }} />
                </View>



                <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 20 }}>
                    <View style={{ width: 9, height: 9, borderRadius: 5, backgroundColor: "gray", marginRight: 7 }} />
                    <View style={{ width: 9, height: 9, borderRadius: 5, backgroundColor: "gray", marginRight: 7 }} />
                    <View style={{ width: 9, height: 9, borderRadius: 5, backgroundColor: COLOR_PRIMARY, marginRight: 7 }} />
                    <View style={{ width: 9, height: 9, borderRadius: 5, backgroundColor: "gray" }} />
                </View>

                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.textHeading}>

                        Give Happiness With Every
                    </Text>
                    <Text style={styles.textHeading}>Cent</Text>
                </View>


                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={styles.text}>

                        Make a tangible difference and foster a
                    </Text>

                    <Text style={styles.text}>

                        compassionate society. You can
                    </Text>

                    <Text style={styles.text}>

                        establish a schedule for the
                    </Text>
                    <Text style={styles.text}>

                        donations and help them
                    </Text>
                    <Text style={styles.text}>
                        rise with you.
                    </Text>

                    <View style={{ alignItems: "center" }}>
                        <CustomButton text="Get Started"
                            onPress={() => {
                                props.navigation.navigate(ROUTES_NAMES.home)

                            }}

                            isFilled isFullWidth={false} />

                        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
                            <Text style={styles.text}>
                                Already have anaccount?
                            </Text>
                            <TouchableOpacity onPress={() => {
                                props.navigation.navigate(ROUTES_NAMES.login)
                            }}>
                                <Text style={[styles.text, { marginLeft: 10, color: "#4E148C", fontWeight: "700" }]}>
                                    Log In
                                </Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{
                            height: 6, backgroundColor: COLOR_PRIMARY,
                            width: "40%", borderRadius: 10, marginTop: 10
                        }} />
                    </View>



                </View>

            </ScrollView>

        </View>


    </>
    )
}









const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontFamily: 'Poppins-Medium',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 24,
        color: "#000",
    },
    textHeading: {
        textAlign: "center",
        fontFamily: 'Poppins-Medium',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 24,
        lineHeight: 36,
        color: "#000",
    },
    skipText: {
        fontFamily: 'Poppins-Medium',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 27,
        color: "#4E148C"
    },
});






export default SplashScreen