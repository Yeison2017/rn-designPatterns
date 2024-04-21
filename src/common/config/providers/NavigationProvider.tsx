import { NavigationContainer } from "@react-navigation/native";

interface Props {
  children: React.ReactNode;
}

const NavigationProvider = ({ children }: Props) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

export default NavigationProvider;
