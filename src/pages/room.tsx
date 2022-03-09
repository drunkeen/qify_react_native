import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  Pressable,
  Platform,
} from "react-native";

// import io from "socket.io-client";

import { NavProps } from "../../App";
import RoomPlayer from "../components/RoomPlayer";
import SearchSong from "../components/SearchSong";
import SpotifyQueue, { Song } from "../components/SpotifyQueue";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#1e1e1e",
  },
  searchDiv: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",

    width: "80%",

    marginTop: 16,
  },
  pin: {
    marginRight: 12,

    flex: 1,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    width: 48,

    backgroundColor: "#189453",
    borderRadius: 5,
    fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
  pinText: {
    margin: 0,
    fontSize: 16,
    color: "#e1e1e1",
  },
});

const Room = ({ route, window, navigation }: NavProps) => {
  const roomId = route.params ? route.params["id"] : "ERROR";

  const [isAdmin, setAdmin] = React.useState(true);
  const [room, setRoom] = React.useState({});
  const [search, setSearch] = React.useState("");
  const [playing, setPlaying] = React.useState(true);

  const song1 = {
    title: "Title1",
    album: "Album1",
    image:
      "https://i.pinimg.com/550x/52/6e/7b/526e7b2ce4e4f848e4af723382d698c9.jpg",
  };
  const song2 = {
    title: "Title2",
    album: "Title2",
    image:
      "https://i.pinimg.com/originals/89/e3/03/89e303fcfbb9a7e715f68302a2384ec3.jpg",
  };

  const addSong = () => {};

  const [songs, setSongs] = React.useState<Song[]>([
    { ...song1, key: "1" },
    { ...song2, key: "2" },
    { ...song1, key: "10" },
    { ...song2, key: "20" },
  ]);

  return (
    <>
      <Pressable
        style={styles.main}
        onPress={() => console.log("other")}
        android_disableSound={true}
      >
        <View style={styles.searchDiv}>
          {isAdmin && (
            <Pressable style={styles.pin} onPress={() => console.log("Inv")}>
              <Text style={styles.pinText}>Inv</Text>
            </Pressable>
          )}
          <SearchSong
            addSong={addSong}
            input={[search, setSearch]}
            style={{ flex: 4 }}
          />
        </View>

        <Pressable
          onPress={() => console.log("resetEvent")}
          style={{ backgroundColor: "green", marginTop: 16 }}
        >
          {/* QRCODE Here */}
        </Pressable>

        <FlatList
          style={{ width: "100%" }}
          data={songs}
          renderItem={(props) => (
            <SpotifyQueue song={props.item} index={props.index} />
          )}
        />
      </Pressable>

      {isAdmin && (
        <RoomPlayer
          currentSong={songs?.[0]}
          playState={[playing, setPlaying]}
        />
      )}
    </>
  );
};

export default Room;
