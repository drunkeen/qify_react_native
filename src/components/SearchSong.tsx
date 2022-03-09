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
};

const SearchSong = ({ style, input }: SearchSongProps) => {
  const [results, setResults] = React.useState<Song[]>([]);
  const [myTimeout, setMyTimeout] = React.useState(null as any);

  const [search, setSearch] = input;

  const updateSearch = (text: string) => {
    console.log("Issou", text);
    setSearch(text);

    clearTimeout(myTimeout);
    const timeout = setTimeout(() => {
      setResults([
        {
          title: "Title1",
          album: "Album1",
          image:
            "https://i.pinimg.com/550x/52/6e/7b/526e7b2ce4e4f848e4af723382d698c9.jpg",
          key: "Issou",
        },
      ]);
    }, 400);
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
              onClick={() => console.log(`Index: ${props.index}`)}
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
