import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import DestinationSearch from "./src/screens/DestinationSearch";
import SearchResults from "./src/screens/SearchResults";
import HomeMap from "./src/components/HomeMap";
import * as Location from "expo-location";


export default function App() {


    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    // live location things 👇

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);


    // end of live location thing 👆


    return (
      // <SafeAreaView>
        <View style={styles.container}>
          {/*<HomeScreen />*/}
            <DestinationSearch />
          {/*  <SearchResults />*/}
          <StatusBar style="auto" />
        </View>
      // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
