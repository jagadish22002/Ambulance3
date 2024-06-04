import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import paytm from '../assets/Paytm icon.png';
import phonephe from '../assets/Phonepe icon.png';
import Bhim from '../assets/Bhin icon.png';
import Upi from '../assets/Upi icon.png';
import Amazon from '../assets/Amazon icon.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Octicons';

const PaymentLinksPage = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleSelection = (method) => {
    setSelectedMethod(selectedMethod === method ? null : method);
  };

  const renderCheckbox = (method) => {
    return (
      <TouchableOpacity
        onPress={() => handleSelection(method)}
        style={[styles.checkbox, selectedMethod === method && styles.checked]}>
        {selectedMethod === method && <Icon2 name="dot-fill" size={15} color='white' />}
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>

        <Text style={styles.headings}>App wallet</Text>

        <View style={styles.paymentsbackground}>
        <TouchableOpacity style={styles.link} onPress={() => handleSelection('Wallet')}>
       <Icon1 name="wallet" size={27} color="black" style={styles.icon1}/>
       <Text style={styles.paymenttext}>Wallet</Text>
        {renderCheckbox('Wallet')}
         </TouchableOpacity>
        {selectedMethod === 'Wallet' && (
        <View style={styles.balanceContainer}>
      <Text style={styles.balanceText}>Your wallet balance: $100</Text>
    </View>
  )}
</View>
        <Text style={styles.headings}>Wallets</Text>
        <View style={styles.paymentsbackground}>
          <TouchableOpacity style={styles.link} onPress={() => handleSelection('PhonePe')}>
            <Image source={paytm} style={styles.icon}></Image>
            <Text style={styles.paymenttext}>PhonePe</Text>
            {renderCheckbox('PhonePe')}
          </TouchableOpacity>
          <TouchableOpacity style={styles.link} onPress={() => handleSelection('Paytm')}>
            <Image source={phonephe} style={styles.icon}></Image>
            <Text style={styles.paymenttext}>Paytm</Text>
            {renderCheckbox('Paytm')}
          </TouchableOpacity>
          <TouchableOpacity style={styles.link} onPress={() => handleSelection('Bhim')}>
            <Image source={Bhim} style={styles.icon}></Image>
            <Text style={styles.paymenttext}>Bhim</Text>
            {renderCheckbox('Bhim')}
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}   onPress={() => handleSelection('Bank Account')}>
            <Image source={Upi} style={styles.icon}></Image>
            <Text style={styles.paymenttext}>Add another UPI</Text>
            <Text style={styles.add}> Add</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.headings}>Other Wallets</Text>
        <View style={styles.paymentsbackground}>
          <TouchableOpacity style={styles.link} onPress={() => handleSelection('Paytm Wallet')}>
            <Image source={paytm} style={styles.icon}></Image>
            <Text style={styles.paymenttext}>Paytm Wallet</Text>
            {renderCheckbox('Paytm Wallet')}
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}  onPress={() => handleSelection('Bank Account')}>
            <Image source={Amazon} style={styles.icon}></Image>
            <Text style={styles.paymenttext}>Amazon Wallet</Text>
            <Text style={styles.add}> Link</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.headings}>Cards</Text>
        <View style={styles.paymentsbackground}>
          <TouchableOpacity style={styles.link}  onPress={() => handleSelection('Bank Account')} >
            <Icon name="credit-card" size={25} color="black" style={styles.icon1}/>
            <Text style={styles.paymenttext}>Add credit or debit cards</Text>
            <Text style={styles.add}> Add</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.headings}>Net banking</Text>
        <View style={styles.paymentsbackground}>
          <TouchableOpacity style={styles.link} onPress={() => handleSelection('Bank Account')}>
            <Icon name="bank" size={25} color="black" style={styles.icon1}/>
            <Text style={styles.paymenttext}>Add bank account</Text>
            <Text style={styles.add}> Add</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.headings}>Pay by Cash</Text>
        <View style={styles.paymentsbackground}>
          <TouchableOpacity style={styles.link} onPress={() => handleSelection('Cash')}>
            <Icon name="money" size={25} color="black" style={styles.icon1}/>
            <Text style={styles.paymenttext}>Cash</Text>
            {renderCheckbox('Cash')}
          </TouchableOpacity>
        </View>
        <View style={styles.submitbox}>
          <Text style={styles.submittext1}>₹:1000</Text>
        <TouchableOpacity style={styles.submitbutton} >
          <Text style={styles.Sumbittext}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
  },
  paymentsbackground: {
    backgroundColor: 'rgba(217, 217, 217, 0.5)',
    width: '100%',
    borderRadius: 9,
    padding: 5,
    // shadowColor: '#000000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 100, // Adjust the shadow blur radius as needed
    // elevation: 0, // For Android
    // borderBottomWidth: 2.6, // Add a border at the bottom to create the shadow effect
    // borderBottomColor: 'rgba(0, 0, 0, 0.2)', // Color of the shadow
  },
  headings: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.4)',
  },
  paymenttext: {
    fontSize: 16,
    paddingLeft: 10,
  },
  icon: {
    width: 48,
    height: 15,
    marginRight: 10,
  },
  icon1: {
    width: 30,
    marginRight: 20,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    top: 10,
  },
  checked: {
    backgroundColor: 'green',
  },
  add: {
  color: 'red',
  fontWeight: 'bold',
  fontSize: 18,
  position: 'absolute',
  right: 10,
  top: 10,

  },
  submitbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(217, 217, 217, 0.5)',
    width: '100%',
    marginTop: 100,
    height: 80,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  
  },
  submitbutton: {
    backgroundColor: 'red',
    height: 50,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  Sumbittext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    
  
  },
  submittext1: {
  fontSize: 20,
  marginLeft: 30,
  fontWeight: 'bold'
  },
});

export default PaymentLinksPage;
