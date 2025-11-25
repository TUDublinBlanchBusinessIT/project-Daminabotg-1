import { View, Text, StyleSheet } from "react-native";

export default function SummaryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Summary</Text>
      <Text>Results will appear here.</Text>
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
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
