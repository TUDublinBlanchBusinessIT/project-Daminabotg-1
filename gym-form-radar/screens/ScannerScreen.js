import { View, Text, StyleSheet, Button } from "react-native";

export default function ScannerScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scanner</Text>

      <Button
        title="Finish Set (Go to Summary)"
        onPress={() => navigation.navigate("Summary")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
