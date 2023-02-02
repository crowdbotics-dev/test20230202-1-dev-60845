import { Pressable } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = ({
  navigation
}) => {
  return <SafeAreaView style={styles.safeArea} onPress={() => navigation.navigation.navigate("undefined", {})}>
        <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: 'column',
      height: '100%',
      padding: 10,
      backgroundColor: '#f0f0f1'
    }}>
        
          <View style={styles.column1}><ImageBackground style={styles.kzlxKIVn} source={require("./escudo.png")} resizeMode="cover"></ImageBackground></View>
          
          <View style={styles.column3} onPress={() => navigation.navigation.navigate("undefined", {})}><Pressable onPress={() => navigation.navigation.navigate("Untitled3", {
          "user": "test"
        })}><View style={styles.OtyNokaz}><View style={styles.qQcFDQGj}></View><View style={styles.sZJsqbCJ}><Text style={styles.rIrOJrtq}>START</Text></View><View style={styles.LcfVinKI}></View></View></Pressable><Pressable onPress={() => navigation.navigation.navigate("undefined", {})}><View style={styles.xgKoxdgt}><Text style={styles.yudAhSNP}>EXIT</Text></View></Pressable></View>
        
        </ScrollView>
      </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  column1: {
    flex: 6
  },
  column2: {
    flex: 1
  },
  column3: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "stretch"
  },
  kzlxKIVn: {
    width: 332,
    height: 396
  },
  OtyNokaz: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    flexDirection: "column",
    flex: "1",
    alignItems: "center",
    justifyContent: "center"
  },
  xgKoxdgt: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    flexDirection: "row",
    flex: "1",
    justifyContent: "center",
    alignItems: "center"
  },
  qQcFDQGj: {
    flex: 1
  },
  sZJsqbCJ: {
    flex: 1,
    width: 74,
    height: 19,
    backgroundColor: "#NaNNaNNaN"
  },
  LcfVinKI: {
    flex: 1
  },
  rIrOJrtq: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 20,
    borderRadius: 0,
    textAlign: "left",
    color: "#1a2ae5",
    fontWeight: "900"
  },
  yudAhSNP: {
    width: 37,
    height: 20,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    fontWeight: "900"
  }
});
export default Untitled2;