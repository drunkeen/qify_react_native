import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

export const tabHeight = 50;

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    display: "flex",
    height: tabHeight,
    backgroundColor: "#1E1E1E",
  },
  navButton: {
    justifyContent: "center",
    flex: 1,
  },
  navButtonText: {
    color: "#efefef",
    alignSelf: "center",
    padding: 8,
    borderRadius: 4,
  },
});

type TabItemProps = BottomTabBarProps & {
  route: {
    key: string;
    name: string;
  };
  index: number;
};

const TabItem = ({
  state,
  descriptors,
  navigation,
  route,
  index,
}: TabItemProps) => {
  const { options } = descriptors[route.key];
  const label =
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name;

  const isFocused = state.index === index;

  const onPress = () => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      // The `merge: true` option makes sure that the params inside the tab screen are preserved
      navigation.navigate({
        name: route.name,
        params: route.name === "Room" ? { id: "DEFAULT" } : {},
        merge: true,
      });
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: "tabLongPress",
      target: route.key,
    });
  };

  const dynStyle: StyleProp<ViewStyle> = isFocused
    ? { borderBottomColor: "#444444", borderBottomWidth: 8 }
    : {};

  return (
    <Pressable
      key={route.name}
      onPress={onPress}
      onLongPress={onLongPress}
      style={[dynStyle, styles.navButton]}
      android_disableSound={true}
    >
      <Text style={styles.navButtonText}>{label}</Text>
    </Pressable>
  );
};

const MyTabBar = (props: BottomTabBarProps) => (
  <View style={styles.navContainer}>
    {props.state.routes.map((route, index) => (
      <TabItem key={route.name} {...props} index={index} route={route} />
    ))}
  </View>
);

export default MyTabBar;
