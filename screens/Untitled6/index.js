import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled6 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.UManbXxZ} source={require("./escudo.png")} resizeMode="cover"></ImageBackground><Text style={styles.VRUiqDyk}>Lorem ipsum…</Text></ScrollView>
    <ImageBackground style={styles.ddgDtwlG} source={require("./ferro.png")}></ImageBackground><ImageBackground style={styles.JgNtJeoP} source={require("./barcelona.png")}></ImageBackground><ImageBackground style={styles.vFVsIhvm} source={require("./1.png")}></ImageBackground><Text style={styles.YLhEvNDu}>Lorem ipsum…</Text><Text style={styles.gMIUYaIm}>Lorem ipsum…</Text><Text style={styles.eZQgGKXq}>Lorem ipsum…</Text></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  UManbXxZ: {
    width: 106,
    height: 112,
    position: "absolute",
    left: 19,
    top: 15
  },
  ddgDtwlG: {
    width: 106,
    height: 112,
    position: "absolute",
    left: 19,
    top: 136
  },
  JgNtJeoP: {
    width: 106,
    height: 112,
    position: "absolute",
    left: 19,
    top: 252
  },
  vFVsIhvm: {
    width: 106,
    height: 112,
    position: "absolute",
    left: 19,
    top: 374
  },
  VRUiqDyk: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 143,
    top: 22
  },
  YLhEvNDu: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 143,
    top: 374
  },
  gMIUYaIm: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 142,
    top: 146
  },
  eZQgGKXq: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 150,
    top: 260
  }
});
export default Untitled6;