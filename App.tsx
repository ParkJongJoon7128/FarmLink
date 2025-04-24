import { initializeKakaoSDK } from "@react-native-kakao/core";
import { login } from "@react-native-kakao/user";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";

export default function App() {
  // Logic
  useEffect(() => {
    initializeKakaoSDK(process.env.EXPO_PUBLIC_KAKAO_SDK);
  });

  // View
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Pressable
        style={{
          width: "50%",
          height: "5%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
        onPress={() => {
          login()
            .then((res) => console.log(JSON.stringify(res, null, 5)))
            .catch((err) => console.log(err));
        }}
      >
        <Text style={{ color: "#ffffff" }}>Login</Text>
      </Pressable>
    </View>
  );
}
