import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Uber App</Text>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
