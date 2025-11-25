import { View, Text, StyleSheet } from "react-native";

export default function ExerciseLibraryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercise Library</Text>
      <Text>A list of exercises will go here.</Text>
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
