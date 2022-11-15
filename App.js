import AppLoading from 'expo-app-loading';
import { ImageBackground, StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import  {AppName} from './app/components/header'
import {DiscoverIcon, MatchesIcon, MessagesIcon} from './app/components/footer'
import {ProfilePicture, RecordingBox} from './app/components/body'

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/


  return (
    <View style={styles.container}>
      <AppName/>
    <View style={styles.body}>
      <ProfilePicture/>
      <RecordingBox/>
    </View>
    <View style={styles.footer}>
      <DiscoverIcon></DiscoverIcon>
      <MatchesIcon></MatchesIcon>
      <MessagesIcon></MessagesIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    justifyContent: 'space-between',
  },
  body: {
    flex: 9,
    backgroundColor: Themes.light.bg,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Themes.light.navigation,
    justifyContent: 'center',
    // marginTop: 110,
  },
});
