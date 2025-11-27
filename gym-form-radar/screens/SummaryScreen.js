import { View, Text, StyleSheet } from "react-native";

export default function SummaryScreen({ route }) {
  const { exercise, reps, score } = route.params;

  const getFeedback = () => {
    if (score < 40) return "Your form needs improvement. Focus on technique.";
    if (score < 70) return "Decent form! Work on consistency.";
    if (score < 90) return "Good form! You're doing well.";
    return "Excellent form! Keep pushing your limits!";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Summary</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Exercise:</Text>
        <Text style={styles.value}>{exercise}</Text>

        <Text style={styles.label}>Reps:</Text>
        <Text style={styles.value}>{reps}</Text>

        <Text style={styles.label}>Score:</Text>
        <Text style={[styles.value, styles.score]}>{score}/100</Text>

        <Text style={styles.feedback}>{getFeedback()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    elevation: 5,
  },
  label: {
    fontSize: 18,
    color: "#555",
    marginTop: 10,
  },
  value: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111",
  },
  score: {
    color: "dodgerblue",
  },
  feedback: {
    marginTop: 20,
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
    color: "#333",
  },
});
