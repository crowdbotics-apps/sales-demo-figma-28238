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
      <View style={styles.View_10736_174}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef2b/8359/593262d0d7aa89e4ade509a8fa87c1e8"
          }}
          style={styles.ImageBackground_10736_175}
        />
        <View style={styles.View_10736_176}>
          <Text style={styles.Text_10736_176}>Shopping</Text>
        </View>
        <View style={styles.View_10736_177}>
          <Text style={styles.Text_10736_177}>
            Happy shopping experience with Shopify
          </Text>
        </View>
        <View style={styles.View_10736_178}>
          <View style={styles.View_10736_179} />
          <View style={styles.View_10736_180}>
            <Text style={styles.Text_10736_180}>START SHOPPING</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_10736_174: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10736_175: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.02732240437157%"),
    minHeight: hp("65.02732240437157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10736_176: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("68.85245901639344%"),
    justifyContent: "flex-start"
  },
  Text_10736_176: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_177: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("77.18579234972678%"),
    justifyContent: "flex-start"
  },
  Text_10736_177: {
    color: "rgba(149, 191, 71, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_178: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101.50273224043715%")
  },
  View_10736_179: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(149, 191, 71, 1)"
  },
  View_10736_180: {
    width: wp("60.53333333333333%"),
    minWidth: wp("60.53333333333333%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333334%"),
    top: hp("1.639344262295083%"),
    justifyContent: "center"
  },
  Text_10736_180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
