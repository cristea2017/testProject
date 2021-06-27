import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import AnimationView from '~/components/homeComponents/AnimationView';
import ChartView from '~/components/homeComponents/ChartView';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 20}}>
        <Text>Home screen</Text>
        <ChartView />
        <View style={{padding: 50}} />
        <AnimationView />

        {/* future task */}
        {/* <TouchableOpacity>
          <Text>Log Out</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
