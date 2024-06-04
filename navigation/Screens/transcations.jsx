import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const transactions = () => {
  const [selectedOption, setSelectedOption] = useState('All');
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <View style={styles.options}>
        <TouchableOpacity
          style={[styles.optionButton, selectedOption === 'All' && styles.selectedOptionButton]}
          onPress={() => handleOptionSelect('All')}>
          <Text style={[styles.optionText, selectedOption === 'All' && styles.selectedOptionText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, selectedOption === 'Received' && styles.selectedOptionButton]}
          onPress={() => handleOptionSelect('Received')}>
          <Text style={[styles.optionText, selectedOption === 'Received' && styles.selectedOptionText]}>Received</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, selectedOption === 'Paid' && styles.selectedOptionButton]}
          onPress={() => handleOptionSelect('Paid')}>
          <Text style={[styles.optionText, selectedOption === 'Paid' && styles.selectedOptionText]}>Paid</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomBorder}></View>
      {selectedOption === "All" && (
        <View>
             <View style={{ flexDirection: 'row', alignItems: 'center' ,padding: 10,}}>
        <Icon name="arrow-down-left" size={35} style={{ marginRight: 0 }} />
        <View style={{ flex: 1 }}>
          <Text style={{ marginLeft: 10 }}>Added to wallet</Text>
          <Text style={{ marginLeft: 10}}>24 Jan 2:30 PM</Text>
        </View>
        <Text style={{paddingRight: 30,color: 'green'}} >+₹ 100</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' , padding: 10,}}>
      <Icon name="arrow-up-right" size={35} style={{ marginRight: 0 }} />
      <View style={{ flex: 1 }}>
        <Text style={{ marginLeft: 10 }}>Paid to Driver</Text>
        <Text style={{ marginLeft: 10}}>24 Jan 2:30 PM</Text>
      </View>
      <Text style={{paddingRight: 30,color: 'red'}} >-₹ 100</Text>
    </View>
          </View>
       
      

      )}
       {selectedOption === "Received" && (
       <View style={{ flexDirection: 'row', alignItems: 'center' ,padding: 10,}}>
       <Icon name="arrow-down-left" size={35} style={{ marginRight: 0 }} />
       <View style={{ flex: 1 }}>
         <Text style={{ marginLeft: 10 }}>Added to wallet</Text>
         <Text style={{ marginLeft: 10}}>24 Jan 2:30 PM</Text>
       </View>
       <Text style={{paddingRight: 30,color: 'green'}} >+₹ 100</Text>
     </View>

      )}
       {selectedOption === "Paid" && (
            <View style={{ flexDirection: 'row', alignItems: 'center' , padding: 10,}}>
            <Icon name="arrow-up-right" size={35} style={{ marginRight: 0 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ marginLeft: 10 }}>Paid to Driver</Text>
              <Text style={{ marginLeft: 10}}>24 Jan 2:30 PM</Text>
            </View>
            <Text style={{paddingRight: 30,color: 'red'}} >-₹ 100</Text>
          </View>

      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
    backgroundColor: '#fff',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
   
   
    
  },
  optionButton: {
    padding: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'semibold',
  },
  selectedOptionButton: {
    borderBottomWidth: 2, 
    borderBottomColor: 'grey',
  },
  selectedOptionText: {
    color: 'black',
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    width: '100%',
    alignSelf: 'center',
    paddingTop: 10,
  },
});

export default transactions;
