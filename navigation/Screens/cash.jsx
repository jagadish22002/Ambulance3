import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const PaymentScreen = () => {
  const [qrValue, setQrValue] = useState(null);

  const generateQrCode = () => {
    // Replace with your logic to generate the QR code value
    setQrValue('Generated QR Code Value');
  };

  return (
    <View style={styles.container}>
        <View style={styles.ridebill}>
          <Text style={styles.amount}>₹210</Text>
      <Text style={styles.label}>Amount to be collected</Text>
            </View>

      <Text style={styles.qrLabel}>QR Code</Text>
      <Text style={styles.qrDescription}>Generate your QR code below</Text>

      <View style={styles.qrContainer}>
        {qrValue ? (
          <QRCode value={qrValue} size={150} />
        ) : (
            <TouchableOpacity style={styles.generateButton} onPress={generateQrCode}>
            <Text style={styles.buttonText}>Generate QR code</Text>
          </TouchableOpacity>
        )}
      </View>

      
      <Text style={styles.orText}>Or</Text>

      <TouchableOpacity style={styles.collectButton}>
        <Text style={styles.buttonText}>Collect cash</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  ridebill: {
    marginTop: 70,
    alignItems: 'center',
   backgroundColor: "rgba(0,0,0,0.1)",
   width: "90%",
   padding: 20,
   borderRadius: 10,
   marginBottom: 40,

  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  qrLabel: {
    fontSize: 18,
    marginTop: 32,
    fontWeight: 'bold',
  },
  qrDescription: {
    fontSize: 14,
    marginVertical: 8,
  },
  qrContainer: {
    width: 200, // Fixed width
    height: 200, // Fixed height
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 16,
    marginVertical: 16,
    borderRadius: 8,
  },
  generateButton: {
    backgroundColor: '#F6AD38',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  collectButton: {
    backgroundColor: '#FF5C5C',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    width: "90%",
    marginTop: 20,
   
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    alignSelf: 'center',
  },
  orText: {
    fontSize: 16,
    marginVertical: 8,
  },
});

export default PaymentScreen;
