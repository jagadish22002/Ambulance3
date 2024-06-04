import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

function Register() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.mainContainer}>
        <Text style={styles.headertext}>
        Fill in all sections to register 
        </Text>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.text}>Profile Details</Text>
          <Icon name="arrowright" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.text}>Driving License</Text>
          <Icon name="arrowright" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.text}>Vehicle RC</Text>
          <Icon name="arrowright" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.text}>Aadhar/Pan</Text>
          <Icon name="arrowright" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.text}>Ambulance License</Text>
          <Icon name="arrowright" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Nextbutton}>
          <Text style={styles.nexttext}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    
  },
  headertext: {
   fontSize: 20,
   fontWeight: 'semibold',
   paddingTop: 10,
   paddingBottom: 20,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(217, 217, 217, 0.1)',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    height: 80,
    borderWidth: 0.5,
    borderColor: 'black',
    shadowColor: 'rgba(0, 0, 0, 0.0)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 2,
  },
  text: {
    fontSize: 18,
    marginRight: 10,
  },
  icon: {
    fontSize: 30,
    color: 'blue',
  },
  Nextbutton: {
    backgroundColor: '#FB4D61',
    width: "90%",
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    alignSelf: 'center'
  },
  nexttext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Register;
