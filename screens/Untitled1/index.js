import { CheckBox } from "react-native-elements";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import { View } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.tvDDrhAK}><View style={styles.NYwKOzTw}><ImageBackground style={styles.XowgTtYc} source={require("./1.png")} resizeMode="cover"></ImageBackground></View><View style={styles.BIytHHHQ}><Text style={styles.oNeoOyNx}>User Name</Text></View><View style={styles.CSvWyVFo}><TextInput style={styles.HDSXVtqv}></TextInput></View><View style={styles.hwsuLCtY}><Text style={styles.bhLOqEQD}>Password</Text></View><View style={styles.bTzepmxj}><View style={styles.orXeDUfK}><TextInput style={styles.ItUKAOom}></TextInput></View></View><View style={styles.bqDIGOsq}><Text style={styles.IpcUydYx}>Forgot Password?</Text></View><View style={styles.gYPaFsIl}><CheckBox style={styles.ubSnVRnC} title="Remember me"></CheckBox></View><View style={styles.JnGtjsSL}><View style={styles.vPnmGACm}><View style={styles.foxZmHzw}><Text style={styles.cSYMzoMT}>LOGIN</Text></View></View></View></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  tvDDrhAK: {
    flex: 1
  },
  qXIFiVVf: {
    width: 107,
    height: 62
  },
  NYwKOzTw: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  BIytHHHQ: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "start"
  },
  CSvWyVFo: {
    flex: 1
  },
  hwsuLCtY: {
    flex: 1,
    width: 338,
    height: 55,
    alignItems: "start",
    justifyContent: "flex-end"
  },
  bTzepmxj: {
    flex: 1,
    flexDirection: "row"
  },
  bqDIGOsq: {
    flex: 1,
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "flex-start"
  },
  gYPaFsIl: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  XowgTtYc: {
    width: 187,
    height: 190
  },
  oNeoOyNx: {
    width: 100,
    height: 21,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  bhLOqEQD: {
    width: 100,
    height: 17,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  HDSXVtqv: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 339,
    height: 30
  },
  ItUKAOom: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 334,
    height: 30
  },
  KVTGwagH: {
    width: 183,
    height: 69
  },
  IpcUydYx: {
    width: 114,
    height: 25,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "relative",
    color: "#7b20ef"
  },
  bjVetWYf: {
    height: 30,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  orXeDUfK: {
    flex: 1
  },
  JnGtjsSL: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  ubSnVRnC: {
    width: 183,
    height: 69
  },
  vPnmGACm: {
    height: 30,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    flexDirection: "row",
    flex: "1",
    justifyContent: "center",
    alignItems: "center"
  },
  cSYMzoMT: {
    width: 138,
    height: 23,
    lineHeight: 14,
    fontSize: 16,
    borderRadius: 0,
    textAlign: "center",
    color: "#170eeb",
    fontWeight: "900"
  },
  foxZmHzw: {
    flex: 1,
    width: 140,
    height: 25
  }
});
export default Untitled1;