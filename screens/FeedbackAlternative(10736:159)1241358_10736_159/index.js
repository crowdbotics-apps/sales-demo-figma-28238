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
      <View style={styles.View_10736_160}>
        <View style={styles.View_10736_161}>
          <Text style={styles.Text_10736_161}>Feedback Typeform</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48b9/14fc/67d92fae97364ba4e4fae9869bf73db1"
          }}
          style={styles.TouchableOpacity_10736_162}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10736_54"))
          }
        />
      </View>
      <View style={styles.View_10736_163}>
        <View style={styles.View_10736_164}>
          <Text style={styles.Text_10736_164}>
            Please share your feedback with us to improve your user experience!
          </Text>
        </View>
        <View style={styles.View_10736_165}>
          <Text style={styles.Text_10736_165}>👏 Made with Bravo</Text>
        </View>
        <View style={styles.View_10736_166}>
          <Text style={styles.Text_10736_166}>Submit</Text>
        </View>
        <View style={styles.View_10736_167} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_10736_160: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20.62841530054645%"),
    minHeight: hp("20.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_10736_161: {
    width: wp("66.13333333333333%"),
    minWidth: wp("66.13333333333333%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("11.202185792349727%"),
    justifyContent: "center"
  },
  Text_10736_161: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10736_162: {
    width: wp("5.936092631022135%"),
    minWidth: wp("5.936092631022135%"),
    height: hp("3.0410310609744546%"),
    minHeight: hp("3.0410310609744546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.202408854166667%"),
    top: hp("4.527199333482753%")
  },
  View_10736_163: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("90.30054644808743%"),
    minHeight: hp("90.30054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.62841530054645%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10736_164: {
    width: wp("81.06666666666666%"),
    minWidth: wp("81.06666666666666%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_10736_164: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_165: {
    width: wp("49.6%"),
    minWidth: wp("49.6%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%"),
    top: hp("81.28415300546447%"),
    justifyContent: "center"
  },
  Text_10736_165: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_166: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("66.25683060109289%"),
    justifyContent: "center"
  },
  Text_10736_166: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_167: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("53.825136612021865%"),
    minHeight: hp("53.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.661202185792348%"),
    backgroundColor: "rgba(221, 221, 221, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
