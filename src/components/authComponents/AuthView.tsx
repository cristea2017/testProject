import React from 'react'
import { View, Text, TextInput, TextInputProps } from 'react-native'

interface AuthView {
    placeholder?: string;
    handleFormValueChange: (formKey: string, event: string) => void;
    formKey: string;
    txtProps: TextInputProps;
}

const AuthView = ({ placeholder, formKey, handleFormValueChange, txtProps }: AuthView) => {
    console.log('textInputProps', txtProps);

    return (
        <View style={{ height: 100, backgroundColor: '#ffff', padding: 20, borderRadius: 10 }}>
            <TextInput
                style={{
                    width: 300, color: 'black', margin: 10,
                    height: 40,
                    borderColor: '#7a42f4',
                    borderWidth: 1
                }}
                placeholder={placeholder || "placeholder"}
                autoCapitalize={'none'}
                onChange={(event) => handleFormValueChange(formKey, event.nativeEvent.text)}
                {...txtProps}
            />
        </View>
    )
}

export default AuthView
