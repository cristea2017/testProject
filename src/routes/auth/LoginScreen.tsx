import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import TextInputView from '~/components/authComponents/TextInputView';
import {setLogged} from '~/redux/Apps/AppStore';

const LoginScreen = ({navigation}) => {
  const [email, setemail] = useState('email');
  const [password, setpassword] = useState('password');

  // user from redux
  const user = useSelector(state => state.AppStore.user);
  const dispatch = useDispatch();

  function validateFields() {
    if (user.email == email && user.password == password) {
      dispatch(setLogged(true));
      navigation.navigate('HomeScreen');
    } else {
      Alert.alert(
        'Error',
        'You enter wrong creditals !!!. Verify all inputs and try again',
      );
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
