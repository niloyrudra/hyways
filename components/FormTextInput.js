import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'

const FormTextInput = ({ control, errors, label, name, placeholder, isRequired }) => {
  return (
    <View>
        <View
            style={{marginBottom:5}}
        >
            <Text 
                style={styles.inputLabel}
            >
                {label}
            </Text>
        </View>
        <Controller
            control={control}
            rules={{
                maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onBlur={onBlur}
                onChangeText={ text => onChange(text) }
                value={value}
            />
            )}
            name={name}
        />
        {errors.name && <Text>This is required.</Text>}

    </View>
  )
}

export default FormTextInput

const styles = StyleSheet.create({
    inputLabel: {
        fontWeight: "500",
        fontSize: 17,
        marginLeft: 20,
        marginBottom: 5
    },
    input: {
        // backgroundColor: "#FFC0CB",
        backgroundColor: "transparent",
        borderRadius: 30,
        // width: "70%",
        width: 297,
        height: 45,
        marginBottom: 10,
        alignItems: "flex-start",
        borderWidth: 1,
        borderColor: "#C4C7C4",
        paddingHorizontal: 20
    },
    submitBtn:
    {
        // width: "70%",
        width: 297,
        borderRadius:30,
        height:45,
        alignItems:"center",
        justifyContent:"center",
        marginTop:25,
        backgroundColor: "#00B906"
    },
    submitText: {
        color:"#ffffff",
        fontWeight: "900",
        fontSize: 17
    }
})
