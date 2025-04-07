import { registerRootComponent } from "expo";

import { initializeKakaoSDK } from "@react-native-kakao/core";
import App from "./App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

registerRootComponent(App);

initializeKakaoSDK("c55cbbae2ff680cb54be87022180a1c8");
