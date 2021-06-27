import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import AnimationView from '~/components/homeComponents/AnimationView';
import ChartView from '~/components/homeComponents/ChartView';
import {setLogged} from '~/redux/Apps/AppStore';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 20}}>
        <Text>Home screen</Text>
        <ChartView />
        <View style={{padding: 50}} />
        <AnimationView />

        {/* future task */}
        <TouchableOpacity
          onPress={() => {
            dispatch(setLogged(false));
            navigation.replace('LoginScreen');
          }}
          style={{
            width: 200,
            height: 50,
            backgroundColor: 'blue',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white'}}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
