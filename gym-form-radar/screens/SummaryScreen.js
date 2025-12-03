import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function SummaryScreen({ route, navigation }) {
  const { exercise, reps, score } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Summary</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Exercise:</Text>
        <Text style={styles.value}>{exercise}</Text>

        <Text style={styles.label}>Reps:</Text>
        <Text style={styles.value}>{reps}</Text>

        <Text style={styles.label}>Score:</Text>
        <Text style={styles.score}>{score}/100</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#f1f1f1",
    padding: 25,
    borderRadius: 15,
    marginBottom: 40,
  },
  label: {
    fontSize: 20,
    color: "#555",
    marginTop: 10,
  },
  value: {
    fontSize: 24,
    fontWeight: "500",
  },
  score: {
    fontSize: 32,
    fontWeight: "bold",
    color: "dodgerblue",
    marginTop: 15,
  },
  button: {
    backgroundColor: "dodgerblue",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
