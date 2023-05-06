import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react"
import { Image, Text, useColorScheme, View } from "react-native"
import CustomButton from "../components/button";
import { BLACK, GRAY, WHITE } from "../components/colors";
import CustomTextInput from "../components/input";
import Loader from "../components/loader";
import { API_BASE_URL, JWT_TOKEN, USER_EMAIL } from "../utils/constants";


const MyLateComings = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const [isLoading, setIsLoading] = useState(false)

    const [myAllLateComings, setMyAllLateComings] = useState([])

    useEffect(() => {
        getMyAllLateComings()

    }, [])


    const getMyAllLateComings = async () => {

        const userEmail = await AsyncStorage.getItem(USER_EMAIL)
        setIsLoading(true)
        const token = await AsyncStorage.getItem(JWT_TOKEN)
        axios.get(API_BASE_URL + `/hractions/get-all-late-coming?email=${userEmail}`, { headers: { "Authorization": token } }).then(resp => {
            setMyAllLateComings(resp.data.data)
            console.log("this is response  get-all-late comings ::  ", resp.data.data);
            setIsLoading(false)

        }).catch(err => {
            setIsLoading(false)
            console.log("this is response  get-all-letcomings err ::  ", err.response);


        })

    }



    return (<>
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: isDarkMode ? GRAY : WHITE, paddingHorizontal: 20 }}>


            <View style={{  }}>

                <Text>My All Late Comings</Text>

                <Text style={{fontWeight:700,fontSize:16}}>
                    Total Late Comings {myAllLateComings.length}
                </Text>

                <View>
                    {
                        myAllLateComings.map((item, index) => {
                            return <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text>
                                    {new Date(item.timeOfComing).toLocaleString("en-US", {
                                        weekday: 'long', year: 'numeric',
                                        month: 'long', day: 'numeric'
                                    })}


                                </Text>
                                <Text>
                                    {new Date(item.timeOfComing).toLocaleTimeString()}
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

export default MyLateComings