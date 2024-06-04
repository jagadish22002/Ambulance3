import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';


const ExpandableImageView = ({ imageSources, title }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleExpand} style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Icon name={expanded ? 'arrow-down' : 'arrow-right'} size={20} color="#000" />
      </TouchableOpacity>
      {expanded && (
        <View style={styles.imageContainer}>
          {imageSources.map((source, index) => (
            <Image key={index} source={source} style={styles.image} />
          ))}
        </View>
      )}
    </View>
  );
};

const ExpandableViews = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ExpandableImageView
        imageSources={[require('../assets/Amazon icon.png'), require('../assets/Amazon icon.png')]}
        title="Driving License"
      />
      <ExpandableImageView
        imageSources={[require('../assets/Amazon icon.png'), require('../assets/Amazon icon.png')]}
        title="Vehicle RC"
      />
      <ExpandableImageView
        imageSources={[require('../assets/Amazon icon.png'), require('../assets/Amazon icon.png')]}
        title="Aadhar/Pan Card"
      />
      <ExpandableImageView
        imageSources={[require('../assets/Amazon icon.png'), require('../assets/Amazon icon.png')]}
        title="Ambulance License"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    backgroundColor: '#fff',
    height: "100%"
  },
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'lightgrey',
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  image: {
    width: '48%', // Adjust this value based on your requirement
    height: 200, // Adjust this value based on your requirement
    resizeMode: 'contain'
  },
});

export default ExpandableViews;

