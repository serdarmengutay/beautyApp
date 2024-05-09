import { Dimensions } from "react-native";

export const Width = Dimensions.get("window").width;
export const Height = Dimensions.get("window").height;

export const WidthPercent = (percent: number) => {
  return (Width * percent) / 100;
};

export const HeightPercent = (percent: number) => {
  return (Height * percent) / 100;
};