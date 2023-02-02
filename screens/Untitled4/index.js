import { Pressable } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = ({
  navigation
}) => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => navigation.navigation.navigate("Untitled6", {})}><View style={styles.elCfXaDw}><Text style={styles.UvPTCBzZ}>START</Text></View></Pressable><ImageBackground style={styles.vhMQtaAO} source={require("./escudo.png")} resizeMode="cover"></ImageBackground></ScrollView>
    <View style={styles.XqGQWGyw}><Text style={styles.znecCjPq}>EXIT</Text></View></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  elCfXaDw: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    left: 20,
    top: 472
  },
  XqGQWGyw: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    left: 180,
    top: 480
  },
  vhMQtaAO: {
    width: 319,
    height: 377,
    position: "absolute",
    left: 19,
    top: 26
  },
  UvPTCBzZ: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 18,
    borderRadius: 0,
    position: "absolute",
    left: 40,
    top: 20,
    fontWeight: "900",
    color: "#0e6ee9"
  },
  znecCjPq: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 48,
    top: 21,
    fontWeight: "900"
  }
});
export default Untitled4;