import { Image, StyleSheet, Platform, ScrollView, View, Text } from "react-native";
export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Olá MapBox</Text>
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
    alignItems: "center",
  },
  map: {
    flex: 1,
  },
});
