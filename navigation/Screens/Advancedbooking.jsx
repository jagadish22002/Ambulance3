import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { Picker } from '@react-native-picker/picker';
import Checkbox from './Checkbox';
import { useNavigation } from '@react-navigation/native';

const Advancedbooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedHour, setSelectedHour] = useState('00');
  const [selectedMinute, setSelectedMinute] = useState('00');
  const [selectedPeriod, setSelectedPeriod] = useState('AM');
  const [selectedOption, setSelectedOption] = useState('');
  const [fromPlace, setFromPlace] = useState('');
  const [toPlace, setToPlace] = useState('');
  const navigation = useNavigation();

  const minDate = new Date();
  minDate.setDate(minDate.getDate() - 1); // Set min date to yesterday

  const maxDate = new Date(Date.now() + 20 * 24 * 60 * 60 * 1000); // Set max date to 20 days from today

  const handleDayPress = (date) => {
    setSelectedDate(date);
  };

  const hours = Array.from({ length: 12 }, (_, i) => ('0' + (i + 1)).slice(-2));
  const minutes = Array.from({ length: 60 }, (_, i) => ('0' + i).slice(-2));
  const periods = ['AM', 'PM'];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const datesBlacklist = [];
  for (let i = 0; i < minDate.getDate(); i++) {
    const date = new Date(minDate);
    date.setDate(date.getDate() - i);
    datesBlacklist.push({ start: date, end: date });
  }

  const handleBookPress = () => {
    if (fromPlace && toPlace && selectedDate && selectedHour && selectedMinute && selectedPeriod && selectedOption) {
      navigation.navigate('payments');
    } else {
      alert('Please fill in all the required fields.');
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.dot} />
          <View style={styles.line} />
          <TextInput
            style={styles.input}
            placeholder="Your location"
            value={fromPlace}
            onChangeText={(text) => setFromPlace(text)}
          />
          <View style={styles.dot1} />
          <TextInput
            style={styles.input}
            placeholder="Hospital"
            value={toPlace}
            onChangeText={(text) => setToPlace(text)}
          />
        </View>
        <CalendarStrip
          style={styles.calendar}
          calendarHeaderStyle={{ color: 'black' }}
          calendarColor={'white'}
          dateNumberStyle={{ color: 'black' }}
          dateNameStyle={{ color: 'black' }}
          highlightDateNumberStyle={{ color: 'white' }}
          highlightDateNameStyle={{ color: 'white' }}
          highlightDateContainerStyle={{ backgroundColor: 'blue' }}
          iconContainer={{ flex: 0.1 }}
          minDate={minDate}
          maxDate={maxDate}
          onDateSelected={handleDayPress}
          datesBlacklist={datesBlacklist}
        />
        {selectedDate ? <Text style={styles.selectedDate}>Selected Date: {selectedDate.format('DD-MM-YYYY')}</Text> : null}

        <View style={styles.timePickerContainer}>
          <Text style={styles.selectTime}>Select time:   </Text>
          <Picker
            selectedValue={selectedHour}
            onValueChange={(itemValue) => setSelectedHour(itemValue)}
            style={styles.picker}
          >
            {hours.map((hour) => (
              <Picker.Item key={hour} label={hour} value={hour} />
            ))}
          </Picker>
          <Text>:</Text>
          <Picker
            selectedValue={selectedMinute}
            onValueChange={(itemValue) => setSelectedMinute(itemValue)}
            style={styles.picker}
          >
            {minutes.map((minute) => (
              <Picker.Item key={minute} label={minute} value={minute} />
            ))}
          </Picker>
          <Text>:</Text>
          <Picker
            selectedValue={selectedPeriod}
            onValueChange={(itemValue) => setSelectedPeriod(itemValue)}
            style={styles.picker}
          >
            {periods.map((period) => (
              <Picker.Item key={period} label={period} value={period} />
            ))}
          </Picker>
        </View>
        <Text style={styles.Selctambulance}>Select ambulance:</Text>
        <View style={styles.checklistContainer}>
         
          <Checkbox
            label="Basic life support"
            checked={selectedOption === 'Option 1'}
            onPress={() => handleOptionSelect('Option 1')}
          />
          <Checkbox
            label="Advanced life support"
            checked={selectedOption === 'Option 2'}
            onPress={() => handleOptionSelect('Option 2')}
          />
          <Checkbox
            label="Neonatal"
            checked={selectedOption === 'Option 3'}
            onPress={() => handleOptionSelect('Option 3')}
          />
          <Checkbox
            label="Mortuary"
            checked={selectedOption === 'Option 4'}
            onPress={() => handleOptionSelect('Option 4')}
          />
        </View>

        <TouchableOpacity style={styles.submitbutton} onPress={handleBookPress}>
          <Text style={styles.Sumbittext}>Book</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    flexDirection: 'coloumn',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 0.1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    padding: 10,
    flex: 1,
    marginRight: 10,
    width: '90%',
    marginTop: 10,
    marginLeft: 20,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    position: 'absolute',
    left: -10,
    top: 75,
  },
  dot1: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'lightgreen',
    position: 'absolute',
    left: -10,
    top: 25,
  },
  line: {
    width: 1,
    height: 45,
    backgroundColor:'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    left: -6,
    top: 30,
  },
  selectTime: {
    fontSize: 18,
  },
  Selctambulance: {
    fontSize: 18,
    marginTop: 40,

  },
  timePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  picker: {
    width: 70,
    height: 20,
    borderWidth: 0.5,
    borderRadius: 2,
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
  },
  checklistContainer: {
    marginTop: 10,
    paddingLeft:10,
  },
  selectTime1: {
    marginBottom: 10,
  },
  selectedDate: {
    marginTop: 20,
    fontSize: 18,
  },
  calendar: {
    height: 100,
    marginBottom: 20,
  },
  submitbutton: {
    backgroundColor: 'red',
    height: 45,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 90, // Add some margin from the checklist container
  },
  Sumbittext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  
});

export default Advancedbooking;
