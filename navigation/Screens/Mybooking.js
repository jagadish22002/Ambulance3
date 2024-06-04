import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ambulance from '../assets/ambulance.png';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const Mybookings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Detailsbox}>
        <TouchableOpacity style={styles.Detailinfo}>
          <Image source={ambulance} style={styles.image} />
          <View style={styles.Details}>
            <Text>Apollo hospital, madhapur</Text>
            <Text>10 Feb 2024 12:20pm</Text>
            <Text>₹ 210. Complete</Text>
          </View>
          <Icon name="arrow-right" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.Detailsbox}>
        <TouchableOpacity style={styles.Detailinfo}>
          <Image source={ambulance} style={styles.image} />
          <View style={styles.Details}>
            <Text>Apollo hospital, madhapur</Text>
            <Text>10 Feb 2024 12:20pm</Text>
            <Text>₹ 210. Complete</Text>
          </View>
          <Icon name="arrow-right" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.Detailsbox}>
        <TouchableOpacity style={styles.Detailinfo}>
          <Image source={ambulance} style={styles.image} />
          <View style={styles.Details}>
            <Text>Apollo hospital, madhapur</Text>
            <Text>10 Feb 2024 12:20pm</Text>
            <Text>₹ 210. Complete</Text>
          </View>
          <Icon name="arrow-right" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.Detailsbox}>
        <TouchableOpacity style={styles.Detailinfo}>
          <Image source={ambulance} style={styles.image} />
          <View style={styles.Details}>
            <Text>Apollo hospital, madhapur</Text>
            <Text>10 Feb 2024 12:20pm</Text>
            <Text>₹ 210. Complete</Text>
          </View>
          <Icon name="arrow-right" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.Detailsbox}>
        <TouchableOpacity style={styles.Detailinfo}>
          <Image source={ambulance} style={styles.image} />
          <View style={styles.Details}>
            <Text>Apollo hospital, madhapur</Text>
            <Text>10 Feb 2024 12:20pm</Text>
            <Text>₹ 210. Complete</Text>
          </View>
          <Icon name="arrow-right" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  Detailsbox: {
    width: '90%',
    padding: 10,
    borderBottomWidth: 0.2,
    borderColor: 'black',
  },
  Detailinfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
  },
  Details: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
});

export default Mybookings;
