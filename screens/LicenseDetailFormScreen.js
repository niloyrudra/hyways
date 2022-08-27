import React from "react";
import { StyleSheet, SafeAreaView, Text, View, ActivityIndicator, TouchableOpacity } from "react-native";
import { useForm } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Components
import FormTextInput from "../components/FormTextInput";

// Constants
import colors from "../constants/colors";

// DB
import { auth, db } from '../config/firebase';

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

const LicenseDetailFormScreen = ( { navigation, route } ) => {

    // console.log(userId)
    const [ userId, setUserId ] = React.useState( auth.currentUser.uid )
    const [ isFormSubmitting, setIsFormSubmitting ] = React.useState( false )

    const [ frontFaceData, setFrontFaceData ] = React.useState( route.params.frontFaceData );
    const [ backFaceData, setBackFaceData ] = React.useState( route.params.backFaceData );

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
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
        setIsFormSubmitting( true )
        const formData = { ...data, frontFaceData, backFaceData }

        db.collection("licenses").doc( userId ).set({ formData })
            .then( () => {
                reset();
                setIsFormSubmitting( false );

                navigation.navigate("Status", formData )
            } )
            .catch( err => console.error( err ) );
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
                disabled={isFormSubmitting}
                onPress={handleSubmit(onSubmit)}
            >
                <Text style={styles.submitText}>Add License</Text>
            </TouchableOpacity>

            {
                isFormSubmitting && (
                    <View
                        style={{
                            flex:1,
                            // width:50,
                            height:100,
                            marginTop: 30,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <ActivityIndicator color={ colors.primaryColor } size="large" />
                    </View>
                )
            }

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