import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import AIcon from "react-native-vector-icons/AntDesign";
import EIcon from "react-native-vector-icons/Entypo";
import ChoiceButton from "./ChoiceButton";

const Category = ({
  handlePlayClicked,
  handlePauseClicked,
  handleStopClicked,
  title,
  choices,
}) => {
  const renderChoices = () => {
    if (choices.length === 0) {
      return <Text>No Choice(s) selected yet</Text>;
    } else {
      return choices.map((item, index) => <ChoiceButton name={item.name} />);
    }
  };

  return (
    <View style={styles.parent}>
      <View style={styles.titleAndButtons}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.parent2}>
        <View style={styles.choiceList}>
          {choices.map((item, index) => (
            <ChoiceButton name={item.name} key={index} />
          ))}
        </View>
        <View style={styles.choiceParent2}>
          <AIcon
            name={"caretright"}
            size={40}
            color={"black"}
            onPress={handlePlayClicked}
          />
          <EIcon
            name={"controller-stop"}
            size={40}
            color={"black"}
            onPress={handleStopClicked}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  parent2: {
    justifyContent: "space-around",
    flexDirection: "row"
  },
  choiceParent: {
    flexDirection: "row",
  },
  choiceList: {
    flexDirection: "row",
    minWidth: 250,
  },
  choiceParent2: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft: 5,
    paddingTop: 10,
    flex: 0.5,
  },
  titleAndButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    flex: 0.5,
    paddingTop: 5,
  },
  actionButton: {
    backgroundColor: "black",
    color: "white",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 5,
  },
});
export default Category;
