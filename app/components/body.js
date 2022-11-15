import AppLoading from 'expo-app-loading';
import { ImageBackground, StyleSheet, Text, View, StatusBar, Image, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Icons, Themes, Profiles } from '../../assets/Themes'
import themes from '../../assets/Themes/themes';

export function ProfilePicture() {
    return (
        <View style={styles.container}>
            <ImageBackground source={Profiles.mtl.image} style={styles.image} imageStyle={styles.image}>
                <Text style={{ fontSize:30, color: 'white', fontFamily: "Sydney" }}>
                    MTL
                </Text>
                <Text style={{ fontSize:15, color: 'white', fontFamily: "Sydney" }}>
                    2 miles away
                </Text>
            </ImageBackground>
        </View>
    );
};

export function RecordingBox() {
    return (
        <View style={styles.container} >
          <ImageBackground source={styles.whiteBox} style={styles.whiteBox} imageStyle={styles.whiteBox}>
            <View>
              <Text style={{ fontSize:23, color: 'black', fontFamily: "Sydney", paddingLeft: 15 }}>
                My hottest take
              </Text>
              <View style={styles.PlayerWave}>
                <Image 
                  style={styles.logo}
                  source={Icons.player.light}
                />
                <Image
                  style={styles.waveform}
                  source={Icons.audioWave.light}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
    );
};

    const styles = StyleSheet.create({
      container: {
        alignItems: 'flex-start',
        marginVertical: 10,
      },
      image: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        justifyContent: 'space-between',
        height: 400,
        width: 350,
        borderRadius: 15,
      },
      whiteBox: {
        paddingTop: 15,
        backgroundColor: Themes.light.textSecondary,
        width: 350,
        height: 120,
        borderRadius: 30,
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
      },
      logo: {
        width: 50,
        height: 50,
      },
      waveform: {
        marginLeft: 5,
        width: 277,
        height: 50,
      },
      PlayerWave: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }
    });