import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import TextInputView from '~/components/authComponents/TextInputView';

const LoginScreen = ({navigation}) => {
  const [email, setemail] = useState('email');
  const [password, setpassword] = useState('password');

  // user from redux
  const user = useSelector(state => state.AppStore.user);

  function validateFields() {
    if (user.email == email && user.password == password) {
      navigation.navigate('HomeScreen');
    }
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{padding: 20}}>Enter login details</Text>
      <TextInputView
        placeholder={email}
        formKey={'email'}
        handleFormValueChange={(key, txt) => setemail(txt)}
      />
      <TextInputView
        placeholder={password}
        formKey={'password'}
        handleFormValueChange={(key, txt) => setpassword(txt)}
      />
      <TouchableOpacity
        onPress={() => validateFields()}
        style={{
          backgroundColor: 'green',
          paddingHorizontal: 50,
          borderRadius: 10,
          paddingVertical: 10,
          margin: 30,
        }}>
        <Text style={{color: 'white'}}>LOGIN</Text>
      </TouchableOpacity>
      <View style={{padding: 10, alignItems: 'center'}}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={{color: 'blue'}}>Register now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
