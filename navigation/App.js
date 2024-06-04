
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Home from './Screens/Home';
// import Menu from './Screens/Menu';
// import Settings from './Screens/Settings';
// import Advancedbooking from './Screens/Advancedbooking';
// import PaymentLinksPage from './Screens/Paymentpages';
// import Mybookings from './Screens/Mybooking';
// import AddMoneyToWallet from './Screens/Addmoneywallet';
// import Register from './Screens/Register';
// import Drivermenu from './Screens/Drivermenu';
// import Performance1 from './Screens/Performance';
// import Incentives from './Screens/incentives';
// import ExpandableViews from './Screens/Driverdocuments';
// import Earnings from './Screens/Earnings';
// import transactions from './Screens/transcations';
// import Driverridedetails from './Screens/Driverridedetails';
// import ProfilePage from './Screens/Driverprofile';
// import RideDetailsScreen from './Screens/Ridedetails';
// import RideAlert from './Screens/Ridealert';
// import PaymentScreen from './Screens/cash';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Earnings/Reedem"
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: 'blue',
//           },
//           headerTintColor: 'white',
//           headerTitleStyle: {
//             color: 'white',
//           },
//           headerRight: () => (
//             <TouchableOpacity onPress={() => alert('Help is currently unavialable')}>
//               <Icon
//                 name="questioncircleo"
//                 size={22}
//                 style={{ marginRight: 10, color: 'white' }}
//               />
//             </TouchableOpacity>
//           ),
//         }}
//       >
//         <Stack.Screen name='Home' component={Home}/>
//         <Stack.Screen name='Menu' component={Menu}/>
//         <Stack.Screen name='Advanced booking' component={Advancedbooking}/>
//         <Stack.Screen name='Settings' component={Settings}/>
//         <Stack.Screen name='payments' component={PaymentLinksPage}/>
//         <Stack.Screen name='My bookings' component={Mybookings}/>
//         <Stack.Screen name='Add money' component={AddMoneyToWallet}/>
//         <Stack.Screen name='Register' component={Register}/>
//         <Stack.Screen name='Dmenu' component={Drivermenu}/>
//         <Stack.Screen name='Performance' component={Performance1}/>
//         <Stack.Screen name='Incentives' component={Incentives}/>
//         <Stack.Screen name="documents" component={ExpandableViews}/>
//         <Stack.Screen name="Earnings/Reedem" component={Earnings}/>
//         {/* <Stack.Screen name= 'All transactions' component={transactions}/> */}
//         <Stack.Screen name= 'Ride Details' component={Driverridedetails}/>
//         <Stack.Screen name='Driver profilepage' component={ProfilePage}/>
//         <Stack.Screen name='Ride deatils' component={RideDetailsScreen}/>
//         <Stack.Screen name ='ride alert' component={RideAlert}/>
//         <Stack.Screen name ='cash' component={PaymentScreen}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
