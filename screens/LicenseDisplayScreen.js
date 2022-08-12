import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

// Components
import CheckedIcon from '../components/CheckedIcon'
import RefreshIcon from '../components/RefreshIcon'
import CloseIcon from "../components/CloseIcon"
import ViewIcon from "../components/ViewIcon"

// Constant
import colors from '../constants/colors'

const licenseData = [
    {id: 1, heading: "Driver's License Number", value: "123456789"},
    {id: 2, heading: "Date Of Birth", value: "June 05, 1999"},
    {id: 3, heading: "Endorsements", value: "HVPE"},
]

const LicenseDisplayScreen = ({ navigation, route}) => {

    const [ license, setLicense ] = React.useState( null )

    React.useEffect(() => {
        console.log(route)
        if( route.params.item ) setLicense( route.params.item )

        return () => {
            setLicense( null )
        }
    }, [route.params.item.id]);

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    flex:1,
                    width: '100%',
                    flexDirection:"row"
                }}
            >
                <View
                    style={{
                        flex:1, 
                        width:"60%",
                    }}
                >

                    <FlatList
                        data={licenseData}
                        keyExtractor={(item) => item.id}
                        ListHeaderComponent={
                            <>
                                <Image
                                    style={{
                                        // width:380,
                                        // height:245 
                                        width:"100%",
                                        height: 130 
                                    }}
                                    source={ license.cardImg }
                                />

                                <Image
                                    style={{
                                        width:'100%',
                                        height: 40,
                                        marginTop: 30,
                                    }}
                                    source={ require("../assets/license/barcode-laser-code-vector-graphic-pixabay-3.png") }
                                />
                            </>
                        }
                        renderItem={({item}) => (
                            <View
                                style={{
                                    marginTop:20,
                                    paddingBottom:10,
                                    borderBottomWidth: 1,
                                    borderBottomColor: "#ccc"
                                }}
                            >
                                <Text style={{
                                    fontSize: 17,
                                    fontWeight: "800"
                                }}>{item.heading}</Text>
                                <Text style={{
                                    fontSize: 17,
                                    fontWeight: "500"
                                }}>{item.value}</Text>
                            </View>
                        )}
                        ListFooterComponent={
                            <View style={{height:50}} />
                        }
                    />

                </View>

                <View
                    style={{
                        width:"38%",
                        marginLeft:"2%"
                    }}
                >
                    <View
                        style={{
                            paddingHorizontal: 10,
                            paddingVertical: 30,
                            backgroundColor: '#DADADA',
                            justifyContent: "flex-start",
                            alignItems: "center"
                        }}
                    >
                        <Text style={{fontSize:17, fontWeight:"800"}}>Last Update</Text>
                        <Text style={{fontSize:13, fontWeight:"500"}}>1 second ago</Text>

                        <CheckedIcon
                            style={{
                                marginVertical:20
                            }}
                        />

                        <TouchableOpacity
                            style={{
                                width: 107,
                                height: 38,          
                                borderRadius: 35,
                                backgroundColor: colors.primaryColor,
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexDirection:"row",
                                marginTop: 20,
                                paddingHorizontal: 15,

                                shadowOffset: {width: -2,height: 4},
                                shadowColor: colors.shadowClr,
                                shadowOpacity: 0.25,
                                shadowRadius: 3,
                                elevation: 3,

                            }}
                        >
                            <RefreshIcon/>

                            <View
                                style={{
                                    flex:1,
                                    alignItems:"center"
                                }}
                            >
                                <Text style={{color: colors.colorWhite,fontWeight:"800", fontSize:12}}>Refresh</Text>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                width: 107,
                                height: 38,          
                                borderRadius: 35,
                                backgroundColor: colors.primaryColor,
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexDirection:"row",
                                marginTop: 20,
                                paddingHorizontal: 15,
                                
                                shadowOffset: {width: -2,height: 4},
                                shadowColor: colors.shadowClr,
                                shadowOpacity: 0.25,
                                shadowRadius: 3,
                                elevation: 3,

                            }}
                        >
                            <ViewIcon/>
                            
                            <View
                                style={{
                                    flex:1,
                                    alignItems:"center"
                                }}
                            >
                                <Text style={{color: colors.colorWhite,fontWeight:"800", fontSize:12}}>View</Text>
                            </View>
                            
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                width: 107,
                                height: 38,          
                                borderRadius: 35,
                                backgroundColor: colors.primaryColor,
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexDirection:"row",
                                marginTop: 20,
                                paddingHorizontal: 15,
                                
                                shadowOffset: {width: -2,height: 4},
                                shadowColor: colors.shadowClr,
                                shadowOpacity: 0.25,
                                shadowRadius: 3,
                                elevation: 3,

                            }}

                            onPress={() => navigation.navigate( "BottomTabs" )}
                        >
                            <CloseIcon/>
                            
                            <View
                                style={{
                                    flex:1,
                                    alignItems:"center"
                                }}
                            >
                                <Text style={{color: colors.colorWhite,fontWeight:"800", fontSize:12}}>Close</Text>
                            </View>
                            
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default LicenseDisplayScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 36,
        paddingHorizontal: 20
    },
})