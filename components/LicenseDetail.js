import React from "react";
import { StyleSheet, SafeAreaView, FlatList, Text, View, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Components
import FormTextInput from "./FormTextInput";

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

export default function LicenseDetail() {
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
  const onSubmit = data => console.log(data);

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
                    marginBottom:30
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

        {/* <FlatList
            data={formValues}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.idx }
            renderItem={({item}) => (
                <>
                    <View
                        style={{marginBottom:5}}
                    >
                        <Text 
                            style={styles.inputLabel}
                        >
                            {item.label}
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
                            placeholder={item.placeholder}
                            onBlur={onBlur}
                            onChangeText={ text => onChange(text) }
                            value={value}
                        />
                        )}
                        name={item.name}
                    />
                    {errors[item.name] && <Text>This is required.</Text>}


                </>
            )}
            ListFooterComponent={() => (
                <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={handleSubmit(onSubmit)}
                >
                    <Text style={styles.submitText}>Add License</Text>
                </TouchableOpacity>
            )}
        /> */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        flex: 1,
        paddingVertical: 24,
        width:"100%",
        justifyContent: 'space-around',
    },
    // inputLabel: {
    //     fontWeight: "500",
    //     fontSize: 17,
    //     marginLeft: 20,
    //     marginBottom: 5
    // },
    // input: {
    //     // backgroundColor: "#FFC0CB",
    //     backgroundColor: "transparent",
    //     borderRadius: 30,
    //     // width: "70%",
    //     width: 297,
    //     height: 45,
    //     marginBottom: 10,
    //     alignItems: "flex-start",
    //     borderWidth: 1,
    //     borderColor: "#C4C7C4",
    //     paddingHorizontal: 20
    // },
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
