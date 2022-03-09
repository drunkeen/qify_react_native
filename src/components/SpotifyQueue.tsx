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
  duration_ms: number;
  uri: string;
  id: number;
};

type ItemProps = {
  song: Song;
  index?: number;
};

const styles = StyleSheet.create({
  card: {
    height: 64,
    flex: 1,
    width: "80%",

    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 5,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    padding: 8,

    backgroundColor: "#A0A0A060",
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

const SpotifyQueue = ({ song, index }: ItemProps) => {
  if (!song || !song.title) return <></>;

  let single = song.album === song.title;
  const style: ViewStyle = index === 0 ? {} : { marginTop: 4 };

  return (
    <Pressable
      style={[style, styles.card]}
      onPress={() => console.log(song.title)}
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
    </Pressable>
  );
};

export default SpotifyQueue;
export type { Song };
