import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavProps } from "../../App";
import Title from "../components/Title";

const styles = StyleSheet.create({
  text: {
    color: "#efefef",
    textAlign: "justify",
  },
  links: {},
  check_list: {},
  h2_decorator: {
    fontSize: 24,
    marginBottom: 12,
  },
  bold: {},
  title: {},
  underline: {},
  container: {
    backgroundColor: "#1e1e1e",
    minHeight: "100vh",
    minWidth: "100vw",
  },
  containerText: {
    margin: 12,
  },
  containerTitle: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    padding: 24,
  },
});

const Infos = ({ route, navigation, window }: NavProps) => (
  <View style={styles.container}>
    <View style={styles.containerTitle}>
      <Title />
    </View>

    <View style={styles.containerText}>
      <Text style={styles.text}>
        Qify ou Q-ify, de l&apos;anglais queue-ify et du français kiffer
      </Text>
    </View>

    <View style={styles.containerText}>
      <Text style={[styles.text, styles.h2_decorator]}>
        Comment utiliser Qify ?
      </Text>
      <Text style={styles.text}>
        Qify est un logiciel complètement gratuit d&apos;usage. Qify utilise
        votre compte Spotify en ajoutant des musiques dans la file
        d&apos;attente. Cela permet à tout le monde de pouvoir participer tout
        en s&apos;assurant que personne n&apos;ai accès à votre compte Spotify
        ou votre appareil
      </Text>
    </View>

    {/* <Text>
    </Text>

    <Text style={style_infos.h2_decorator}>Comment utiliser Qify ?</Text>
    <Text>
      Qify est un logiciel complètement gratuit d&apos;usage. Qify utilise votre
      compte Spotify en ajoutant des musiques dans la file d&apos;attente. Cela
      permet à tout le monde de pouvoir participer tout en s&apos;assurant que
      personne n&apos;ai accès à votre compte Spotify ou votre appareil
    </Text>
    <Text>
      <Text style={style_infos.bold}>Rejoindre un salon:</Text>
      <br />- Scanner le QR code, disponible sur la page de l&apos;admin
      <br />- Utiliser le lien que l&apos;admin peut fournir en cliquant sur le
      QR code
      <br />- Cliquer sur le{" "}
      <Text style={style_infos.links}>bouton rejoindre</Text> sur la page
      d&apos;accueil et de rentrer le code du salon
    </Text>
    <Text>
      <Text style={style_infos.bold}>
        Créer un salon / Déjà admin d&apos;un salon
      </Text>
      <br />- Cliquer sur le
      <Text style={style_infos.links}>bouton créer</Text> sur la page
      d&apos;accueil et de se connecter à Spotify. Tout le reste de la procédure
      est fait automatiquement.
    </Text>
    <Text>
      <Text style={style_infos.bold}>Ajouter des musiques</Text>
      <br />- Tapper dans la barre de recherche la musique désirée et cliquer
      dessus
    </Text>

    <View style={{ paddingLeft: "1em" }}>
      <Text style={[style_infos.bold, style_infos.underline]}>Apple</Text>
      <Text>
        Pour le moment il n&apos;y a pas de moyen pour un appareil Apple
        d&apos;utiliser Qify en tant qu&apos;admin d&apos;un salon.
        <br />
        Cependant, il est possible de télécharger l&apos;application en allant
        dans les paramètres de la page et en cliquant sur Ajouter à la page
        d&apos;accueil
      </Text>

      <Text style={[style_infos.bold, style_infos.underline]}>Android</Text>
      <Text>
        Télécharger l&apos;application directement sur le playstore ou de
        rajouter l&apos;application à votre écran d&apos;accueil grâce au bouton
        sur la page d&apos;accueil.
      </Text>

      <Text style={[style_infos.bold, style_infos.underline]}>Windows</Text>
      <Text>
        Télécharger l&apos;application grâce au bouton sur la page
        d&apos;accueil
      </Text>

      <Text style={[style_infos.bold, style_infos.underline]}>Télévision</Text>
      <Text>
        Pour le moment, il n&apos;y a pas de moyen pour un appareil télé
      </Text>
    </View>

    <Text style={style_infos.h2_decorator}>
      Qui est à l&apos;origine de Qify ?
    </Text>
    <Text>
      Mon nom est <b>Erwan VIVIEN</b>, je suis un developpeur Français de{" "}
      {Math.floor(
        (Date.now() - new Date("2000-09-14").getTime()) /
          (1000 * 60 * 60 * 24 * 365.25)
      )}{" "}
      ans, à l&apos;origine de l&apos;idée et de la réalisation du projet. Vous
      pouvez me contacter sur différents médias (accessibles sur la{" "}
      <Text style={style_infos.links}>page contact</Text>
      ).
    </Text>

    <Text style={style_infos.h2_decorator}>
      Qui contacter en cas de problème ?
    </Text>
    <Text>
      Erwan VIVIEN est la personne a contacter, ses infos sont accessibles sur
      la <Text style={style_infos.links}>page contact</Text>.
    </Text>

    <Text style={style_infos.h2_decorator}>Où faire remonter les bugs ?</Text>
    <Text>
      Tout d&apos;abord merci, venir reporter un bug est un immense privilège.
      Si vous avez quelconque idée de la manière pour le reproduire (appuyer
      rapidement sur un bouton, mettre 3 musiques d&apos;un coup avec des amis,
      etc...) je serai ravi d&apos;essayer de reproduire ce bug et donc de le
      corriger ensuite.
      <br />
      Vous pouvez donc faire remonter les bugs sur cette page :{" "}
      <Text style={style_infos.links}>Faire remonter les bugs</Text>.
    </Text>

    <Text style={style_infos.h2_decorator}>
      Le frère de Qify, <Text style={style_infos.title}>Drunkeen</Text>
    </Text>
    <Text>
      Vous pouvez trouver plus d&apos;informations sur{" "}
      <Text style={style_infos.links}>Drunkeen</Text> sur son site web ou bien
      sur le <Text style={style_infos.links}>github</Text>
    </Text> */}
  </View>
);

export default Infos;
