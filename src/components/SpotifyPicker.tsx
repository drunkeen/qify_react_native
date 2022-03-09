import React from "react";
import {
  GestureResponderEvent,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

type Song = {
  title: string;
  album: string;
  image: string;
  key?: string;
};

type ItemProps = {
  song: Song;
  index?: number;
  onClick?: (event: GestureResponderEvent) => void;
};

const styles = StyleSheet.create({
  card: {
    height: 64,
    flex: 1,
    width: "100%",

    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 5,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    padding: 8,

    backgroundColor: "#189453",

    zIndex: 500,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  },
  text: {
    margin: 0,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  album: { fontSize: 14 },
  image: {
    width: 50,
    height: 50,
  },
});

const defaultOnClick = () => {
  console.log("DEFAULT");
};

const SpotifyPicker = ({ song, index, onClick }: ItemProps) => {
  if (!song || !song.title) return <></>;

  let single = song.album === song.title;

  const style: ViewStyle = index === 0 ? {} : { marginTop: 4 };

  return (
    <Pressable
      style={[style, styles.card]}
      onPress={!onClick ? defaultOnClick : onClick}
      android_disableSound={true}
    >
      <Image
        style={styles.image}
        source={{ uri: song.image }}
        height={50}
        width={50}
        accessibilityLabel={`Image in the queue for song ${song.title}`}
      />

      <View style={[styles.textContainer]}>
        <Text numberOfLines={1} style={[styles.title, styles.text]}>
          {song.title}
        </Text>
        {!single && (
          <Text numberOfLines={1} style={[styles.album, styles.text]}>
            {song.album}
          </Text>
        )}
      </View>

      <Image
        style={styles.image}
        source={{ uri: song.image }}
        height={50}
        width={50}
        accessibilityLabel={`Image in the queue for song ${song.title}`}
      />
    </Pressable>
  );
};

export default SpotifyPicker;
export type { Song };
