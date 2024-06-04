import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Security from "./Screens/Security"
const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.back}>
        <Icon1 name="arrowleft" size={25} style={styles.arrowIcon} />
      </TouchableOpacity>
      <Security/>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.help}>
        <Icon1 name="questioncircleo" size={20} style={styles.helpicon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: 'blue',
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  arrowIcon: {
    color: 'white',
  },
  helpicon: {
    color: "white",
  }
});

export default Header;

