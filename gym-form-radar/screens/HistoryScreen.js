import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export default function HistoryScreen() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // Firestore query: get workouts ordered by newest first
    const workoutsRef = collection(db, "workouts");
    const q = query(workoutsRef, orderBy("timestamp", "desc"));

    // Live listener (updates automatically)
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWorkouts(data);
    });

    return unsubscribe;
  }, []);

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.exercise}>{item.exercise}</Text>
      <Text style={styles.details}>
        Reps: {item.reps} | Score: {item.score}
      </Text>
      <Text style={styles.date}>{formatDate(item.timestamp)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout History</Text>

      {workouts.length === 0 ? (
        <Text style={styles.empty}>No workouts recorded yet.</Text>
      ) : (
        <FlatList
          data={workouts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  item: {
    backgroundColor: "#f1f1f1",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  exercise: {
    fontSize: 20,
    fontWeight: "bold",
  },
  details: {
    fontSize: 16,
    marginTop: 5,
  },
  date: {
    fontSize: 14,
    marginTop: 5,
    color: "#555",
  },
  empty: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 40,
    color: "#777",
  },
});
