import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    // display: 'none',
    paddingHorizontal: 24,
    marginTop: Constants.statusBarHeight + 20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerAvatar: {},
  headerTitle: {},
  headerDescription: {},

  actionBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {},
  buttonText: {},

  body: { height: 100, width: 200, },
  actionTitle: {},


  galery: {},

  servicesList: {
    backgroundColor: 'white'
  },
  service: {},
  serviceDescription: {},
  servicePrice: {},



});
