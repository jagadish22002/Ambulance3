import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const AddMoneyToWallet = () => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleAddMoney = (value) => {
    const newAmount = value;
    setAmount(newAmount.toString());
  };

  const handleCustomAmount = (text) => {
    setAmount(text);
  };

  const handleSubmit = () => {
    const parsedAmount = parseFloat(amount);
    if (parsedAmount < 50) {
      setMessage('Minimum amount is ₹50');
    } else if (parsedAmount > 5000) {
      setMessage('Maximum amount is ₹5000');
    }
    setAmount('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={handleCustomAmount}
        placeholder="Enter amount (min ₹50, max ₹5000)"
        keyboardType="numeric"
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleAddMoney(100)}>
          <Text style={styles.buttonText}>₹100</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleAddMoney(200)}>
          <Text style={styles.buttonText}>₹200</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleAddMoney(300)}>
          <Text style={styles.buttonText}>₹300</Text>
        </TouchableOpacity>
      </View>
      {message ? <Text style={styles.message}>{message}</Text> : null}
      <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtontext}>
          Add money
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    width: '30%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: 'red',
  },
  addButton: {
    position: 'absolute',
    bottom: 70,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
  },
  addButtontext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddMoneyToWallet;
