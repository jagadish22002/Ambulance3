import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const Incentives = () => {
  const [selectedFilterOption, setSelectedFilterOption] = useState('Day');
 
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [showMonthStrip, setShowMonthStrip] = useState(false);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [showWeekStrip, setShowWeekStrip] = useState(false);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [showDayStrip, setShowDayStrip] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('');
 
  const [selectedWeek, setSelectedWeek] = useState('');
  const [selectedDay, setSelectedDay] = useState('');


  const handleFilterOptionSelect = (option) => {
    setSelectedFilterOption(option);
    setShowMonthStrip(option === 'Month');
    setShowWeekStrip(option === 'Week');
    setShowDayStrip(option === 'Day');
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

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setSelectedWeek('');
    setSelectedDay('');
  };
  
  const handleWeekSelect = (week) => {
    setSelectedWeek(week);
    setSelectedMonth('');
    setSelectedDay('');
  };
  
  const handleDaySelect = (day) => {
    setSelectedDay(day);
    setSelectedMonth('');
    setSelectedWeek('');
  };

  

  const renderMonthStrip = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const maxMonths = 3; // Maximum number of months to display
    const visibleMonths = months.slice(currentMonthIndex, currentMonthIndex + maxMonths);
    const rows = visibleMonths.map((month, index) => (
   
        <TouchableOpacity
          key={index}
          style={[
            styles.optionButton,
            selectedMonth === month && styles.selectedOptionButton,
          ]}
          onPress={() => handleMonthSelect(month)}
        >
          <Text style={[styles.optionText, selectedMonth === month && styles.selectedOptionText]}>{month}</Text>
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
      <TouchableOpacity
      key={index}
      style={[
        styles.optionButton,
        selectedWeek === week && styles.selectedOptionButton,
      ]}
      onPress={() => handleWeekSelect(week)}
    >
      <Text style={[styles.optionText, selectedWeek === week && styles.selectedOptionText]}>{week}</Text>
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
    const currentDate = new Date();
const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
const Day = Array.from({ length: daysInMonth }, (_, index) => index + 1);
    const maxDay = 5; // Maximum number of days to display
    const visibleDay = Day.slice(currentDayIndex, currentDayIndex + maxDay);
    const rows = visibleDay.map((day, index) => (
      <TouchableOpacity
      key={index}
      style={[
        styles.optionButton,
        selectedDay === day && styles.selectedOptionButton,
      ]}
      onPress={() => handleDaySelect(day)}
    >
      <Text style={[styles.optionText, selectedDay === day && styles.selectedOptionText]}>{day}</Text>
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
      <View style={styles.bottomline}></View>
      {showMonthStrip && renderMonthStrip()}
      {showWeekStrip && renderWeekStrip()}
      {showDayStrip && renderDayStrip()}

      {selectedFilterOption === 'Day' && (
        <View>
          <View style={styles.getmoney}>
        <Text style={styles.atext}> Earn   ₹ 50  more   </Text>
        <Text style={styles.btext}>by completing 5 rides</Text>
      </View>

      <View style={styles.offerscontainer}>
      <View style={styles.offers}>
         <View style={styles.offerTextContainer}>
            <Text style={styles.offertext}>Complete 2 rides and get</Text>
            <Text style={styles.offertext1}>Complete rides before 28/02/2024</Text>
         </View>
            <Text style={styles.offerprize}>₹ 25</Text>
         </View>
         <View style={styles.offers}>
         <View style={styles.offerTextContainer}>
            <Text style={styles.offertext}>Complete 2 rides and get</Text>
            <Text style={styles.offertext1}>Complete rides before 28/02/2024</Text>
         </View>
            <Text style={styles.offerprize}>₹ 50</Text>
         </View>

      </View>
          </View>

      )}

{selectedFilterOption === 'Week' && (
        <View>
          <View style={styles.getmoney}>
        <Text style={styles.atext}> Earn   ₹ 100  more   </Text>
        <Text style={styles.btext}>by completing 15 rides</Text>
      </View>

      <View style={styles.offerscontainer}>
      <View style={styles.offers}>
         <View style={styles.offerTextContainer}>
            <Text style={styles.offertext}>Complete 7 rides and get</Text>
            <Text style={styles.offertext1}>Complete rides before 28/02/2024</Text>
         </View>
            <Text style={styles.offerprize}>₹ 40</Text>
         </View>
         <View style={styles.offers}>
         <View style={styles.offerTextContainer}>
            <Text style={styles.offertext}>Complete 15 rides and get</Text>
            <Text style={styles.offertext1}>Complete rides before 28/02/2024</Text>
         </View>
            <Text style={styles.offerprize}>₹ 60</Text>
         </View>

      </View>
          </View>

      )}

      {selectedFilterOption === 'Month' && (
        <View>
          
      <View style={styles.getmoney}>
        <Text style={styles.atext}> Earn   ₹ 3000  more   </Text>
        <Text style={styles.btext}>by completing 100 rides</Text>
      </View>

      <View style={styles.offerscontainer}>
      <View style={styles.offers}>
         <View style={styles.offerTextContainer}>
            <Text style={styles.offertext}>Complete 10 rides and get</Text>
            <Text style={styles.offertext1}>Complete rides before 28/02/2024</Text>
         </View>
            <Text style={styles.offerprize}>₹ 100</Text>
         </View>
         <View style={styles.offers}>
         <View style={styles.offerTextContainer}>
            <Text style={styles.offertext}>Complete 25 rides and get</Text>
            <Text style={styles.offertext1}>Complete rides before 28/02/2024</Text>
         </View>
            <Text style={styles.offerprize}>₹ 400</Text>
         </View>
         <View style={styles.offers}>
         <View style={styles.offerTextContainer}>
            <Text style={styles.offertext}>Complete 50 rides and get</Text>
            <Text style={styles.offertext1}>Complete rides before 28/02/2024</Text>
         </View>
            <Text style={styles.offerprize}>₹ 1000</Text>
         </View>
         <View style={styles.offers}>
         <View style={styles.offerTextContainer}>
            <Text style={styles.offertext}>Complete 100 rides and get</Text>
            <Text style={styles.offertext1}>Complete rides before 28/02/2024</Text>
         </View>
            <Text style={styles.offerprize}>₹ 1500</Text>
         </View>



      </View>
          </View>

      )}
       

      
     
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
  button: {
    padding: 7,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(217,217,217,0.2)',
    borderRadius: 5,
  },
  bottomline: {
  borderWidth: 1,
  borderColor: 'rgba(217,217,217,0.5)',
  borderStyle: 'solid',

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
  selectedOptionButton: {
    backgroundColor: 'red',
  },
  selectedOptionText: {
    color: 'white',
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
    
  },
  arrowButton: {
    padding: 10,
  },
  getmoney: {
    marginTop: 40,
    padding: 10,
    backgroundColor: '#FB4D61',
    borderRadius: 5,
    width: "90%",
    alignSelf: 'center',
    textAlign: 'center',
    
  },
  atext: {
    fontSize: 18,
    fontWeight: 'semibold',
    color: 'white',
    textAlign: 'center',
  },
  btext: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  offerscontainer:{
    padding: 10,
    paddingLeft: 20,
    backgroundColor: 'white',
    borderRadius: 10,  
    elevation: 5,
    shadowColor: "blue",
   
    marginTop: 20,
    width: "95%",
    alignSelf: 'center',
  },
  offers: {
    marginTop: 10,
    padding: 15,
    backgroundColor: 'rgba(217,217,217,0.2)',
    borderRadius: 5,
    width: '87%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  offerTextContainer: {
    flex: 1,
  },
  offertext: {
    fontSize: 14,
    fontWeight: 'semibold',
  },
  offertext1: {
    fontSize: 10,
    paddingTop: 5,
  },
  offerprize: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'semibold',
  },
});

 export default Incentives;
