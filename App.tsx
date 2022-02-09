// import "react-native-gesture-handler";
import React from "react";
import {
  AppRegistry,
  Dimensions,
  Platform,
  ScaledSize,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase, Route } from "@react-navigation/routers";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";

import Index from "./src/pages";
import Room from "./src/pages/room";
import MyTabBar from "./src/components/Tab";

export type NavProps = {
  navigation: StackNavigationProp<ParamListBase, string>;
  route: Route<string>;
  window?: ScaledSize;
};

export interface HeaderProps extends NavProps {
  title: string;
}

const Wrapper: React.FC = (props) => (
  <SafeAreaView style={styles.safeview}>{props.children}</SafeAreaView>
);

const header = Object.entries({
  Qify: (props: NavProps) => {
    console.log("REFRESH:", "Qify");
    return (
      <Wrapper>
        <Index {...props} />
      </Wrapper>
    );
  },
  Room: (props: NavProps) => {
    console.log("REFRESH:", "Room");
    return (
      <Wrapper>
        <Room {...props} />
      </Wrapper>
    );
  },
  // Infos: (props: NavProps) => {
  //   console.log("REFRESH:", "Infos");
  //   // return <Text style={{ alignSelf: "center" }}>Infos</Text>;
  //   return <Infos {...props} />;
  // },
  // Contact: (props: NavProps) => {
  //   console.log("REFRESH:", "Contact");
  //   return <Text style={{ alignSelf: "center" }}>Contact</Text>;
  // },
});

const Tab = createBottomTabNavigator();

const linking = {
  prefixes: ["https://qify.app", "https://www.qify.app", "qify://"],
  config: {
    screens: {
      Qify: "",
      Room: "room/:id",
    },
  },
};

const App = () => (
  <NavigationContainer linking={linking}>
    <Tab.Navigator
      initialRouteName={"Qify"}
      backBehavior="history"
      tabBar={MyTabBar}
      screenOptions={{
        headerShown: false,
      }}
    >
      {header.map(([name, component]) => (
        <Tab.Screen key={name} name={name} component={component} />
      ))}
    </Tab.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  safeview: { flex: 1, backgroundColor: "#1E1E1E" },
});

AppRegistry.registerComponent("MyApp", () => App);
export default App;
