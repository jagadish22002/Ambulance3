// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon1 from 'react-native-vector-icons/Feather';
// import Icon2 from 'react-native-vector-icons/FontAwesome';

// const Earnings = () => {
//   const [selectedOption, setSelectedOption] = useState('All Earnings');
//   const [selectedfilter, setselectedfilter] = useState(null); // Changed initial state to null
//   const [selectedfilteroptions, setselectedfilteroptions] = useState('All transactions'); // Corrected to 'All transactions'
//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };
//   const handlefilterSelect = (filter) => {
//     setselectedfilter(filter === selectedfilter ? null : filter); // Toggle filter visibility
//   };
//   const handlefilteroptionsSelect = (options) => {
//     setselectedfilteroptions(options);
//   };

//   return (
//     <ScrollView>

 
//     <View style={styles.container}>
//       <View style={styles.options}>
//         <TouchableOpacity
//           style={[styles.optionButton, selectedOption === 'All Earnings' && styles.selectedOptionButton]}
//           onPress={() => handleOptionSelect('All Earnings')}>
//           <Text style={[styles.optionText, selectedOption === 'All Earnings' && styles.selectedOptionText]}>All Earnings</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.optionButton, selectedOption === 'Wallet' && styles.selectedOptionButton]}
//           onPress={() => handleOptionSelect('Wallet')}>
//           <Text style={[styles.optionText, selectedOption === 'Wallet' && styles.selectedOptionText]}>Wallet</Text>
//         </TouchableOpacity>
//       </View>
  
//       {selectedOption === 'All Earnings' && (
//         <View>
//              <View style={styles.viewbalance}>
//           <TouchableOpacity>
//             <Text style={styles.viewbalanceText}>₹ 10,000</Text>
//             <Text style={{ alignSelf: 'center', paddingBottom: 10 }}>Your Earnings</Text>
//           </TouchableOpacity>
//              </View>
//                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' ,padding: 10,paddingTop: 50, }}>
//                <Text style={{ textAlign: 'center' ,fontSize: 16 }}>Transaction history </Text>
//               <TouchableOpacity
//               style={[styles.filterButton, selectedfilter === 'filter' && styles.selectedFilterButton]}
//               onPress={() => handlefilterSelect('filter')}>
//               <Icon1 name='filter' size={30}></Icon1>
//                 </TouchableOpacity>
//                  </View>
                
                      

//         {selectedfilter === 'filter' && (
//             <View>
//              <View style={styles.bottomLine1}></View>
//           <View style={styles.filterOptions}>
       
//           <TouchableOpacity
//             style={[styles.filterOption, selectedfilteroptions === 'All transactions' && styles.selectedFilterOption]}
//             onPress={() => handlefilteroptionsSelect('All transactions')}>
//             <Text style={[styles.filterOptionText, selectedfilteroptions === 'All transactions' && styles.selectedFilterOptiontext]}>All transactions</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.filterOption, selectedfilteroptions === 'completed' && styles.selectedFilterOption]}
//             onPress={() => handlefilteroptionsSelect('completed')}>
//             <Text style={[styles.filterOptionText, selectedfilteroptions === 'completed' && styles.selectedFilterOptiontext]}>completed</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.filterOption, selectedfilteroptions === 'incentives' && styles.selectedFilterOption]}
//             onPress={() => handlefilteroptionsSelect('incentives')}>
//             <Text style={[styles.filterOptionText, selectedfilteroptions === 'incentives' && styles.selectedFilterOptiontext]}>incentives</Text>
//           </TouchableOpacity>
//         </View>
        
//                 </View>
           
//               )}
//             </View>
       
//       )}

    

//       {selectedOption === 'Wallet' && (
//         <View>
//             <View style={styles.viewbalance}>
//           <TouchableOpacity>
//             <Text style={styles.viewbalanceText}>₹ 1000</Text>
//             <Text style={{ alignSelf: 'center', paddingBottom: 10 }}>Your wallet balance</Text>
//           </TouchableOpacity>

