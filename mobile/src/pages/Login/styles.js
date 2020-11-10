import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    // paddingHorizontal: 24,

  },
  header: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Constants.statusBarHeight + 20,
  },
  actionBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  body: {
    flex: 5,
    justifyContent: 'center',
    flexDirection: 'column',
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  backgroundImage:{
    position: 'absolute',
    top: -60,
    left: 0,
    right: 0,
    width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    resizeMode: "contain",
    // opacity: 0.4
  },
  bodyAuth: {
    height: 50,
    marginVertical: 16,
  },
  bodyLogin: {
    marginVertical: 16,
    flexDirection: 'column',
  },
  bodyLoginInputs: {
    marginBottom: 24,
  },
  button: {
    width: '100%',
    elevation: 1,
    borderWidth: 0,
    marginTop: 8,
    height: 54,
    justifyContent: 'center'
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsButtonText: {
    fontSize: 15,
    fontWeight: "bold"
  }
});
