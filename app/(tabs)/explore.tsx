import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, ScrollView, Text, View } from 'react-native';

// import Mapbox from "@rnmapbox/maps";

// Mapbox.setAccessToken(
//   "MAPBOX_SET_ACCESS_TOKEN"
// );

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Mapbox.MapView style={styles.map} /> */}
        <Text style={styles.title}>CuriCoffee</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#fff",
  },
  container: {
    height: 600,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  map: {
    flex: 1,
  },
});