//           <View style={styles.bottomLine}></View>
//           <View style={styles.bankoption}>
//             <TouchableOpacity style={styles.bankIconContainer}>
//               <Icon name='bank' size={40} color="grey" style={styles.bankIcon} />
//               <Text style={styles.bankOptionText}>Bank transfer</Text>
//             </TouchableOpacity>
//             <View style={styles.bankLine}></View>
//             <View>
//               <Text style={{ alignSelf: 'center', fontSize: 16 }}>Transfer left: 1</Text>
//               <Text style={{ alignSelf: 'center', fontSize: 12 }}>Note : Refreshes daily</Text>
//             </View>
//           </View>
//         </View>
//          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' ,padding: 10,paddingTop: 50, }}>
//          <Text style={{ textAlign: 'center' ,fontSize: 16 }}>Transaction history </Text>
//        <TouchableOpacity
//           style={[styles.filterButton, selectedfilter === 'filter' && styles.selectedFilterButton]}
//          onPress={() => handlefilterSelect('filter')}>
//          <Icon1 name='filter' size={30}></Icon1>
//          </TouchableOpacity>
//              </View>
            
                  

//     {selectedfilter === 'filter' && (
//         <View>
//         <View style={styles.bottomLine1}></View>
//      <View style={styles.filterOptions}>
  
//      <TouchableOpacity
//        style={[styles.filterOption, selectedfilteroptions === 'All transactions' && styles.selectedFilterOption]}
//        onPress={() => handlefilteroptionsSelect('All transactions')}>
//        <Text style={[styles.filterOptionText, selectedfilteroptions === 'All transactions' && styles.selectedFilterOptiontext]}>All transactions</Text>
//      </TouchableOpacity>
//      <TouchableOpacity
//        style={[styles.filterOption, selectedfilteroptions === 'Receieved' && styles.selectedFilterOption]}
//        onPress={() => handlefilteroptionsSelect('Receieved')}>
//        <Text style={[styles.filterOptionText, selectedfilteroptions === 'Receieved' && styles.selectedFilterOptiontext]}>Receieved</Text>
//      </TouchableOpacity>
//      <TouchableOpacity
//        style={[styles.filterOption, selectedfilteroptions === 'Transferred' && styles.selectedFilterOption]}
//        onPress={() => handlefilteroptionsSelect('Transferred')}>
//        <Text style={[styles.filterOptionText, selectedfilteroptions === 'Transferred' && styles.selectedFilterOptiontext]}>Transferred</Text>
//      </TouchableOpacity>
//    </View>
   
//            </View>
          
//           )}
//             </View>
        
//       )}

     
// <View style={{ width: "90%", alignSelf: "center" }}>
//   <Text style={{ padding: 10, fontSize: 18, paddingBottom: 10 }}>24 Feb</Text>
//   <View style={{ flexDirection: 'row', alignItems: 'center', width: "95%", alignSelf: "center" }}>
//     <Icon name='gift' size={40} />
//     <View style={{ marginLeft: 30 }}>
//       <Text>Incentive</Text>
//       <Text>Incentive received</Text>
//       <Text>10:45 am</Text>
//     </View>
//     <View style={{ marginLeft: 'auto' }}>
//       <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20 }}>₹ 50</Text>
//     </View>
//   </View>
//   <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '95%', alignSelf: 'center', marginTop: 10 }} />
//   <View style={{ flexDirection: 'row', alignItems: 'center', width: "95%", alignSelf: "center" }}>
//     <Icon name='gift' size={40} />
//     <View style={{ marginLeft: 30 }}>
//       <Text>Incentive</Text>
//       <Text>Incentive received</Text>
//       <Text>10:45 am</Text>
//     </View>
//     <View style={{ marginLeft: 'auto' }}>
//       <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20 }}>₹ 100</Text>
//     </View>
//   </View>
//   <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '95%', alignSelf: 'center', marginTop: 10 }} />
//   <View style={{ flexDirection: 'row', alignItems: 'center', width: "95%", alignSelf: "center" }}>
//     <Icon2 name='rupee' size={40} style={{paddingLeft: 14,}} />
//     <View style={{ marginLeft: 30 }}>
//       <Text>Order earnings</Text>
//       <Text>Tx123457459859</Text>
//       <Text>10:45 am</Text>
//     </View>
//     <View style={{ marginLeft: 'auto' }}>
//       <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20 }}>₹ 130</Text>
//     </View>
//   </View>
//   <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '95%', alignSelf: 'center', marginTop: 10 }} />

