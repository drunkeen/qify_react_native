import React from "react";
import {
  Dimensions,
  Image,
  ImageStyle,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LogoImage from "../../assets/qify/qify.svg";

const fontSize = Dimensions.get("window").width / 5.5;

type LogoProps = {
  style: ImageStyle;
};

const Logo = ({ style }: LogoProps) =>
  Platform.select({
    web: <Image style={style} source={require("../../assets/qify/qify.svg")} />,

    default: <LogoImage style={style} />,
  });

const Title = () => (
  <View style={styles.titleContainer}>
    <Logo style={styles.qifyLogo} />
    <Text style={[styles.qifyText, { fontSize }]}>Qify</Text>
  </View>
);

const styles = StyleSheet.create({
  titleContainer: {
    width: "70%",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 200,
    minHeight: 100,
  },
  qifyLogo: {
    width: 96,
    height: 96,
  },
  qifyText: {
    fontWeight: "700",
    color: "#efefef",
    textAlign: "center",
    fontFamily: "Roboto",
    // fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    //              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
});

export default Title;
