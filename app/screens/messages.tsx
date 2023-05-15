import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import backicon from '../assets/images/backscreen.png';
import notificationicon from '../assets/images/noti.png';
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import MessagePersonOne from '../assets/images/message-person-1.png';
import MessagePersonTwo from '../assets/images/message-person-2.png';
import MessagePersonThree from '../assets/images/message-person-3.png';
import MessagePersonFour from '../assets/images/message-person-4.png';
import MessagePersonFive from '../assets/images/message-person-5.png';
import MessagePersonSix from '../assets/images/message-person-6.png';
import Users from '../assets/images/users.png';



const Messages = (props) => {
    const { navigation } = props

    return (
        <View style={{
            flex: 1,
            backgroundColor: "white", paddingHorizontal: 15

        }}>
            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                padding: 5,
                paddingVertical: 20,
                alignItems:"center"
                // paddingHorizontal: 20,
            }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Image source={backicon} />
                </TouchableOpacity>
                <Text style={styles.pageTitle}>
                    Messages

                </Text>
                <Image source={notificationicon} />
            </View>

            <View style={{
                flexDirection: "row", justifyContent: "space-between",
                borderBottomColor: "#A8A8A8", borderBottomWidth: 3, paddingBottom: 6
            }}>


                <Text style={[styles.tabText]}>
                    Friends

                </Text>
                <Text style={[styles.tabText, { color: "rgba(0, 0, 0, 0.5)" }]}>
                    Global

                </Text>
                <Text style={[styles.tabText, { color: "rgba(0, 0, 0, 0.5)" }]}>
                    Management

                </Text>
            </View>
            <View style={{
                backgroundColor: "#00BAF2",
                borderRadius: 20,
                borderWidth: 2,
                width: 60, position: "relative", bottom: 5
            }} />

            <View>
                <MessageComp image={MessagePersonOne} name="Ralph Williamson" message="Thank you soo much"
                    messageCount="1" time="11:15 am" />

                <MessageComp image={MessagePersonTwo} name="Jane Adwards"
                    message="Wow"
                    time="11:15 am" />

                <MessageComp image={MessagePersonThree} name="Bell Cameron"
                    message="You: Here weather is very..."
                    messageCount="2" time="11:15 am" />

                <MessageComp image={MessagePersonFour} name="Bell Cameron"
                    message="You: Not today."
                    time="11:15 am" />





                <View style={{
                    flexDirection: "row", width: "100%",
                    justifyContent: "space-between", marginVertical: 15, alignItems: "center"
                }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={MessagePersonFive} />
                        <View style={{ marginLeft: 20 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={Users} style={{ marginRight: 6 }} />

                                <Text style={styles.messageHeading}>


                                    My Team
                                </Text>
                            </View>
                            <Text style={styles.messageSubHeading}>
                                You: Let's finiish weekly challange...
                            </Text>
                        </View>
                    </View>
                    <View style={{ alignItems: "center" }}>


                        <View style={{
                            borderRadius: 20, minWidth: 25, minHeight: 25,
                            backgroundColor: "#4E148C", alignItems: "center", justifyContent: "center"
                        }}>
                            <Text style={{ color: "white" }}>10</Text>
                        </View>
                        <Text style={styles.messageTime}> 11:15 am</Text>
                    </View>

                </View>






                <MessageComp image={MessagePersonSix} name="Bell Cameron"
                    message="I'm sick. today is  not possible"
                    time="11:15 am" />


            </View>
        </View >



    )
}


const MessageComp = ({ image, name, message, messageCount = null, time }) => {
    return (
        <View style={{
            flexDirection: "row", width: "100%",
            justifyContent: "space-between", marginVertical: 15, alignItems: "center"
        }}>
            <View style={{ flexDirection: "row" }}>
                <Image source={image} />
                <View style={{ marginLeft: 20 }}>
                    <Text style={styles.messageHeading}>
                        {name}
                    </Text>
                    <Text style={styles.messageSubHeading}>
                        {message}
                    </Text>
                </View>
            </View>
            <View style={{ alignItems: "center" }}>
                {
                    messageCount &&

                    <View style={{
                        borderRadius: 20, minWidth: 25, minHeight: 25,
                        backgroundColor: "#4E148C", alignItems: "center", justifyContent: "center"
                    }}>
                        <Text style={{ color: "white" }}>{messageCount}</Text>
                    </View>}
                <Text style={styles.messageTime}> {time}</Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    pageTitle: {
        fontFamily: 'Poppins-SemiBold',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 20,
        // lineHeight: 20,
        color: "#000000",
    },
    tabText: {
        fontFamily: 'Poppins-Medium',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 21,
        color: "#000000",
    },
    messageHeading: {
        fontFamily: 'Poppins-SemiBold',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 21,
        color: "#000000",
    },
    messageSubHeading: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 18,
        color: "rgba(0, 0, 0, 0.5)",
    },

    messageTime: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 18,
        color: "rgba(0, 0, 0, 0.5)",
    },

})







export default Messages