//   <Text style={{ padding: 10, fontSize: 18, paddingBottom: 10 }}>23 Feb</Text>
//   <View style={{ flexDirection: 'row', alignItems: 'center', width: "95%", alignSelf: "center" }}>
//     <Icon name='gift' size={40} />
//     <View style={{ marginLeft: 30 }}>
//       <Text>Incentive</Text>
//       <Text>Incentive received</Text>
//       <Text>10:45 am</Text>
//     </View>
//     <View style={{ marginLeft: 'auto' }}>
//       <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20 }}>₹ 50</Text>
//     </View>
//   </View>
//   <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '95%', alignSelf: 'center', marginTop: 10 }} />
// </View>


     

 
//     </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: 'white',
//     height: 800,
//     flexGrow: 1,
//   },
//   options: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 20,
//   },
//   optionButton: {
//     padding: 10,
//     backgroundColor: 'rgba(217,217,217,0.2)',
//     borderRadius: 10,
//     margin: 5,
//   },
//   optionText: {
//     fontSize: 16,
//   },
//   selectedOptionButton: {
//     backgroundColor: 'red',
//   },
//   selectedOptionText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   viewbalance: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#f5f5f5',
//     borderRadius: 10,
//     elevation: 3,
//     shadowColor: 'grey',
//     width: '95%',
//     alignSelf: 'center',
//   },
//   viewbalanceText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: 'green',
//     alignSelf: 'center',
//   },
//   bankIconContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     flexDirection: 'row', // Added to align icon and text horizontally
//   },
//   bankIcon: {
//     marginRight: 10,
//   },
//   bankOptionText: {
//     fontSize: 16,
//   },
//   bankoption: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     alignSelf: 'center',

//   },
//   bankLine: {
//     height: 70,
//     width: 1,
//     backgroundColor: 'grey',
//     marginHorizontal: 10,
//   },
//   bottomLine: {
//     borderBottomWidth: 1,
//     borderBottomColor: 'grey',
   

//   },
//   filterButton: {

//   },
//   selectedFilterButton: {
//     backgroundColor: 'lightgrey',
//     borderRadius: 10,

//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   filterOptions: {
//     flexDirection: 'row',

//     marginTop: 20,
//   },
//   filterOption: {
//     padding: 2,
//     backgroundColor: '#f5f5f5',
//     paddingLeft: 10,
//     paddingRight: 10,
//     borderRadius: 5,
//     margin: 5,
//   },
//   selectedFilterOption: {
//     backgroundColor: 'red',
//   },
//   filterOptionText: {
//     fontSize: 16,
//     color: 'black',
//   },
//   selectedFilterOptiontext: {
//     fontSize: 16,
//     color: 'white',
//   },
//   bottomLine1: {
//     width: "95%",
//     alignSelf: 'center',
//     borderWidth: 0.2,
//     borderColor: 'black',
//     elevation: 1,

//   }
  
// });

