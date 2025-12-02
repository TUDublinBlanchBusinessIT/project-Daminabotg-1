import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function ExerciseLibraryScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Exercise Library</Text>

      {/* Squat */}
      <View style={styles.card}>
        <Text style={styles.exercise}>Squat</Text>
        <Text style={styles.description}>
          • Keep your chest up{"\n"}
          • Push knees out{"\n"}
          • Sit back into your hips{"\n"}
          • Don't let your heels lift off the ground
        </Text>
      </View>

      {/* Bench Press */}
      <View style={styles.card}>
        <Text style={styles.exercise}>Bench Press</Text>
        <Text style={styles.description}>
          • Keep shoulder blades tight{"\n"}
          • Lower bar to mid–chest{"\n"}
          • Wrists straight, not bent{"\n"}
          • Drive through your feet
        </Text>
      </View>

      {/* Deadlift */}
      <View style={styles.card}>
        <Text style={styles.exercise}>Deadlift</Text>
        <Text style={styles.description}>
          • Keep back neutral{"\n"}
          • Hinge at the hips{"\n"}
          • Bar close to shins{"\n"}
          • Drive with legs then hips
        </Text>
      </View>

      {/* Shoulder Press */}
      <View style={styles.card}>
        <Text style={styles.exercise}>Shoulder Press</Text>
        <Text style={styles.description}>
          • Brace core{"\n"}
          • Press straight overhead{"\n"}
          • Don't arch lower back{"\n"}
          • Lock out elbows gently
        </Text>
      </View>

      {/* Bicep Curl */}
      <View style={styles.card}>
        <Text style={styles.exercise}>Bicep Curl</Text>
        <Text style={styles.description}>
          • Keep elbows fixed to your sides{"\n"}
          • Don't swing the weights{"\n"}
          • Control the lowering phase{"\n"}
          • Full range of motion
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f1f1f1",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  exercise: {
    fontSize: 22,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    color: "#555",
    lineHeight: 22,
  },
});
