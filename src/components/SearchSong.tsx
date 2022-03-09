import axios from "axios";
import React from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import SpotifyPicker, { Song } from "./SpotifyPicker";

type SearchSongProps = {
  addSong: () => void;
  style?: ViewStyle;
  input: [string, React.Dispatch<React.SetStateAction<string>>];
  roomId: string;
};

const pushSong = async (song: Song, roomId: string) => {
  const res = await axios.post(`http://127.0.0.1:8080/songs/${roomId}`, song);
  if (res.status !== 200 || !res.data.success) {
    return false;
  }

  return true;
};

const SearchSong = ({ style, input, roomId }: SearchSongProps) => {
  const [results, setResults] = React.useState<Song[]>([]);
  const [myTimeout, setMyTimeout] = React.useState(null as any);

  const [search, setSearch] = input;

  const updateSearch = (text: string) => {
    setSearch(text);
    clearTimeout(myTimeout);

    if (text === "") {
      return;
    }

    const timeout = setTimeout(async () => {
      const res = await axios.get(
        `http://127.0.0.1:8080/search/${roomId}?q=${text}&offset=0`
      );
      if (res.status !== 200 || !res.data.success) {
        return;
      }
      const data = res.data.data;
      const songs = data.items;

      setResults(songs);
    }, 200);
    setMyTimeout(timeout);
  };

  return (
    <>
      <TextInput
        style={[styles.input, style]}
        onChangeText={updateSearch}
        placeholder="Artistes ou titres"
        placeholderTextColor={"grey"}
        spellCheck={false}
        autoCorrect={false}
        value={search}
      />

      {search !== "" && (
        <FlatList
          style={styles.modal}
          data={results}
          renderItem={(props) => (
            <SpotifyPicker
              song={props.item}
              index={props.index}
              onClick={() => pushSong(props.item, roomId)}
            />
          )}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 48,
    padding: 10,

    fontSize: 18,
    color: "#1DB954",

    borderBottomWidth: 2,
  },
  modal: {
    position: "absolute",
    top: 0 + 48 + 16,
    left: 0,
    right: 0,
    height: (Dimensions.get("window").height * 3) / 4 - 16,
    zIndex: 500,

    backgroundColor: "#1E1E1E",
    borderRadius: 8,

    padding: 16,
  },
});

export default SearchSong;
