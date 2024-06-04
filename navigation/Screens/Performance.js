import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const Performance1 = () => {
  const [selectedFilterOption, setSelectedFilterOption] = useState('Day');
  const [selectedRideFilterOption, setSelectedRideFilterOption] = useState('All');
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [showMonthStrip, setShowMonthStrip] = useState(false);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [showWeekStrip, setShowWeekStrip] = useState(false);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [showDayStrip, setShowDayStrip] = useState(false);

  const handleFilterOptionSelect = (option) => {
    setSelectedFilterOption(option);
    setShowMonthStrip(option === 'Month');
    setShowWeekStrip(option === 'Week');
    setShowDayStrip(option === 'Day');
  };

  const handleRideFilterOptionSelect = (option) => {
    setSelectedRideFilterOption(option);
  };

  const handleTotalRidesPress = () => {
    // Handle Total Rides button press
  };

  const handlePrevMonthArrow = () => {
    setCurrentMonthIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const handleNextMonthArrow = () => {
    setCurrentMonthIndex((prevIndex) => Math.min(prevIndex + 3, 11)); // 12 months in a year
  };

  const handlePrevWeekArrow = () => {
    setCurrentWeekIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextWeekArrow = () => {
    setCurrentWeekIndex((prevIndex) => Math.min(prevIndex + 1, 4)); // 5 weeks
  };
  const handlePrevDayArrow = () => {
    setCurrentDayIndex((prevIndex) => Math.max(prevIndex - 5, 0));
  };

  const handleNextDayArrow = () => {
    setCurrentDayIndex((prevIndex) => Math.min(prevIndex + 5, 30)); // 31 days in a month
  };

  const renderMonthStrip = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const maxMonths = 3; // Maximum number of months to display
    const visibleMonths = months.slice(currentMonthIndex, currentMonthIndex + maxMonths);
    const rows = visibleMonths.map((month, index) => (
      <TouchableOpacity key={index} style={styles.optionButton}>
        <Text style={styles.optionText}>{month}</Text>
      </TouchableOpacity>
    ));

    return (
      <View style={styles.stripContainer}>
        {currentMonthIndex > 0 && (
          <TouchableOpacity style={styles.arrowButton} onPress={handlePrevMonthArrow}>
            <Icon name="arrow-left" size={20} />
          </TouchableOpacity>
        )}
        <View style={styles.selectionContainer}>{rows}</View>
        {currentMonthIndex < months.length - maxMonths && (
          <TouchableOpacity style={styles.arrowButton} onPress={handleNextMonthArrow}>
            <Icon name="arrow-right" size={20} />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderWeekStrip = () => {
    const weeks = ['1st week', '2nd week', '3rd week', '4th week', '5th week'];
    const maxWeeks = 2; // Maximum number of weeks to display
    const visibleWeeks = weeks.slice(currentWeekIndex, currentWeekIndex + maxWeeks);
    const rows = visibleWeeks.map((week, index) => (
      <TouchableOpacity key={index} style={styles.optionButton}>
        <Text style={styles.optionText}>{week}</Text>
      </TouchableOpacity>
    ));

    return (
      <View style={styles.stripContainer}>
        {currentWeekIndex > 0 && (
          <TouchableOpacity style={styles.arrowButton} onPress={handlePrevWeekArrow}>
            <Icon name="arrow-left" size={20} />
          </TouchableOpacity>
        )}
        <View style={styles.selectionContainer}>{rows}</View>
        {currentWeekIndex < weeks.length - maxWeeks && (
          <TouchableOpacity style={styles.arrowButton} onPress={handleNextWeekArrow}>
            <Icon name="arrow-right" size={20} />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderDayStrip = () => {
    const Day = Array.from({ length: 31 }, (_, index) => index + 1);
    const maxDay = 5; // Maximum number of days to display
    const visibleDay = Day.slice(currentDayIndex, currentDayIndex + maxDay);
    const rows = visibleDay.map((day, index) => (
      <TouchableOpacity key={index} style={styles.optionButton}>
        <Text style={styles.optionText}>{day}</Text>
      </TouchableOpacity>
    ));

    return (
      <View style={styles.daystripContainer}>
        {currentDayIndex > 0 && (
          <TouchableOpacity style={styles.arrowButton} onPress={handlePrevDayArrow}>
            <Icon name="arrow-left" size={20} />
          </TouchableOpacity>
        )}
        <View style={styles.dayselectionContainer}>{rows}</View>
        {currentDayIndex < Day.length - maxDay && (
          <TouchableOpacity style={styles.arrowButton} onPress={handleNextDayArrow}>
            <Icon name="arrow-right" size={20} />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.filter}>
        <TouchableOpacity
          style={[styles.button, selectedFilterOption === 'Day' && styles.selectedButton]}
          onPress={() => handleFilterOptionSelect('Day')}
        >
          <Text style={[styles.buttonText, selectedFilterOption === 'Day' && styles.selectedText]}>Day</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedFilterOption === 'Week' && styles.selectedButton]}
          onPress={() => handleFilterOptionSelect('Week')}
        >
          <Text style={[styles.buttonText, selectedFilterOption === 'Week' && styles.selectedText]}>Week</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedFilterOption === 'Month' && styles.selectedButton]}
          onPress={() => handleFilterOptionSelect('Month')}
        >
          <Text style={[styles.buttonText, selectedFilterOption === 'Month' && styles.selectedText]}>Month</Text>
        </TouchableOpacity>
      </View>
      {showMonthStrip && renderMonthStrip()}
      {showWeekStrip && renderWeekStrip()}
      {showDayStrip && renderDayStrip()}
      <View style={styles.totalincome}>
        <TouchableOpacity onPress={handleTotalRidesPress} style={styles.totalridesbutton}>
          <Text style={styles.totalridestext}>20</Text>
          <Text style={styles.totalridestext1}>Completed Rides</Text>
        </TouchableOpacity>
        <View style={styles.dottedLine} />
        <TouchableOpacity onPress={handleTotalRidesPress} style={styles.totalridesbutton}>
          <Text style={styles.totalmoney}>₹:</Text>
          <Text style={styles.totalmoney}>Money earned</Text>
        </TouchableOpacity>
      </View>
      <Text>Ride history</Text>
      <View style={styles.ridefilter}>
        <TouchableOpacity
          style={[styles.button1, selectedRideFilterOption === 'All' && styles.selectedButton]}
          onPress={() => handleRideFilterOptionSelect('All')}
        >
          <Text style={[styles.buttonText, selectedRideFilterOption === 'All' && styles.selectedText, { fontSize: 12 }]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button1, selectedRideFilterOption === 'Completed' && styles.selectedButton]}
          onPress={() => handleRideFilterOptionSelect('Completed')}
        >
          <Text style={[styles.buttonText, selectedRideFilterOption === 'Completed' && styles.selectedText, { fontSize: 12 }]}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button1, selectedRideFilterOption === 'Cancelled' && styles.selectedButton]}
          onPress={() => handleRideFilterOptionSelect('Cancelled')}
        >
          <Text style={[styles.buttonText, selectedRideFilterOption === 'Cancelled' && styles.selectedText, { fontSize: 12 }]}>Cancelled</Text>
        </TouchableOpacity>
      </View>
      <Text>23 Jan</Text>
      <View style={styles.rides}>
        <View style={styles.ridetime}>
          <Text style={styles.ridestatustext}>Completed</Text>
          <Text style={styles.ridetimetext}>8:40 pm</Text>
          <Text style={styles.ridemoney}>₹: 1000</Text>
        </View>
        <View style={styles.dottedLine1} />
        <View style={styles.rideplace}>
          <View style={styles.circle1} />
          <Text style={styles.rideplacetext1}>1-56/ac colony,xxxxxxxxxxxx</Text>
          <View style={styles.dottedLine2} />
          <View style={styles.circle2} />
          <Text style={styles.rideplacetext2}>1-56/ac colony,xxxxxxxxxxxx</Text>
        </View>
      </View>
      <Text>22 Jan</Text>
      <View style={styles.rides}>
        <View style={styles.ridetime}>
          <Text style={styles.ridestatustext}>Completed</Text>
          <Text style={styles.ridetimetext}>8:40 pm</Text>
          <Text style={styles.ridemoney}>₹: 1000</Text>
        </View>
        <View style={styles.dottedLine1} />
        <View style={styles.rideplace}>
          <View style={styles.circle1} />
          <Text style={styles.rideplacetext1}>1-56/ac colony,xxxxxxxxxxxx</Text>
          <View style={styles.dottedLine2} />
          <View style={styles.circle2} />
          <Text style={styles.rideplacetext2}>1-56/ac colony,xxxxxxxxxxxx</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    height: "100%"
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  totalincome: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(217,217,217,0.2)'
  },
  button: {
    padding: 7,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(217,217,217,0.2)',
    borderRadius: 5,
  },
  button1: {
    padding: 5,
    backgroundColor: 'rgba(217,217,217,0.2)',
    alignItems: 'center',
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: '#FB4D61',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'black',
  },
  selectedText: {
    fontWeight: 'bold',
    color: 'white',
  },
  totalridestext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
  totalridestext1: {
    fontSize: 14,
    color: 'gray',
  },
  totalmoney: {
    fontSize: 14,
    color: 'green',
  },
  ridemoney: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  totalridesbutton: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  dottedLine: {
    borderLeftWidth: 1,
    borderLeftColor: 'gray',
    borderStyle: 'dashed',
    height: '100%',
    marginHorizontal: 10,
  },
  dottedLine1: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    width: '100%',
  },
  dottedLine2: {
    borderLeftWidth: 1,
    borderBottomColor: 'black',
    height: 27,
  },
  circle1: {
    width: 13,
    height: 13,
    borderRadius: 10,
    backgroundColor: 'green',
    position: 'absolute',
    left: 9,
    top: 8,
  },
  circle2: {
    width: 13,
    height: 13,
    borderRadius: 10,
    backgroundColor: 'red',
    position: 'absolute',
    left: 9,
    top: 49,
  },
  ridefilter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  rides: {
    paddingVertical: 20,
    padding: 15,
    backgroundColor: 'rgba(217,217,217,0.2)',
    borderRadius: 10,
  },
  ridetime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ridestatustext: {
    fontSize: 16,
  },
  ridetimetext: {
    fontSize: 16,
  },
  rideplace: {
    paddingLeft: 15,
    position: 'relative',
  },
  rideplacetext1: {
    marginLeft: 40,
    fontSize: 16,
  },
  rideplacetext2: {
    marginLeft: 40,
    fontSize: 16,
  },
  stripContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: '100%',
  },
  daystripContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: '100%',
  },
  selectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '70%',
  },
  dayselectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '80%',
    
    
  },
  optionButton: {
    padding: 10,
    backgroundColor: 'rgba(217,217,217,0.2)',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    margin: 5,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrowButton: {
    padding: 10,
  },
});

export default Performance1;
