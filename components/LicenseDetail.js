import React from "react";
import { StyleSheet, Dimensions, SafeAreaView, FlatList, Text, View, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Components
import FormTextInput from "./FormTextInput";

// Constant
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

export default function LicenseDetail( { setData } ) {
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
  const onSubmit = data => {
      setData(data)
    //   setIsSubmitted(true)
    };

//   console.log(Dimensions.get("screen").height)
//   console.log(Dimensions.get("window").height)

  const validationHandler = () => {
    //   return firstName != '' && middleName != '' &&  lastName != '' &&  suffixLicense != '' && licenseNumber != '' && vehicelNumber != '' && brandName != '' && model != '' && year != '' && motorVehicelIssuedNumber != '' && policyNumber != '' && expirationDate != ''
    return true
  }

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
                    // position:"absolute",
                    // width: Dimensions.get("screen").width,
                    // height: 84,

                    // justifyContent:"center",
                    // alignItems:"center",
                    // // top: Dimensions.get("screen").height
                    // top: Dimensions.get("window").height - 256,
                    // backgroundColor: "#ffffff99", //colors.colorWhiteTrans, //colors.colorWhiteTrans
                    // zIndex:33333
                    marginBottom: 30
                }}
            >
                <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={handleSubmit(onSubmit)}
                    // disabled={validationHandler}
                >
                    <Text style={styles.submitText}>Add License</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>

        {/* <View
            style={{
                position:"absolute",
                width: Dimensions.get("screen").width,
                height: 84,

                justifyContent:"center",
                alignItems:"center",
                top: Dimensions.get("window").height - 256,
                backgroundColor: "#ffffff99", //colors.colorWhiteTrans, //colors.colorWhiteTrans
                zIndex:33333
            }}
        >
            <TouchableOpacity
                style={styles.submitBtn}
                onPress={handleSubmit(onSubmit)}
                disabled={validationHandler}
            >
                <Text style={styles.submitText}>Add License</Text>
            </TouchableOpacity>
        </View> */}
        

    </SafeAreaView>
  );
}

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
        // marginBottom:65
    },
    submitBtn:
    {
        // width: "70%",
        width: 297,
        height:45,
        // marginTop:25,
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
