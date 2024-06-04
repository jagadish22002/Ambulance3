// Home.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Screen</Text>
      <Button
        title="Go to Menu"
        onPress={() => navigation.navigate('Menu')}
      />
      <Button
        title="Go to Advanced Booking"
        onPress={() => navigation.navigate('Advanced booking')}
      />
           <Button
        title="Go to My bookings"
        onPress={() => navigation.navigate('My bookings')}
      />
     <Button
     title="Go to Mywallet"
     onPress={() => navigation.navigate('Add money')}
   />
    <Button
     title="Go to register"
     onPress={() => navigation.navigate('Register')}
   />
    <Button
     title="Go to Drivermenu"
     onPress={() => navigation.navigate('Dmenu')}
   />
   
   <Button
     title="Go to driverdocuments"
     onPress={() => navigation.navigate('documents')}
   />
 
 </View>
  );
};

export default Home;
