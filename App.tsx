import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Providers } from "@/common/config/providers";
import { StackApp } from "@/navigation/stacks";

const App = () => {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Providers>
      <StackApp />
    </Providers>
  );
};

export default App;
