import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Checkbox = ({ label, checked, onPress }) => {
  const color = checked ? '#007AFF' : 'black';

  return (
    <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
      <View style={[styles.checkbox, { borderColor: color }]}>
        {checked && <View style={styles.checkedCircle} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkedCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#007AFF',
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default Checkbox;
