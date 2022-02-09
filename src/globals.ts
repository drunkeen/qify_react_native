const defaultColors = {
  black: "#000000",
  blackHalf: "#00000080",
  white: "#f9f4ff",
  grey: "#808080",
  greyHalf: "#80808080",
  text: "#000000",
  background: "#d1ffe4",
  backgroundCode: "#ade8c6",
  backgroundPlayer: "#222325",
  links: "#0090f2",
  logo1: "#29e183",
  logo2: "#26ff9e",
  logo3: "#42ffb7",
  spotify: "#1db954",
};

const colors = {
  night: {
    ...defaultColors,
    text: "#efefef",
    background: "#1e1e1e",
    backgroundCode: "#111619",
    backgroundPlayer: "#3a3d4e",
  },
  bright: defaultColors,
};

/**
 * normal:
 * Black: #000000;
 * BlackHalf: #00000080;
 * White: #f9f4ff;
 * Grey: #808080;
 * GreyHalf: #80808080;
 * Text: #000000;
 * Background: #d1ffe4;
 * BackgroundCode: #ade8c6;
 * BackgroundPlayer: #222325;
 * Links: #0090f2;
 * Logo1: #29e183;
 * Logo2: #26ff9e;
 * Logo3: #42ffb7;
 * Spotify: #1db954;
 *
 * night:
 * Text: #efefef;
 * Background: #1e1e1e;
 * BackgroundCode: #111619;
 * BackgroundPlayer: #3a3d4e;
 */

export { colors };
