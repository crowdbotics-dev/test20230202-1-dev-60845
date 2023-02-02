import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: 'column',
      height: '100%',
      padding: 10,
      backgroundColor: '#f0f0f1'
    }}>
        
          <View style={styles.column1}><ImageBackground style={styles.kzlxKIVn} source={require("./escudo.png")} resizeMode="cover"></ImageBackground></View>
          
          <View style={styles.column3}><View style={styles.OtyNokaz}><View style={styles.qQcFDQGj}></View><View style={styles.sZJsqbCJ}><Text style={styles.rIrOJrtq}>START</Text></View><View style={styles.LcfVinKI}></View></View><View style={styles.xgKoxdgt}></View></View>
        
        </ScrollView>
      </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  column1: {
    flex: 4
  },
  column2: {
    flex: 1
  },
  column3: {
    flex: 1,
    flexDirection: "row",
    gap: 10
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
    color: "#777777"
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
  }
});
export default Untitled2;