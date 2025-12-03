import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gym Form Radar</Text>
      <Text style={styles.subtitle}>Track your workout performance and improve your form using real-time scoring.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
    backgroundColor: "white",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    lineHeight: 26,
  },
});
