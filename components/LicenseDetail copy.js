import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React from 'react';
import { useForm, Controller } from "react-hook-form";

const formValues = {
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
  };

const LicenseDetail = () => {
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
    <View>

        <Controller
            control={ control }
            rules={{ requires: true }}
            render={ ( { field: { onChange, onBlur, value } } ) => (
                <TextInput
                    onTextInput={onChange}
                    onBlur={onBlur}
                    value={value}
                    style={styles.input}
                />
            )}
            name="firstName"
        />

        <Controller
            control={ control }
            rules={{ requires: true }}
            render={ ( { field: { onchange, onBlur, value } } ) => (
                <TextInput
                    onTextInput={ text => onChange( text ) }
                    onBlur={onBlur}
                    value={value}
                    style={styles.input}
                />
            )}
            name="middleName"
        />

        <Controller
            control={ control }
            rules={{ requires: true }}
            render={ ( { field: { onchange, onBlur, value } } ) => (
                <TextInput
                    onTextInput={ text => onChange( text ) }
                    onBlur={onBlur}
                    value={value}
                    style={styles.input}
                />
            )}
            name="lastName"
        />

        <Controller
            control={ control }
            rules={{ requires: true }}
            render={ ( { field: { onchange, onBlur, value } } ) => (
                <TextInput
                    onTextInput={ text => onChange( text ) }
                    onBlur={onBlur}
                    value={value}
                    style={styles.input}
                />
            )}
            name="suffixLicense"
        />

        <Controller
            control={ control }
            rules={{ requires: true }}
            render={ ( { field: { onchange, onBlur, value } } ) => (
                <TextInput
                    onTextInput={ text => onChange( text ) }
                    onBlur={onBlur}
                    value={value}
                    style={styles.input}
                />
            )}
            name="licenseNumber"
        />

        <Controller
            control={ control }
            rules={{ requires: true }}
            render={ ( { field: { onchange, onBlur, value } } ) => (
                <TextInput
                    onTextInput={ text => onChange( text ) }
                    onBlur={onBlur}
                    value={value}
                    style={styles.input}
                />
            )}
            name="vehicelNumber"
        />

        <Controller
            control={ control }
            rules={{ requires: true }}
            render={ ( { field: { onchange, onBlur, value } } ) => (
                <TextInput
                    onTextInput={ text => onChange( text ) }
                    onBlur={onBlur}
                    value={value}
                    style={styles.input}
                />
            )}
            name="brandName"
        />

        <Controller
            control={ control }
            rules={{ requires: true }}
            render={ ( { field: { onchange, onBlur, value } } ) => (
                <TextInput
                    onTextInput={ text => onChange( text ) }
                    onBlur={onBlur}
                    value={value}
                    style={styles.input}
                />
            )}
            name="model"
        />

        <Controller
            control={ control }
            rules={{ requires: true }}
            render={ ( { field: { onchange, onBlur, value } } ) => (
                <TextInput
                    onTextInput={ text => onChange( text ) }
                    onBlur={onBlur}
                    value={value}
                    style={styles.input}
                />
            )}
            name="year"
        />

        <Controller
            control={ control }
            rules={{ requires: true }}
            render={ ( { field: { onchange, onBlur, value } } ) => (
                <TextInput
                    onTextInput={ text => onChange( text ) }
                    onBlur={onBlur}
                    value={value}
                    style={styles.input}
                />
            )}
            name="motorVehicelIssuedNumber"
        />

        <Controller
            control={ control }
            rules={{ requires: true }}
            render={ ( { field: { onchange, onBlur, value } } ) => (
                <TextInput
                    onTextInput={ text => onChange( text ) }
                    onBlur={onBlur}
                    value={value}
                    style={styles.input}
                />
            )}
            name="policyNumber"
        />

        <Controller
            control={ control }
            rules={{ requires: true }}
            render={ ( { field: { onchange, onBlur, value } } ) => (
                <TextInput
                    onTextInput={ text => onChange( text ) }
                    onBlur={onBlur}
                    value={value}
                    style={styles.input}
                />
            )}
            name="expirationDate"
        />

    </View>
  )
}

export default LicenseDetail

const styles = StyleSheet.create({
    input: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
})