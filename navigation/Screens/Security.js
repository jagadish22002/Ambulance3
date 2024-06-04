import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Security = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Security & Privacy</Text>
      <Text>This is the Security & Privacy section.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default Security;