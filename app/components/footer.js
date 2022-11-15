import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Icons, Themes } from '../../assets/Themes'
  
export function DiscoverIcon() {
    return (
    <View style={styles.container}>
        <Image
            style={styles.tinyLogo}
            source={Icons.discover.light}
        />
        <Text style={{ fontSize:18, color: 'white' }}>
            Discover
        </Text>
    </View>
    )
}

export function MatchesIcon() {
    return (
    <View style={styles.container}>
        <Image
            style={styles.tinyLogo}
            source={Icons.heart.light}
    />
        <Text style={{ fontSize:18, color: 'white' }}>
            Matches
        </Text>
    </View>)
}

export function MessagesIcon() {
    return (
    <View style={styles.container}>
        <Image
            style={styles.tinyLogo}
            source={Icons.messages.light}
        />
        <Text style={{ fontSize:18, color: 'white' }}>
            DMs
        </Text>
    </View>)
}  
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 5,
      paddingHorizontal: 20,
      alignItems: 'center',
    },
    tinyLogo: {
      width: 35,
      height: 35,
    },
    logo: {
      width: 66,
      height: 58,
    },
});

