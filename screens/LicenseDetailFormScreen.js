import React from "react";
import { StyleSheet, Dimensions, SafeAreaView, FlatList, Text, View, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Components
import FormTextInput from "../components/FormTextInput";

// Constants
import colors from "../constants/colors";

const formValues = [
    { idx:0, label: 'First Name on License', placeholder: 'First Name', name: 'firstName' },
    { idx:1, label: 'Middle Name on License', placeholder: 'Middle Name', name: 'middleName' },
    { idx:2, label: 'Last Name on License', placeholder: 'Last Name', name: 'lastName' },
    { idx:3, label: 'Suffix on License', placeholder: 'Jr, Sr, III, etc', name: 'suffixLicense' },
    { idx:4, label: 'License Number', placeholder: '123456789', name: 'licenseNumber' },
    { idx:5, label: 'Vehicle Number', placeholder: '123456789', name: 'vehicelNumber' },
    { idx:6, label: 'Brand', placeholder: 'Enter Brand', name: 'brandName' },
    { idx:7, label: 'Model', placeholder: 'Enter Model', name: 'model' },
    { idx:8, label: 'Year', placeholder: '2022', name: 'year' },
    { idx:9, label: 'Motor Vehicle Insured No', placeholder: 'ABCD123456789', name: 'motorVehicelIssuedNumber' },
    { idx:10, label: 'Policy NO', placeholder: 'Enter Policy', name: 'policyNumber' },
    { idx:11, label: 'Expiration Date', placeholder: 'Enter Date', name: 'expirationDate' },
];

// const LicenseDetailFormScreen = ( { navigation, props, setData = ()=>{} } ) => {
const LicenseDetailFormScreen = ( { navigation, route} ) => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            middleName: '',
            lastName: '',
            suffixLicense: '',
            licenseNumber: '',
            vehicelNumber: '',
            brandName: '',
            model: '',
            year: '',
            motorVehicelIssuedNumber: '',
            policyNumber: '',
            expirationDate: '',
        }
    });

    // Handlers
    const onSubmit = data => {
        console.log(data)
        // setData(data)
        if( data?.firstName != "" ) navigation.navigate("Status") 
    };
    
    return (
<SafeAreaView style={styles.container}>

    <KeyboardAwareScrollView>
        <View style={styles.inner}>
            {
                formValues && formValues.map( item => <FormTextInput key={item.idx} control={control} errors={errors} label={item.label} name={item.name} placeholder={item.placeholder} isRequired={true} />)
            }
        </View>

        <View
            style={{
                marginBottom: 30
            }}
        >
            <TouchableOpacity
                style={styles.submitBtn}
                onPress={handleSubmit(onSubmit)}
            >
                <Text style={styles.submitText}>Add License</Text>
            </TouchableOpacity>

        </View>
        
    </KeyboardAwareScrollView>

</SafeAreaView>
    )
}

export default LicenseDetailFormScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    inner: {
        flex: 1,
        paddingVertical: 24,
        width:"100%",
        justifyContent: 'space-around',
    },
    submitBtn:
    {
        width: 297,
        height:45,
        marginTop:25,
        justifyContent:"center",
        alignItems:"center",   
        borderRadius: 35,
        backgroundColor: colors.primaryColor,
        
        shadowOffset: {width: -2,height: 4},
        shadowColor: colors.shadowClr,
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
    },
    submitText: {
        color:"#ffffff",
        fontWeight: "900",
        fontSize: 17
    }
})