import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_10736_3}>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf2b/93f3/283c87363773be032ae04bacddd9f5b8"
          }}
          style={styles.TouchableOpacity_10736_4}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10736_54"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aabe/1396/fd615cd1e4048408cbc34d871b644426"
          }}
          style={styles.TouchableOpacity_10736_9}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10736_51"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9720/16e0/ae1287d4e351d283075c0f1d328b1a02"
          }}
          style={styles.TouchableOpacity_10736_14}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10736_20"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/290b/830c/a99a2d0ef1627df25c5ccc9b84218817"
          }}
          style={styles.TouchableOpacity_10736_16}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10736_48"))
          }
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_10736_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101.91256830601093%"),
    backgroundColor: "rgba(149, 191, 71, 1)",
    overflow: "hidden"
  },
  TouchableOpacity_10736_4: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.80000000000001%")
  },
  TouchableOpacity_10736_9: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%")
  },
  TouchableOpacity_10736_14: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%")
  },
  TouchableOpacity_10736_16: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("2.049180327868868%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
