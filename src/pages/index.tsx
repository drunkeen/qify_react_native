import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
  Dimensions,
} from "react-native";
import { NavProps } from "../../App";
import Title from "../components/Title";

const Index = ({ navigation, route, window }: NavProps) => {
  return (
    <View style={styles.homeContainer}>
      <Title />

      <Text style={styles.quoteText}>Votre playlist collaborative</Text>

      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          disabled={false}
          onPress={() => navigation.navigate("Room")}
        >
          <Text style={styles.buttonText}>Créer</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          disabled={false}
          onPress={() => console.log("Rejoindre")}
        >
          <Text style={styles.buttonText}>Rejoindre</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  homeContainer: {
    backgroundColor: "#1e1e1e",

    flex: 1,

    paddingTop: 16,

    justifyContent: "center",
    alignItems: "center",
  },
  quoteText: {
    margin: 0,
    maxWidth: "90%",
    textAlign: "center",
    fontSize: 22,
    color: "#efefef",
  },
  buttonContainer: {
    display: "flex",
    width: "70%",

    justifyContent: "center",
    paddingBottom: 64,
    paddingTop: 64,
  },
  button: {
    padding: 16,
    borderColor: "#808080",
    borderRadius: 10,
    borderWidth: 1,

    width: "100%",

    marginBottom: 16,
  },
  buttonText: {
    color: "#efefef",
    textAlign: "center",
    fontWeight: "500",
  },
});

export default Index;
