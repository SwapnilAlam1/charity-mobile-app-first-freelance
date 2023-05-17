import React, { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Switch
} from 'react-native';
import backicon from '../assets/images/noti.png';
import notificationicon from '../assets/images/backscreen.png';
import MyProfile from '../assets/images/profile.jpg';
import profIcon from '../assets/images/profiSet.png';
import languageIcon from '../assets/images/LanguSet.png';
import darkIcon from '../assets/images/darkSet.png';
import paymentIcon from '../assets/images/paySet.png';
import problemIcon from '../assets/images/probSet.png';
import settingIcon from '../assets/images/settingSet.png';
import logIcon from '../assets/images/logSet.png';
import { useNavigation } from '@react-navigation/native';
import Myimage from "../assets/images/MyProfilee.png";
import RightArrow from "../assets/images/rightArr.png";

const Profile = () => {
    const navigation = useNavigation();

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);



    return (
        <View style={{
            padding: '5%',
            backgroundColor: '#FFFFFF',
            height: '100%',
        }}>
            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                padding: 5,
        alignItems:"center"

            }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Image source={notificationicon} />
                </TouchableOpacity>
                <Text style={{
                    color: 'black',
                    fontSize: 20,
                    fontWeight: "bold"
                }}>
                    Profile
                </Text>
                <Image source={backicon} />
            </View>

            <ScrollView>
                <View style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "10%"
                }}>
                    <Image source={Myimage} style={{ height: 150, width: 150 }} />
                </View>
                <View style={{ marginTop: "3%" }}>
                    <Text style={{ color: "black", fontWeight: "bold", textAlign: "center" }}>
                        Katherine Foster
                    </Text>
                    <Text style={{ color: "black", textAlign: "center" }}>
                        Katherine1989@test.com
                    </Text>
                </View>

                <View style={{ marginTop: "10%",paddingHorizontal:"2%" }}>

                    <TouchableOpacity style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Image source={profIcon} />
                            <Text style={{ color: "black", paddingLeft: "5%" }}>
                                Personal Details
                            </Text>
                        </View>

                        <View>
                            <Image source={RightArrow} />
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ display: "flex", marginTop: "5%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Image source={languageIcon} />
                            <Text style={{ color: "black", paddingLeft: "5%" }}>
                                Language
                            </Text>
                        </View>

                        <View>
                            <Image source={RightArrow} />
                        </View>
                    </TouchableOpacity>

                    <View style={{ display: "flex", marginTop: "5%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Image source={darkIcon} />
                            <Text style={{ color: "black", paddingLeft: "5%" }}>
                                Dark Mode
                            </Text>
                        </View>

                        <View>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled ? 'White ' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={{ display: "flex", marginTop: "5%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Image source={paymentIcon} />
                            <Text style={{ color: "black", paddingLeft: "5%" }}>
                                Payment Method
                            </Text>
                        </View>

                        <View>
                            <Image source={RightArrow} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ display: "flex", marginTop: "5%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Image source={problemIcon} />
                            <Text style={{ color: "black", paddingLeft: "5%" }}>
                                Change Password
                            </Text>
                        </View>

                        <View>
                            <Image source={RightArrow} />
                        </View>
                    </TouchableOpacity><TouchableOpacity style={{ display: "flex", marginTop: "5%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Image source={problemIcon} />
                            <Text style={{ color: "black", paddingLeft: "5%" }}>
                                Report a Problem
                            </Text>
                        </View>

                        <View>
                            <Image source={RightArrow} />
                        </View>
                    </TouchableOpacity><TouchableOpacity style={{ display: "flex", marginTop: "5%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Image source={settingIcon} style={{ width: 20, height: 20 }} />
                            <Text style={{ color: "black", paddingLeft: "5%" }}>
                                Setting
                            </Text>
                        </View>

                        <View>
                            <Image source={RightArrow} />
                        </View>
                    </TouchableOpacity><TouchableOpacity style={{ display: "flex", marginTop: "5%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Image source={logIcon} />
                            <Text style={{ color: "black", paddingLeft: "5%" }}>
                                Log out
                            </Text>
                        </View>

                        <View>
                            <Image source={RightArrow} />
                        </View>
                    </TouchableOpacity>

                </View>
            </ScrollView>



        </View>
    )
}
export default Profile;

const styles = StyleSheet.create({});
