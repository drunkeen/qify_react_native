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

  const [results, setResults] = React.useState<Song[]>([
    { ...song1, key: "1" },
    { ...song2, key: "2" },
    { ...song2, key: "20" },
    { ...song1, key: "10" },
  ]);
  const [myTimeout, setMyTimeout] = React.useState(null as any);

  const [search, setSearch] = input;

  const updateSearch = (text: string) => {
    setSearch(text);

    clearTimeout(myTimeout);
    const timeout = setTimeout(() => {
      // API Call
      // const results = ...;
      // setResults(results);
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
