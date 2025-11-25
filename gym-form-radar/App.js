import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ScannerScreen from "./screens/ScannerScreen";
import SummaryScreen from "./screens/SummaryScreen";
import HistoryScreen from "./screens/HistoryScreen";
import ExerciseLibraryScreen from "./screens/ExerciseLibraryScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Scanner → Summary stack
function ScannerStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ScannerMain"
        component={ScannerScreen}
        options={{ title: "Scanner" }}
      />
      <Stack.Screen
        name="Summary"
        component={SummaryScreen}
        options={{ title: "Workout Summary" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") iconName = "home";
            else if (route.name === "Exercises") iconName = "list";
            else if (route.name === "Scanner") iconName = "camera";
            else if (route.name === "History") iconName = "time";

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "dodgerblue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Exercises" component={ExerciseLibraryScreen} />
        <Tab.Screen name="Scanner" component={ScannerStack} />
        <Tab.Screen name="History" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
