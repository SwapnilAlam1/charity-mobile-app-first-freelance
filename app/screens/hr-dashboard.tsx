import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react"
import { Image, Text, TouchableOpacity, useColorScheme, View } from "react-native"
import CustomButton from "../components/button";
import { BLACK, GRAY, WHITE } from "../components/colors";
import CustomTextInput from "../components/input";
import Loader from "../components/loader";
import { API_BASE_URL, JWT_TOKEN, ROUTES_NAMES } from "../utils/constants";


const HrDashboard = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const [allUsers, setAllUsers] = useState([])


    useEffect(() => {

        const fetchData = async () => {
            const token = await AsyncStorage.getItem(JWT_TOKEN)
            axios.get(API_BASE_URL + "/authentication/get-all-users", { headers: { "Authorization": token } }).then(resp => {
                console.log("these are all users  ::  ", resp.data.data);
                setAllUsers(resp.data.data)

            }).catch(err => {
            })

        }
        fetchData()
    }, [])

    return (<>
        <View style={{ flex: 1, backgroundColor: isDarkMode ? GRAY : WHITE, paddingHorizontal: 20,paddingTop:"10%" }}>

            <Text style={{fontWeight:700,fontSize:20,textAlign:"center",marginBottom:20}}>All Users</Text>

            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                <View >
                    {
                        allUsers.map((item, index) => {
                            return <View key={index} style={{}}>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate(ROUTES_NAMES.userDetail,
                                        {
                                            email: item.email,
                                        })

                                }}>
                                    <Text>{item?.email}</Text>
                                </TouchableOpacity>
                            </View>
                        })
                    }

                </View>

            </View>

        </View>
        {/* <Loader/> */}
    </>
    )
}

export default HrDashboard
