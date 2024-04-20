import { SafeAreaProvider as SafeAreaProviderApp } from "react-native-safe-area-context";

interface Props {
  children: React.ReactNode;
}

const SafeAreaProvider = ({ children }: Props) => {
  return <SafeAreaProviderApp>{children}</SafeAreaProviderApp>;
};

export default SafeAreaProvider;
