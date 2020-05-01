import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderButton from "../../components/HeaderButton";
import CustomButton from "../../components/CustomButton";

const MedicalScreen = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => {
        return (
          <HeaderButton
            name="ios-menu"
            color="white"
            size={25}
            onPress={() => {
              props.navigation.toggleDrawer();
            }}
          />
        );
      },
    });
  });
  return (
    <View style={styles.screen}>
      <View style={styles.row}>
        <CustomButton
          style={{ width: 150, alignItems: "center" }}
          onPress={() =>
            props.navigation.navigate("Stack", { title: "doctors" })
          }
        >
          Find Doctors
        </CustomButton>
        <CustomButton
          style={{ width: 150, alignItems: "center" }}
          onPress={() =>
            props.navigation.navigate("Stack", { title: "medicines" })
          }
        >
          Request Medicine
        </CustomButton>
      </View>
      <CustomButton
        style={{ width: 300, alignItems: "center", marginTop: 30 }}
        onPress={() =>
          props.navigation.navigate("Stack", { title: "diagnostic" })
        }
      >
        Requst Diagnostic
      </CustomButton>
      <CustomButton
        style={{ width: 300, alignItems: "center", marginVertical: 20 }}
      >
        Check Ticket
      </CustomButton>
    </View>
  );
};

export default MedicalScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    width: "80%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
