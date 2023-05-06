import React, { useEffect } from "react"
import { Image, Text, TouchableOpacity, useColorScheme, View } from "react-native"
import CustomButton from "../components/button";
import { BLACK, GRAY, WHITE } from "../components/colors";
import CustomTextInput from "../components/input";
import Loader from "../components/loader";
import { ROUTES_NAMES } from "../utils/constants";


const Dashboard = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';

    useEffect(() => {

    }, [])


    return (<>
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: isDarkMode ? GRAY : WHITE, paddingHorizontal: 20 }}>


            <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                <TouchableOpacity onPress={()=>{navigation.navigate(ROUTES_NAMES.myAbsents)}}>

                <View style={{ padding: 20, borderWidth: 2, borderColor: BLACK, alignSelf: 'flex-start', borderRadius: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>My Absents</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate(ROUTES_NAMES.myLateComings)}}>
                <View style={{ padding: 20, borderWidth: 2, borderColor: BLACK, alignSelf: 'flex-start', borderRadius: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>My Late Comings</Text>
                </View>
                </TouchableOpacity>

            </View>

        </View>
        {/* <Loader/> */}
    </>
    )
}

export default Dashboard