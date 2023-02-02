import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled5 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.lvrrvZUR}><ImageBackground style={styles.HzPtYHpK} source={require("./escudo.png")} resizeMode="cover"></ImageBackground><Text style={styles.LoemwNyP}>Lorem ipsum…</Text></View><View style={styles.RMAfdYTo}><ImageBackground style={styles.MPvOwDiu} source={require("./ferro.png")} resizeMode="cover"></ImageBackground><Text style={styles.aOXcXvRi}>Lorem ipsum…</Text></View><View style={styles.VzjCznYj}><ImageBackground style={styles.mtRCncEn} source={require("./barcelona.png")} resizeMode="cover"></ImageBackground><Text style={styles.ejmvjKpj}>Lorem ipsum…</Text></View><View style={styles.UxsJQlhQ}><ImageBackground style={styles.qgGpPFld} source={require("./1.png")} resizeMode="cover"></ImageBackground><Text style={styles.MtFalXLG}>Lorem ipsum…</Text></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  lvrrvZUR: {
    flex: 1,
    flexDirection: "row"
  },
  RMAfdYTo: {
    flex: 1,
    flexDirection: "row"
  },
  VzjCznYj: {
    flex: 1,
    flexDirection: "row"
  },
  UxsJQlhQ: {
    flex: 1,
    flexDirection: "row"
  },
  HzPtYHpK: {
    width: 122,
    height: 127
  },
  LoemwNyP: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  MPvOwDiu: {
    width: 119,
    height: 111
  },
  mtRCncEn: {
    width: 118,
    height: 103
  },
  qgGpPFld: {
    width: 116,
    height: 123
  },
  aOXcXvRi: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  ejmvjKpj: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  MtFalXLG: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled5;