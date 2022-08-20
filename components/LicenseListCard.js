import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import colors from '../constants/colors'

const LicenseListCard = ( { item, navigation } ) => {
  return (
    <View
        style={{marginVertical:30}}
    >
        <Text 
            style={styles.title}
        >
            {item.cardTitle}
        </Text>

        <TouchableOpacity
            style={{
                width: 354,
                height: 222,
                marginTop: 30,
                justifyContent:"center",
                alignItems:"center"
            }}
            onPress={ () => navigation.navigate("LicenseDisplay", item ) }
        >
            <>
                <Image
                    style={{
                        width:332,
                        height:210
                    }}
                    source={item.cardImg}
                />

                <View
                    style={{
                        flex:1,
                        width:"100%",
                        height:"100%",
                        backgroundColor: "#000",
                        opacity: 0.4,
                        position:"absolute",
                        borderRadius: 30
                    }}
                />

                <View
                    style={{
                        position:"absolute",
                        zIndex:2,
                        justifyContent:"center",
                        alignItems: "center"
                    }}
                >
                    <Text style={{ color: colors.colorWhite, opacity:1, fontWeight:"800" }}>Tap to view</Text>
                </View>
            </>
        </TouchableOpacity>
    
    </View>
  )
}

export default LicenseListCard

const styles = StyleSheet.create({
    title: {
        fontSize:20,
        fontWeight:"700"
    },
})