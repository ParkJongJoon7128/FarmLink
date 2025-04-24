import { initializeKakaoSDK } from "@react-native-kakao/core";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import LoginScreen from "./src/screens/LoginScreen";

const Stack = createStackNavigator<ROOT_NAVIGATION>();

export default function App() {
  // Logic
  useEffect(() => {
    initializeKakaoSDK(process.env.EXPO_PUBLIC_KAKAO_SDK);
  });

  // View
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
