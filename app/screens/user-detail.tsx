import React, { useEffect, useState } from "react"
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Image, Text, useColorScheme, View, TouchableOpacity, Switch } from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker';


import CustomButton from "../components/button";
import { BLACK, GRAY, WHITE } from "../components/colors";
import CustomTextInput from "../components/input";
import Loader from "../components/loader";
import { API_BASE_URL, JWT_TOKEN } from "../utils/constants";


const UserDetail = ({ navigation, route }) => {
    const { email } = route.params
    const [allAbsents, setAllAbsents] = useState([])
    const [absentReqBody, setAbsentReqBody] = useState({ email, isHalf: false, date: new Date() })
    const [latetReqBody, setLatetReqBody] = useState({ email, timeOfComing: new Date() })
    const [allLateComings, setAllLateComings] = useState([])
    const [isToShowDatePickerModal, setIsToShowDatePickerModal] = useState(false)
    const [isToShowTimePickerModal, setIsToShowTimePickerModal] = useState(false)
    const isDarkMode = useColorScheme() === 'dark';





    useEffect(() => {
        fetchData()
    }, [])







    const fetchData = async () => {

        console.log("jasbdckj  ::   ", absentReqBody.date.toLocaleDateString())
        const token = await AsyncStorage.getItem(JWT_TOKEN)
        axios.get(API_BASE_URL + `/hractions/get-all-late-coming?email=${email}`, { headers: { "Authorization": token } }).then(resp => {
            setAllLateComings(resp.data.data)
            console.log("these get-all-late-coming  ::  ", resp.data.data);
            // setAllUsers(resp.data.data)
        })

        axios.get(API_BASE_URL + `/hractions/get-all-absent?email=${email}`, { headers: { "Authorization": token } }).then(resp => {
            setAllAbsents(resp.data.data)
            console.log("all absents  ::::  ", resp.data.data);

            // console.log("these get-all-absent  ::  ", resp.data.data);
            // setAllUsers(resp.data.data)

        })
    }



    return (<>
        <View style={{
            flex: 1, justifyContent: "center",
            backgroundColor: isDarkMode ? GRAY : WHITE, paddingHorizontal: 20
        }}>

            <Text>{email}</Text>


            <View style={{marginVertical:20}}>
                <Text style={{fontWeight:700,fontSize:16}}>
                    Total Late Comings {allLateComings.length}
                </Text>

                <Text style={{fontWeight:700,fontSize:16}}>
                    Total Absents {allAbsents.length}
                </Text>

            </View>

            <View>
                <Text>Late Comings</Text>



                <View>

                    {
                        allLateComings.map((item, index) => {
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


                <View style={{ flexDirection: "row", justifyContent: "space-between",  }}>

                    <Text>Arrival Time</Text>
                    <TouchableOpacity onPress={() => { setIsToShowTimePickerModal(!isToShowTimePickerModal) }}>
                        <Text>{latetReqBody.timeOfComing.toLocaleTimeString()}</Text>
                    </TouchableOpacity>
                </View>


                <TouchableOpacity onPress={async () => {

                    const token = await AsyncStorage.getItem(JWT_TOKEN)
                    axios.post(API_BASE_URL + "/hractions/mark-late-coming", latetReqBody,
                        { headers: { "Authorization": token } }).then(resp => {
                            alert("success")
                            fetchData()

                            // console.log("these get-all-absent  ::  ", resp.data.data);
                            // setAllUsers(resp.data.data)
                        })

                }} style={{ backgroundColor: "green", width: "50%", padding: 10 }}>
                    <Text style={{





                    }}>Mark Late Coming</Text>
                </TouchableOpacity>



            </View>




            <View style={{marginVertical:20}}>
                <Text>Absents</Text>
                {
                    allAbsents.map((item, index) => {
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

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>


                <View>
                    <TouchableOpacity
                        onPress={() => { setIsToShowDatePickerModal(!isToShowDatePickerModal) }}>
                        <Text>
                            {absentReqBody.date.toLocaleString("en-US", {
                                weekday: 'long', year: 'numeric',
                                month: 'long', day: 'numeric'
                            })}
                            {/* {absentReqBody.date.getDate() + "-" + (absentReqBody.date.getMonth()+1) + "-" + absentReqBody.date.getFullYear()} */}
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text>Full Day</Text>
                    <Switch value={absentReqBody.isHalf} onChange={() => {
                        setAbsentReqBody((prev) => {
                            return { ...prev, isHalf: !absentReqBody.isHalf }
                        })
                    }} />
                </View>
            </View>
            <TouchableOpacity
                style={{ backgroundColor: "green", width: "50%", padding: 10 }}

                onPress={async () => {
                    const token = await AsyncStorage.getItem(JWT_TOKEN)
                    axios.post(API_BASE_URL + "/hractions/mark-absent", absentReqBody,
                        { headers: { "Authorization": token } }).then(resp => {
                            alert("success")
                            fetchData()

                            // console.log("these get-all-absent  ::  ", resp.data.data);
                            // setAllUsers(resp.data.data)
                        })
                }}>
                <Text>
                    Mark Absent
                </Text>

            </TouchableOpacity>

        </View>



        {
            isToShowDatePickerModal &&

            <DateTimePicker
                value={absentReqBody.date}
                mode="date"
                onChange={(e, v) => {
                    setIsToShowDatePickerModal(!isToShowDatePickerModal)
                    setAbsentReqBody((prev) => {
                        return { ...prev, date: v }
                    })
                    console.log("this is date  ::   ", v)
                }}


            />}



        {
            isToShowTimePickerModal &&
            <DateTimePicker
                value={latetReqBody.timeOfComing}
                mode="time"
                onChange={(e, v) => {
                    setIsToShowTimePickerModal(!isToShowTimePickerModal)
                    setLatetReqBody((prev) => {
                        return { ...prev, timeOfComing: v }
                    })
                }}
            />
        }




        {/* <Loader/> */}
    </>
    )
}

export default UserDetail