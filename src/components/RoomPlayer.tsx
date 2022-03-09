import React from "react";
import {
  Animated,
  Dimensions,
  Easing,
  GestureResponderEvent,
  Image,
  ImageStyle,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Song } from "./SpotifyQueue";

import ImageNext from "../../assets/player/next1.svg";
import ImagePlay from "../../assets/player/play1.svg";
import ImagePause from "../../assets/player/pause1.svg";

type RoomPlayerProps = {
  currentSong: Song | null;
  playState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

type ImageProps = {
  style: ImageStyle;
};

const Next = ({ style }: ImageProps) =>
  Platform.select({
    web: (
      <Image style={style} source={require("../../assets/player/next1.svg")} />
    ),
    default: <ImageNext style={style} />,
  });

const Play = ({ style }: ImageProps) =>
  Platform.select({
    web: (
      <Image style={style} source={require("../../assets/player/play1.svg")} />
    ),
    default: <ImagePlay style={style} />,
  });

const Pause = ({ style }: ImageProps) =>
  Platform.select({
    web: (
      <Image style={style} source={require("../../assets/player/pause1.svg")} />
    ),
    default: <ImagePause style={style} />,
  });

const RoomPlayer = ({ currentSong, playState }: RoomPlayerProps) => {
  if (!currentSong) {
    return <></>;
  }

  const image = currentSong.image || "assets/no_image.svg";
  const title = currentSong.title || "None";
  const duration = currentSong.duration_ms || 3000;

  const [playing, setPlaying] = playState;
  const IconPlayer = playing === true ? Pause : Play;

  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    /// (Current time / Total time) * Dimension.height
    const ratio = 0;
    fadeAnim.setValue(ratio);

    /// Current time / Total time
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 1,
      duration,
      easing: Easing.linear,
    }).start();

    fadeAnim.addListener((event) => {
      if (event.value >= 1) console.log("DONE");
    });
  }, []);

  const playPause = (event: GestureResponderEvent) => {
    // console.log({ playing });

    if (playing) {
      // Animated.timing(fadeAnim, {
      //   toValue: 1,
      //   useNativeDriver: false,
      // }).stop();

      fadeAnim.stopAnimation();

      console.log("Pause");
    } else {
      fadeAnim.setValue(0);

      /// Current time / Total time
      Animated.timing(fadeAnim, {
        useNativeDriver: true,
        toValue: 1,
        duration,
        easing: Easing.linear,
      }).start();
      console.log("Play");
    }

    setPlaying(!playing);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerInfo}>
          <Image source={{ uri: image }} style={styles.image} />
          <Text style={{ fontWeight: "bold" }}>{title}</Text>
        </View>

        <View style={styles.containerInfo}>
          <Pressable onPress={playPause}>
            <IconPlayer style={{ height: 50, width: 50 }} />
          </Pressable>
          <View style={{ width: 12 }} />
          <Pressable onPress={() => console.log("Next")}>
            <Next style={{ height: 36, width: 36 }} />
          </Pressable>
        </View>
      </View>

      <Animated.View
        style={[
          styles.player,
          {
            transform: [
              {
                translateX: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-Dimensions.get("window").width / 2, 0],
                }),
              },
              { scaleX: fadeAnim },
            ],
          },
        ]}
      ></Animated.View>
    </>
  );
};

const playerHeight = 3;

const styles = StyleSheet.create({
  player: {
    backgroundColor: "#42FFB7",
    height: playerHeight,
    bottom: 0,
    left: 0,
  },
  container: {
    position: "absolute",
    bottom: playerHeight,
    width: "100%",
    height: 64,

    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",

    backgroundColor: "#189453",
  },
  containerInfo: {
    flex: 1,

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  image: { width: 50, height: 50, marginRight: 12 },
});

export default RoomPlayer;
