import { ImageSourcePropType } from "react-native";

export interface Patterns {
  title: string;
  description: string;
  patterns: Pattern[];
}

export interface Pattern {
  name: string;
  description: string;
  image: ImageSourcePropType;
}
