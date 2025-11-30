import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

export default function ScannerScreen({ navigation }) {
  const [exercise, setExercise] = useState("Squat");
  const [reps, setReps] = useState("");
  const [formQuality, setFormQuality] = useState(2);

  // Scoring algorithm
  const calculateScore = () => {
    const baseScore = parseInt(reps) * 5;
    const modifiers = [0.6, 0.8, 1.0, 1.1];
    const finalScore = Math.min(100, baseScore * modifiers[formQuality]);
    return Math.round(finalScore);
  };

  // Save workout to Firebase
  const saveWorkout = async () => {
    console.log("Saving workout...");

    try {
      await addDoc(collection(db, "workouts"), {
        exercise: exercise,
        reps: parseInt(reps),
        score: calculateScore(),
        timestamp: Date.now(),
      });
      console.log("Workout saved!");
    } catch (error) {
      console.log("Error saving workout:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scanner</Text>

      {/* Exercise Picker */}
      <Text style={styles.label}>Choose Exercise:</Text>
      <Picker
        selectedValue={exercise}
        onValueChange={(itemValue) => setExercise(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Squat" value="Squat" />
        <Picker.Item label="Bench Press" value="Bench Press" />
        <Picker.Item label="Deadlift" value="Deadlift" />
        <Picker.Item label="Shoulder Press" value="Shoulder Press" />
        <Picker.Item label="Bicep Curl" value="Bicep Curl" />
      </Picker>

      {/* Reps Input */}
      <Text style={styles.label}>Enter Reps:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="0"
        value={reps}
        onChangeText={setReps}
      />

      {/* Form Quality Slider */}
      <Text style={styles.label}>Form Quality:</Text>
      <Slider
        style={{ width: 250, height: 40 }}
        minimumValue={0}
        maximumValue={3}
        step={1}
        value={formQuality}
        onValueChange={(value) => setFormQuality(value)}
      />
      <Text style={styles.sliderValue}>
        {["Poor", "Okay", "Good", "Excellent"][formQuality]}
      </Text>

      {/* Finish Set */}
      <TouchableOpacity
        onPress={() => {
          saveWorkout();
          navigation.navigate("Summary", {
            exercise,
            reps,
            score: calculateScore(),
          });
        }}
        style={styles.finishButton}
      >
        <Text style={styles.finishButtonText}>FINISH SET</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  picker: {
    backgroundColor: "#f1f1f1",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
  },
  sliderValue: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 18,
  },
  finishButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  finishButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
