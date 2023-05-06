import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react"
import { Image, Text, useColorScheme, View } from "react-native"
import CustomButton from "../components/button";
import { BLACK, GRAY, WHITE } from "../components/colors";
import CustomTextInput from "../components/input";
import Loader from "../components/loader";
import { API_BASE_URL, JWT_TOKEN, USER_EMAIL } from "../utils/constants";


const MyAbsents = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const [isLoading, setIsLoading] = useState(false)
    const [myAllAbsents, setMyAllAbsents] = useState([])
    
    useEffect(() => {
        getUserAbsents()
    }, [])

    const getUserAbsents = async () => {

        const userEmail = await AsyncStorage.getItem(USER_EMAIL)
        setIsLoading(true)
        const token = await AsyncStorage.getItem(JWT_TOKEN)
        axios.get(API_BASE_URL + `/hractions/get-all-absent?email=${userEmail}`, { headers: { "Authorization": token } }).then(resp => {
            setMyAllAbsents(resp.data.data)
            console.log("this is response  get-all-absent ::  ", resp.data.data);
            setIsLoading(false)

        }).catch(err => {
            setIsLoading(false)

            console.log("this is response  get-all-absent err ::  ", err.response);


        })

    }



    return (<>
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: isDarkMode ? GRAY : WHITE, paddingHorizontal: 20 }}>
            <View style={{}}>
                <Text style={{ textAlign: "center", fontWeight: 700, fontSize: 17 }}>This is my Absents</Text>
                <Text style={{ fontWeight: 700, fontSize: 16 }}>
                    Total Absents {myAllAbsents.length}
                </Text>
                <View style={{ marginVertical: 20 }}>
                    {
                        myAllAbsents.map((item, index) => {
                            return <View key={index} style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                                <Text>{item.isHalf ? "Full Day " : "Half Day "}

                                    {new Date(item.date).toLocaleString("en-US", {
                                        weekday: 'long', year: 'numeric',
                                        month: 'long', day: 'numeric'
                                    })}

                                </Text>
                            </View>
                        })
                    }
                </View>
            </View>

        </View>
        {isLoading &&
            <Loader />}
    </>
    )
}

export default MyAbsents