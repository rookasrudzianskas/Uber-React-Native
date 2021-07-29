import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import DestinationSearch from "./src/screens/DestinationSearch";
import SearchResults from "./src/screens/SearchResults";
import HomeMap from "./src/components/HomeMap";

export default function App() {
  return (
      // <SafeAreaView>
        <View style={styles.container}>
          {/*<HomeScreen />*/}
            {/*<DestinationSearch />*/}
            <SearchResults />
          <StatusBar style="auto" />
        </View>
      // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
