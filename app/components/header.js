import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { useFonts } from 'expo-font';

import { Themes, Icons } from "../../assets/Themes"


export function AppName() {
  return (
  <View style={styles.header}>
    <Image
      style={styles.tinyLogo}
      source={Icons.menu.light}
    />
    <Text style={{ fontSize:40, color: 'black', fontFamily: "SydneyBold" }}>
      ensom
    </Text>
    <Image
      style={styles.tinyLogo}
      source={Icons.sun}
    />
  </View>)
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 35,
    height: 35,
  },
  logo: {
    width: 66,
    height: 58,
  },
  header: {
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop: 45,
    marginLeft: 17,
    marginRight: 17,
  },
  });
  

