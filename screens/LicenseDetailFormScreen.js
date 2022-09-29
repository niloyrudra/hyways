import React from "react";
import { StyleSheet, SafeAreaView, Text, View, ActivityIndicator, Alert,  TouchableOpacity } from "react-native";
import { useForm } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

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
    { idx:3, label: 'Birth Date', placeholder: '1990-11-19', name: 'birthDate' },
    { idx:4, label: 'Suffix on License', placeholder: 'Jr, Sr, III, etc', name: 'suffixLicense' },
    { idx:5, label: 'License Number', placeholder: '123456789', name: 'licenseNumber' },
    { idx:6, label: 'Vehicle Number', placeholder: '123456789', name: 'vehicelNumber' },
    { idx:7, label: 'Brand', placeholder: 'Enter Brand', name: 'brandName' },
    { idx:8, label: 'Model', placeholder: 'Enter Model', name: 'model' },
    { idx:9, label: 'Year', placeholder: '2022', name: 'year' },
    { idx:10, label: 'Motor Vehicle Insured No', placeholder: 'ABCD123456789', name: 'motorVehicelIssuedNumber' },
    { idx:11, label: 'Policy NO', placeholder: 'Enter Policy', name: 'policyNumber' },
    { idx:12, label: 'Expiration Date', placeholder: 'Enter Date', name: 'expirationDate' },
];

const LicenseDetailFormScreen = ( { navigation, route } ) => {

    // console.log(userId)
    const [ userId, setUserId ] = React.useState( auth.currentUser.uid )
    const [ requestId, setRequestId ] = React.useState( '' )
    const [ isFormSubmitting, setIsFormSubmitting ] = React.useState( false )
    const [ loading, setLoading ] = React.useState( false )
    

    const [ frontFaceData, setFrontFaceData ] = React.useState( route.params.frontFaceData );
    const [ backFaceData, setBackFaceData ] = React.useState( route.params.backFaceData );

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            middleName: '',
            lastName: '',
            birthDate: '',
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

    React.useEffect(() => {

        const serverCalls = async () => {
            try {
                if( frontFaceData == '' || backFaceData == '' ) return;
                const requestId = await AsyncStorage.getItem("requestId");
                if( requestId ) {
                    setRequestId( requestId );
                    return;
                }
                const postOptions = {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'X-RapidAPI-Key': Constants.manifest.extra.xRapidApiKey, // '8e83820e14mshe599967c71f82bcp10e33bjsn203c7995644a',
                        'X-RapidAPI-Host': Constants.manifest.extra.xRapidApiHost, // 'driving-license-ocr.p.rapidapi.com'
                    },
                    body: `{
                        "task_id": ${Constants.manifest.extra.taskId},
                        "group_id": ${Constants.manifest.extra.groupId},
                        "data":{
                            "document1":"${frontFaceData}",
                            "document2":"${backFaceData}"
                        }
                    }`
                };
                //URL / BASE64
                await fetch('https://driving-license-ocr.p.rapidapi.com/v3/tasks/async/extract/ind_driving_license', postOptions)
                    .then(response => response.json())
                    .then(response => {
                        console.log( ">> POST Data >> ", response)
                        if( response.request_id ) {
                            setRequestId( response.request_id )
                            AsyncStorage.setItem( "requestId", response.request_id )
                        }
                        // return response.request_id ? response.request_id : null
                    })
                    .catch(err => {
                        console.error(err);
                        Alert.alert( err.errors.detail );
                    })
                    .finally(() => setLoading(false));
            }
            catch(error) {
                console.log(error)
            }
            setFrontFaceData('')
            setBackFaceData('')
        };
        serverCalls();

    }, [frontFaceData, backFaceData])
    // }, [])

    React.useEffect(() => {
        if( requestId ) {
            console.log("Request ID >> ", requestId)
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': Constants.manifest.extra.xRapidApiKey,
                    'X-RapidAPI-Host': Constants.manifest.extra.xRapidApiHost,
                }
            };
            
            fetch(`https://driving-license-ocr.p.rapidapi.com/v3/tasks?request_id=${requestId}`, options)
                .then(response => response.json())
                .then(response => {
                    console.log( ">> GET Data >> ", response)
                    Alert.alert( response.status, response.message )
                })
                .catch(err => console.error(err));
        }
        //   >> GET Data >>  Array [
        //     Object {
        //       "action": "extract",
        //       "completed_at": "2022-09-21T02:16:08+05:30",
        //       "created_at": "2022-09-21T02:16:00+05:30",
        //       "error": "INVALID_IMAGE",
        //       "group_id": "8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e",
        //       "message": "Image is non compliant to request/quality standard",
        //       "request_id": "f7220db6-e3dd-46a1-93ac-eb4ab30c0ae6",
        //       "status": "failed",
        //       "task_id": "74f4c926-250c-43ca-9c53-453e87ceacd1",
        //       "type": "ind_driving_license",
        //     }

    }, [ requestId ] );
   
    // Handlers
    const onSubmit = data => {
        setIsFormSubmitting( true );
        // const formData = { ...data, frontFaceData, backFaceData };
        const formData = data;
        // db.collection("licenses").doc( userId ).set({ formData })
        db.collection("CarCollection").doc( userId ).collection("licenses").doc().set( { formData } )
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