// export default Earnings;
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const Earnings = () => {
  const [selectedOption, setSelectedOption] = useState('All Earnings');
  const [selectedfilter, setselectedfilter] = useState(null);
  const [selectedfilteroptions, setselectedfilteroptions] = useState('All transactions');
  const [earningsData, setEarningsData] = useState([]);
  const [walletData, setWalletData] = useState(null);
  const [transactionsData, setTransactionsData] = useState([]);

  useEffect(() => {
    fetchEarningsData();
  }, []);

  const fetchEarningsData = async () => {
    try {
      const response = await axios.get('http://192.168.0.96:4000/earnings/3'); // Replace with actual driver ID
      const data = response.data;
      setEarningsData(data.earnings);
      setWalletData(data.wallet);
      setTransactionsData(data.transactions);
    } catch (error) {
      console.error('Error fetching earnings data:', error);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handlefilterSelect = (filter) => {
    setselectedfilter(filter === selectedfilter ? null : filter);
  };

  const handlefilteroptionsSelect = (options) => {
    setselectedfilteroptions(options);
  };

  const renderTransactionHistory = () => {
    let filteredTransactions = transactionsData;
  
    if (selectedfilteroptions !== 'All transactions') {
      filteredTransactions = transactionsData.filter(
        (transaction) => transaction.type === selectedfilteroptions
      );
    }
  
    return filteredTransactions.map((transaction, index) => (
      <View key={index}>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: "95%", alignSelf: "center", margin: 10 }}>
          {transaction.type === 'incentive' ? (
            <Icon name='gift' size={40} />
          ) : (
            <Icon2 name='rupee' size={40} style={{ paddingLeft: 14 }} />
          )}
          <View style={{ marginLeft: 30 }}>
            <Text>{transaction.type === 'incentive' ? 'Incentive' : 'Order earnings'}</Text>
            <Text>{transaction.type === 'incentive' ? 'Incentive received' : transaction.id}</Text>
            <Text>{new Date(transaction.date).toLocaleDateString()} {new Date(transaction.date).toLocaleTimeString()}</Text>
          </View>
          <View style={{ marginLeft: 'auto' }}>
            <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 20 }}>₹ {transaction.amount}</Text>
          </View>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: '95%', alignSelf: 'center', margin: 5 }} />
      </View>
    ));
  };
  

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.options}>
          <TouchableOpacity
            style={[styles.optionButton, selectedOption === 'All Earnings' && styles.selectedOptionButton]}
            onPress={() => handleOptionSelect('All Earnings')}
          >
            <Text style={[styles.optionText, selectedOption === 'All Earnings' && styles.selectedOptionText]}>All Earnings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.optionButton, selectedOption === 'Wallet' && styles.selectedOptionButton]}
            onPress={() => handleOptionSelect('Wallet')}
          >
            <Text style={[styles.optionText, selectedOption === 'Wallet' && styles.selectedOptionText]}>Wallet</Text>
          </TouchableOpacity>
        </View>

        {selectedOption === 'All Earnings' && (
          <View>
            <View style={styles.viewbalance}>
              <TouchableOpacity>
                <Text style={styles.viewbalanceText}>₹ {earningsData.reduce((total, earning) => total + parseFloat(earning.amount), 0)}</Text>
                <Text style={{ alignSelf: 'center', paddingBottom: 10 }}>Your Earnings</Text>
              </TouchableOpacity>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10, paddingTop: 50 }}>
              <Text style={{ textAlign: 'center', fontSize: 16 }}>Transaction history</Text>
              <TouchableOpacity
                style={[styles.filterButton, selectedfilter === 'filter' && styles.selectedFilterButton]}
                onPress={() => handlefilterSelect('filter')}
              >
                <Icon1 name='filter' size={30} />
              </TouchableOpacity>
            </View>

            {selectedfilter === 'filter' && (
              <View>
                <View style={styles.bottomLine1}></View>
                <View style={styles.filterOptions}>
                  <TouchableOpacity
                    style={[styles.filterOption, selectedfilteroptions === 'All transactions' && styles.selectedFilterOption]}
                    onPress={() => handlefilteroptionsSelect('All transactions')}
                  >
                    <Text style={[styles.filterOptionText, selectedfilteroptions === 'All transactions' && styles.selectedFilterOptiontext]}>All transactions</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.filterOption, selectedfilteroptions === 'completed' && styles.selectedFilterOption]}
                    onPress={() => handlefilteroptionsSelect('completed')}
                  >
                    <Text style={[styles.filterOptionText, selectedfilteroptions === 'completed' && styles.selectedFilterOptiontext]}>completed</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.filterOption, selectedfilteroptions === 'incentives' && styles.selectedFilterOption]}
                    onPress={() => handlefilteroptionsSelect('incentives')}
                  >
                    <Text style={[styles.filterOptionText, selectedfilteroptions === 'incentives' && styles.selectedFilterOptiontext]}>incentives</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {renderTransactionHistory()}
          </View>
        )}

        {selectedOption === 'Wallet' && (
          <View>
            <View style={styles.viewbalance}>
              <TouchableOpacity>
                <Text style={styles.viewbalanceText}>₹ {walletData ? walletData.balance : 0}</Text>
                <Text style={{ alignSelf: 'center', paddingBottom: 10 }}>Your wallet balance</Text>
              </TouchableOpacity>

              <View style={styles.bottomLine}></View>
              <View style={styles.bankoption}>
                <TouchableOpacity style={styles.bankIconContainer}>
                  <Icon name='bank' size={40} color="grey" style={styles.bankIcon} />
                  <Text style={styles.bankOptionText}>Bank transfer</Text>
                </TouchableOpacity>
                <View style={styles.bankLine}></View>
                <View>
                  <Text style={{ alignSelf: 'center', fontSize: 16 }}>Transfer left: 1</Text>
                  <Text style={{ alignSelf: 'center', fontSize: 12 }}>Note : Refreshes daily</Text>
                </View>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10, paddingTop: 50 }}>
              <Text style={{ textAlign: 'center', fontSize: 16 }}>Transaction history</Text>
              <TouchableOpacity
                style={[styles.filterButton, selectedfilter === 'filter' && styles.selectedFilterButton]}
                onPress={() => handlefilterSelect('filter')}
              >
                <Icon1 name='filter' size={30} />
              </TouchableOpacity>
            </View>

            {selectedfilter === 'filter' && (
              <View>
                <View style={styles.bottomLine1}></View>
                <View style={styles.filterOptions}>
                  <TouchableOpacity
                    style={[styles.filterOption, selectedfilteroptions === 'All transactions' && styles.selectedFilterOption]}
                    onPress={() => handlefilteroptionsSelect('All transactions')}
                  >
                    <Text style={[styles.filterOptionText, selectedfilteroptions === 'All transactions' && styles.selectedFilterOptiontext]}>All transactions</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.filterOption, selectedfilteroptions === 'Receieved' && styles.selectedFilterOption]}
                    onPress={() => handlefilteroptionsSelect('Receieved')}
                  >
                    <Text style={[styles.filterOptionText, selectedfilteroptions === 'Receieved' && styles.selectedFilterOptiontext]}>Receieved</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.filterOption, selectedfilteroptions === 'Transferred' && styles.selectedFilterOption]}
                    onPress={() => handlefilteroptionsSelect('Transferred')}
                  >
                    <Text style={[styles.filterOptionText, selectedfilteroptions === 'Transferred' && styles.selectedFilterOptiontext]}>Transferred</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {renderTransactionHistory()}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    height: 800,
    flexGrow: 1,
  },

  scroll: {
    flexGrow: 1,

  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  optionButton: {
    padding: 10,
    backgroundColor: 'rgba(217,217,217,0.2)',
    borderRadius: 10,
    margin: 5,
  },
  optionText: {
    fontSize: 16,
  },
  selectedOptionButton: {
    backgroundColor: 'red',
  },
  selectedOptionText: {
    color: 'white',
    fontWeight: 'bold',
  },
  viewbalance: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    elevation: 3,
    shadowColor: 'grey',
    width: '95%',
    alignSelf: 'center',
  },
  viewbalanceText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'green',
    alignSelf: 'center',
  },
  bankIconContainer: {
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  bankIcon: {
    marginRight: 10,
  },
  bankOptionText: {
    fontSize: 16,
  },
  bankoption: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  bankLine: {
    height: 70,
    width: 1,
    backgroundColor: 'grey',
    marginHorizontal: 10,
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  filterButton: {},
  selectedFilterButton: {
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterOptions: {
    flexDirection: 'row',
    marginTop: 20,
  },
  filterOption: {
    padding: 2,
    backgroundColor: '#f5f5f5',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    margin: 5,
  },
  selectedFilterOption: {
    backgroundColor: 'red',
  },
  filterOptionText: {
    fontSize: 16,
    color: 'black',
  },
  selectedFilterOptiontext: {
    fontSize: 16,
    color: 'white',
  },
  bottomLine1: {
    width: "95%",
    alignSelf: 'center',
    borderWidth: 0.2,
    borderColor: 'black',
    elevation: 1,
  },
});

export default Earnings;
